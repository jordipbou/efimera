import { dispatch } from 'hybrids'
import { filter } from 'ramda'
import { 
  defaultKeymap, cursorPageUp, cursorPageDown,
  deleteCharBackward, deleteCharForward,
  insertNewlineAndIndent,
  cursorLineUp, cursorLineDown,
  selectLineUp, selectLineDown
  } from "@codemirror/next/commands"
import { evaluate_code } from './Eval.js'

// Helpers
const isBeginningOfBlock = (view) => {
  let selection = view.state.selection
  let range = selection.ranges [selection.primaryIndex]
  return range.from === 0 && range.to === 0
}

const isEndOfBlock = (view) => {
  let docLength = view.state.doc.length
  let selection = view.state.selection
  let range = selection.ranges [selection.primaryIndex]
  return range.from === docLength && range.to === docLength
}

// There were problems rewriting these keys if defaultKeymap
// was added.
const filteredKeymap = 
  filter ((i) => i.key !== 'PageUp' 
              && i.key !== 'PageDown'
              && i.key !== 'Backspace'
              && i.key !== 'Delete'
              && i.key !== 'ArrowUp'
              && i.key !== 'ArrowDown'
              && i.key !== 'Enter')
         (defaultKeymap)

export const customKeymap = (host) => [
  ...filteredKeymap,
  { key: "ArrowUp",
    run: (view) =>
      isBeginningOfBlock (view) ?
        dispatch (host, 'prevblock')
        : cursorLineUp (view),
    shift: selectLineUp
    },
  { key: "ArrowDown",
    run: (view) =>
      isEndOfBlock (view) ?
        dispatch (host, 'nextblock')
        : cursorLineDown (view),
    shift: selectLineDown
    },
  { key: "Backspace",
    run: (view) => 
      isBeginningOfBlock (view) && isEndOfBlock (view) ?
        dispatch (host, 'deleteblock')
        : deleteCharBackward (view)
    },
  { key: "Delete",
    run: (view) =>
      isBeginningOfBlock (view) && isEndOfBlock (view) ?
        dispatch (host, 'deleteblock')
        : deleteCharForward (view)
    },
  { key: "Enter",
    run: (view) => {
      if (host.multiline) {
        insertNewlineAndIndent (view) 
      } else {
        let txt = view.state.doc.text
        evaluate_code (host, txt)
        dispatch (host, 'createblockiflast')
      }
      return true
    }},
  { key: "Shift-Enter", 
    run: (view) => {
      host.multiline = true
      insertNewlineAndIndent (view)
      return true
    }},
  { key: "Ctrl-Enter", 
    run: (view) => {
      let txt = view.state.doc.text
      evaluate_code (host, txt)
      dispatch (host, 'createblockiflast')
      return true
    }},
  { key: "PageUp", 
    run: (view) => 
      isBeginningOfBlock (view) ?
        dispatch (host, 'prevblock')
        : cursorPageUp (view)
    },
  { key: "PageDown", 
    run: (view) => 
      isEndOfBlock (view) ?
        dispatch (host, 'nextblock')
        : cursorPageDown (view)
    }
]

