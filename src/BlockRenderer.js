// A block renderer renders a block content and possibly
// added content (like autocompletions) to HTML

import { html } from 'hybrids'
import { caret } from './Block.js'
import { addIndex, isNil, length, map } from 'ramda'

const styles = `
.line {
  height: 1em;
  padding: 0em;
  margin: 0em;
}

.caret {
  display: inline-block;
  background-color: red;
  width: 0.5em;
  height: 1.5em;
}
`

const renderNoCaretLine = (line) => html`
  <div class="line">
    ${line}
  </div>
`

const renderCaretLine = (line, caret) => html`
  <div class="line">
    ${addIndex (map)
               ((ch, idx) => idx === caret [0] ?
                               html`<span class="caret">${ch}</span>`
                               : ch)
               (line)}
    ${caret [0] === length (line) ?
       html`<span class="caret"></span>`
       : ''}
  </div>
`

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
