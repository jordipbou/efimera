// A block renderer renders a block content and possibly
// added content (like autocompletions) to HTML

import { dispatch, html } from 'hybrids'
import { 
  addIndex, cond, head, is, isNil, join, length, 
  map, replace, slice, tail
  } from 'ramda'
import { caret } from './Block.js'


// -------------------- Line rendering utilities -------------------------

export const htmlSpaces = (t) => replace (/ /g) ('&nbsp;') (t)

export const lineDiv = (i) => (p) => (e) => (c) => (t) =>
  html`<div class="line" onclick=${ onclick (i) }>${p}${e}${c}${t}</div>`

export const promptSpan = (first) =>
  first ?
    html`<span class="prompt">&gt;&nbsp;</span>`
    : html`<span class="prompt">…&nbsp;</span>`

export const caretSpan = (c) => {
  let character = 
    (c === ' ' || c === '' || c === undefined) ?
      html`&nbsp;`
      : c
  return html`<span class="caret">${character}</span>`
}

export const autocompletionSpan = (a) => (c) => 
  html`<span class="autocompletion">${caretSpan(c)}</span>${a}</span>`

export const renderLine = (idx) => (line) =>
  html`${ lineDiv (idx) 
                  (promptSpan (idx === 0)) 
                  ('') 
                  ('') 
                  (line) }`

export const renderCaretLine = 
  (idx) => (line) => (caret) => (autocompletion) => {
    let character = line [caret [0]]
    let isSpace = character === undefined 
               || character === ' ' 
               || character === ''
    let pre = slice (0) (caret [0]) (line)
    let post = slice (caret [0] + 1) (Infinity) (line)

    if (isSpace && length (autocompletion) > 0) {
      return html`${ lineDiv (idx)
                             (promptSpan (idx === 0)) 
                             (pre)
                             (autocompletionSpan (tail (autocompletion))
                                                 (head (autocompletion)))
                             (post) }`
    } else {
      return html`${ lineDiv (idx)
                             (promptSpan (idx === 0))
                             (pre)
                             (caretSpan (character))
                             (post) }`
    }
  }
 
export const renderLines = (block, focus = true) => 
  focus ?
    addIndex 
      (map)
      ((line, idx) => idx === block.cursor [1] ?
                        renderCaretLine (idx)
                                        (line)
                                        (caret (block))
                                        (block.autocompletion)
                        : renderLine (idx) (line))
      (block.lines)
    : addIndex (map) 
               ((line, idx) => renderLine (idx)
                                          (line))
               (block.lines)

// ----------------------- Input block rendering -------------------------

const styles = `
.line { min-height: 1em;
        line-height: 1;
        padding: 0em;
        margin: 0em; }

.line:focus { outline-style: none; }

.caret { min-width: 0.5em;
         animation: blink .75s step-end infinite; }

@keyframes blink { from, to { background-color: var(--term-background); 
                              color: var(--term-color); }
                   50% { background-color: var(--term-background-inverted);
                         color: var(--term-color-inverted); } }

.autocompletion .caret { animation: auto-blink .75s step-end infinite; }

@keyframes auto-blink { 
  from, to { background-color: var(--term-background);
             color: var(--autocompletion-color); }
  50% { background-color: var(--term-background-inverted);
        color: var(--autocompletion-color-inverted); } }

.autocompletion { color: var(--autocompletion-color); }

`

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
  `.style (styles)
})
