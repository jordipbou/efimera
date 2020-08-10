import { dispatch } from 'hybrids'
import { join, map } from 'ramda'
import * as acorn from 'acorn'

//import { toHTML } from './PrettyPrint.js'

export const is_evaluable = (code) => {
  let source_code = join ('\n') (code)
  try {
    acorn.parse (source_code) 
    return true
  } catch (error) {
    return false
  }
}

export const evaluate_code = (code) => {
  // TODO: Add hack to use import as if it was (pikaImport)
  // let hack...to be able to use let with global variables
  let modified = 
    map ((line) => 
      line.replace (/^let/, 'var')
          .replace (/^const/, 'var'))
        (code)
  //        .replace (/@view/, 
  //                 'document.querySelector (\'[data-uuid="' + host.uuid + '"] .view\')')
  //        .replace (/@block/,
  //                 'document.querySelector (\'[data-uuid="' + host.uuid + '"]\')'))
  //      (code)

  let strcode = join ('\n') (modified)

  return window.eval (strcode)

  //dispatch (host, 'scrolltoend')

  //host.result = toHTML (result)
}
