import * as acorn from 'acorn'
import { 
  adjust, append, concat, drop, evolve, filter, head, init, is, join, 
  last, length, take, path, prepend, prop, reduce, sort, 
  startsWith, tail, without
  } from 'ramda'
import { caret } from './Block.js'

let keywords = [
  'await', 'break', 'case', 'catch', 'class', 'const', 'continue', 
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 
  'extends', 'finally', 'for', 'function', 'if', 'implements', 'import', 
  'in', 'interface', 'instanceof', 'let', 'new', 'package', 'private', 
  'protected', 'public', 'return', 'static', 'super', 'switch', 'this', 
  'throw', 'try', 'typeof', 'var', 'void', 'while', 'with', 'yield' ]

// As seen on:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
let builtInObjects = [
  'Infinity', 'NaN', 'undefined', 'globalThis', 'eval', 'uneval', 
  'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'encodeURI', 
  'encodeURIComponent', 'decodeURI', 'decodeURIComponent', 'Object', 
  'Function', 'Boolean', 'Symbol', 'Error', 'AggregateError', 
  'EvalError', 'InternalError', 'RangeError', 'ReferenceError', 
  'SyntaxError', 'TypeError', 'URIError', 'Number', 'BigInt', 'Math', 
  'Date', 'String', 'RegExp', 'Array', 'Int8Array', 'Uint8Array', 
  'Uint8ClampedArray', 'Int16Array', 'Uint16Array', 'Int32Array', 
  'Uint32Array', 'Float32Array', 'Float64Array', 'BigInt64Array', 
  'BigUint64Array', 'Map', 'Set', 'WeakMap', 'WeakSet', 'ArrayBuffer', 
  'SharedArrayBuffer', 'Atomics', 'DataView', 'JSON', 'Promise', 
  'Generator', 'GeneratorFunction', 'AsyncFunction', 'Reflection', 
  'Reflect', 'Proxy', 'Intl', 'WebAssembly', 'arguments' ]

// The pattern has to be consistent:
// name dot name dot name dot
// It can end at any level:
// name
// name dot
// name dot name
const innerGetScope = (tokens) => (from_name) => (scope) => {
  if (length (tokens) > 0) {
    let last_token = last (tokens)
    if (last_token.type.label === 'name') {
      if (from_name) {
        return scope
      } else {
        return innerGetScope (init (tokens)) 
                             (true) 
                             (prepend (last_token.value) (scope))
      }
    } else if (last_token.type.label === '.') {
      if (from_name === false) {
        return scope
      } else {
        return innerGetScope (init (tokens)) 
                             (false) 
                             (prepend ('.') (scope))
      }
    }
  }

  return scope
}

const getScope = (tokens) => {
  let result = innerGetScope (tokens) (undefined) ([])
  let scope = without ('.') (init (result))
  let name = last (result)
  name = name === '.' ? '' : name
  return [scope, name]
}

export const autocomplete = (block) => {
  let code =
    join ('\n')
         (take (caret (block) [1] + 1)
               (prop ('lines')
                     (evolve ({ lines: adjust (caret (block) [1])
                                              (take (caret (block) [0])) })
                             (block))))

  try {
    let tokens = [...acorn.tokenizer (code)]
    let [scope, name] = getScope (tokens)

    let completions = []
    if (name !== undefined && (last (code) === last (name) || (length (scope) > 0 && name === ''))) {
      // Search on scope
      for (let p in path (scope) (window)) {
        if (startsWith (name) (p)) {
          completions = append (p) (completions)
        }
      }
    }

    if (length (name) > 0 && length (scope) === 0) {
      // Search on keywords
      completions = concat (completions) (filter (startsWith (name)) (keywords))
      // Search on built in objects
      completions = concat (completions) (filter (startsWith (name)) (builtInObjects))
    }

    completions = sort ((a, b) => a.localeCompare (b)) (completions)

    let autocompletion = longestCommonSubstring (completions)
    autocompletion = autocompletion === undefined ? '' : autocompletion
    autocompletion = drop (length (name)) (autocompletion)

    if (autocompletion === '' && length (completions) > 1) {
      autocompletion = '...'
    }

    return [completions, name, autocompletion]
  } catch {
    return [[], '', '']
  }
}

export const longestCommonSubstring = (s1) => 
  is (Array, s1) ?
    reduce ((acc, value) => longestCommonSubstring (acc) (value))
           (head (s1))
           (tail (s1))
    : (s2) =>
        head (s1) === head (s2) && length (s1) > 0 && length (s2) > 0 ?
          head (s1) + longestCommonSubstring (tail (s1)) (tail (s2))
          : ''
