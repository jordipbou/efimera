import { html, define, render } from 'hybrids'
import { 
  add, append, curry, filter, findIndex, insert, 
  length, map, prop, propEq 
  } from 'ramda'
import { v4 as uuidv4 } from 'uuid'

import './Block.js'

const insertAfter = curry((predicate, element, list) =>
  insert (add (1) (findIndex (predicate) (list)))
         (element)
         (list))

const deleteBlock = (host, evt) => {
  if (!propEq ('uuid') (evt.detail.uuid) (head (host.blocks))) {
    if (!propEq ('uuid') (evt.detail.uuid) (last (host.blocks))) {
      focusAdjacentBlock (1) (host, evt)
    } else {
      focusAdjacentBlock (-1) (host, evt)
    }
    host.blocks = filter ((b) => b.uuid !== evt.detail.uuid)
                         (host.blocks)
  } else {
    evt.detail.result = ''
  }
}

const createBlock = (host, evt) => {
  let new_block = {
    uuid: uuidv4 (),
    doc: '',
    result: ''
  }

  if (host === undefined && evt === undefined) {
    return new_block
  } else {
    host.blocks = insertAfter (propEq ('uuid') (evt.detail.uuid))
                              (new_block)
                              (host.blocks)
  }
}

const createBlockIfLast = (host, evt) =>
  propEq ('uuid') (evt.detail.uuid) (last (host.blocks)) ?
    createBlock (host, evt)
    : null

const focusAdjacentBlock = (d) => (host, evt) => {
  let bs = document.getElementsByTagName ('e-block')
  let index = 
    add (d) 
        (findIndex (propEq ('uuid') (evt.detail.uuid)) (bs))
  index >= 0 && index < length (bs) ?
    bs [index].editor.focus ()  
    : null
}

const scrollToEnd = (host, evt) => {
  console.log ('on scrollToEnd')
  if (!propEq ('uuid') (evt.detail.uuid) (last (host.blocks))) {
    console.log ('is last block, scrolling')
    let container = host.querySelector ('e-app')
    container.scrollTop = container.scrollHeight
  }
}

export const App = {
  blocks: [ createBlock () ],
  render: render (
    ({ blocks, console }) => html`
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
                   onscrolltoend=${scrollToEnd}>
          </e-block>
        `.key (block.uuid),
        blocks )}
    `,
    { shadowRoot: false })
}

define ('e-app', App)
