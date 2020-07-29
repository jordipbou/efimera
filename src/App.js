import { html, define, render } from 'hybrids'
import { 
  add, append, curry, filter, findIndex, insert, 
  length, map, prop, propEq 
  } from 'ramda'
import { v4 as uuidv4 } from 'uuid'

import './Block.js'
import './SaveBlock.js'

const insertAfter = curry((predicate, element, list) =>
  insert (add (1) (findIndex (predicate) (list)))
         (element)
         (list))

const deleteBlock = (host, evt) => {
  if (!propEq ('uuid') (evt.target.uuid) (head (host.blocks))) {
    if (!propEq ('uuid') (evt.target.uuid) (last (host.blocks))) {
      focusAdjacentBlock (1) (host, evt)
    } else {
      focusAdjacentBlock (-1) (host, evt)
    }
    host.blocks = filter ((b) => b.uuid !== evt.target.uuid)
                         (host.blocks)
  } else {
    evt.target.result = ''
  }
}

const createBlock = (host, evt) => {
  let new_block = {
    uuid: uuidv4 (),
    doc: '',
    result: '',
    multiline: false
  }

  if (host === undefined) {
    return new_block
  } else {
    host.blocks = insertAfter (propEq ('uuid') (evt.target.uuid))
                              (new_block)
                              (host.blocks)
  }
}

const createBlockIfLast = (host, evt) =>
  propEq ('uuid') (evt.target.uuid) (last (host.blocks)) ?
    createBlock  (host, evt)
    : null

const focusAdjacentBlock = (d) => (host, evt) => {
  let bs = document.getElementsByTagName ('e-block')
  let index = 
    add (d) 
        (findIndex (propEq ('uuid') (evt.target.uuid)) (bs))
  index >= 0 && index < length (bs) ?
    bs [index].editor.focus ()  
    : null
}

const scrollToEnd = (host, evt) => {
  if (!propEq ('uuid') (evt.target.uuid) (last (host.blocks))) {
    host.scrollTop = host.scrollHeight
  }
}

export const App = {
  saveBlock: false,
  blocks: [ createBlock () ],
  render: render (
    ({ saveBlock, blocks, console }) => html`
      <div id="app-container">
        ${addIndex (map) ((block, index) => html`
            <e-block doc=${block.doc} 
                     index=${index}
                     uuid=${block.uuid}
                     data-uuid=${block.uuid}
                     oncreateblock=${createBlock}
                     oncreateblockiflast=${createBlockIfLast}
                     ondeleteblock=${deleteBlock}
                     onnextblock=${focusAdjacentBlock (1)}
                     onprevblock=${focusAdjacentBlock (-1)}
                     onscrolltoend=${scrollToEnd}
                     onsaveblock=${(host) => { host.saveBlock = true }}>
            </e-block>
          `.key (block.uuid),
          blocks )}
        <div id="preview" class="hidden"></div>
      </div>
      ${saveBlock && html`
      <e-save-block onclose="${(h, e) => {h.saveBlock = false }}" 
                    block="let a = 5" />
      `}
    `,
    { shadowRoot: false })
}

define ('e-app', App)      
