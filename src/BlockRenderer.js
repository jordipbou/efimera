// A block renderer renders a block content and possibly
// added content (like autocompletions) to HTML

import { html } from 'hybrids'
import { caret } from './Block.js'
import { addIndex, isNil, join, length, map, slice } from 'ramda'

const styles = `
.line {
  line-height: 1;
  padding: 0em;
  margin: 0em;
}

.caret {
  min-width: 0.5em;
  animation: blink .75s step-end infinite;
}

@keyframes blink {
  from, to { background-color: white; 
             color: black; }
  50% { background-color: black;
        color: white; }
}
`

const renderNoCaretLine = (line) => html`
  <div class="line">
    ${line}
  </div>
`

const renderCaretLine = (l, c) => 
  length (l) <= c [0] ?
    html`
      <div class="line">
        ${slice (0) (c [0]) (l)}<span class="caret">&nbsp;</span>
      </div>`
    : html`
        <div class="line">
          ${slice (0) (c [0]) (l)}<span class="caret">${l [c [0]] }</span>${slice (c [0] + 1) (Infinity) (l)}
         </div>`


const renderLines = (block) => 
  addIndex (map)
           ((line, idx) => idx === block.cursor [1] ?
                             renderCaretLine (line, caret (block))
                             : renderNoCaretLine (line))
           (block.lines)

export const createRenderer = () => ({
  render: (block) => html`
    ${renderLines (block)}
  `.style (styles)
})
