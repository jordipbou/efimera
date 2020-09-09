// A block renderer renders a block content and possibly
// added content (like autocompletions) to HTML

import { dispatch, html } from 'hybrids'
import { 
  addIndex, cond, head, is, isNil, join, length, 
  map, replace, slice, tail
  } from 'ramda'
import { caret } from './Block.js'


// -------------------- Line rendering utilities -------------------------

export const htmlEntities = (t) => 
  replace (/</g) 
          ('&gt;') 
          (replace (/</g)
                   ('&lt;')
                   (replace (/ /g) ('&nbsp;') (t)))

export const lineDiv = (i) => (p) => (e) => (c) => (t) =>
   html`<div class="line" onclick=${ onclick (i) }>${ html ([p]) }${ html ([htmlEntities (e)]) }${ html ([c]) }${ html ([htmlEntities (t)]) }</div>`

export const promptSpan = (first) =>
  first ?
    '<span class="prompt">&gt;&nbsp;</span>'
    : '<span class="prompt">…&nbsp;</span>'

export const caretSpan = (c) => {
  let character = 
    (c === ' ' || c === '' || c === undefined) ?
      '&nbsp;'
      : c
  return '<span class="caret">' + character + '</span>'
}

export const autocompletionSpan = (a) => (c) => 
  '<span class="autocompletion">' + caretSpan(c) + '</span>' + a + '</span>'

export const renderLine = (idx) => (line) =>
  lineDiv (idx) 
          (promptSpan (idx === 0)) 
          ('') 
          ('') 
          (line)

export const renderCaretLine = 
  (idx) => (line) => (caret) => (autocompletion) => {
    let character = line [caret [0]]
    let isSpace = character === undefined 
               || character === ' ' 
               || character === ''
    let pre = slice (0) (caret [0]) (line)
    let post = slice (caret [0] + 1) (Infinity) (line)

    if (isSpace && length (autocompletion) > 0) {
      return lineDiv (idx)
                     (promptSpan (idx === 0)) 
                     (pre)
                     (autocompletionSpan 
                       (tail (autocompletion))
                       (head (autocompletion)))
                     (post)
    } else {
      return lineDiv (idx)
                     (promptSpan (idx === 0))
                     (pre)
                     (caretSpan (character))
                     (post)
    }
  }
 
export const renderLines = (block, focus = true) =>
  addIndex
    (map)
    ((line, idx) => focus && idx === block.cursor [1] ?
                      renderCaretLine (idx) 
                                      (line) 
                                      (caret (block))
                                      (block.autocompletion)
                      : renderLine (idx) (line))
    (block.lines)

// ----------------------- Input block rendering -------------------------

const onclick = (idx) => (host, evt) => {
  let charwidth = host.render ().querySelector ('.line').clientHeight / 2
  let x = Math.floor (evt.x / charwidth) - 2 // 2 for prompt size
  dispatch (host, 'movecursorto', { detail: { line: idx, x: x },
                                    bubbles: true,
                                    composed: true })
}

export const createRenderer = () => ({
  render: (block, focused) => html`
    ${ renderLines (block, focused) }
  `
})
