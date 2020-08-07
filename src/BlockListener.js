import { dispatch } from 'hybrids'
import { 
  caret, deleteText, insertText, insertLine,
  moveCursorLeft, moveCursorRight, moveCursorUp, moveCursorDown,
  removeText 
  } from './Block.js'
import * as acorn from 'acorn'
import { equals, join, length } from 'ramda'

const update = (host) => (detail) =>
  dispatch (host,
            'updateblock', 
            { detail: detail,
              bubbles: true,
              composed: true })

export const createListener = () => ({
  onkeydown: (host, evt) => {
    if (evt.key === 'Backspace') {
      update (host) (removeText (1) (host.block))
    } else if (evt.key === 'Delete') {
      update (host) (deleteText (1) (host.block))
    } else if (evt.key === 'Enter') {
      let valid_code = true
      let source_code = join ('\n') (host.block.lines)
      try {
        acorn.parse (source_code) 
      } catch (error) {
        valid_code = false
      }

      if (evt.shiftKey 
       || !(evt.ctrlKey || 
            (length (host.block.lines) === 1 && valid_code))) {
        update (host) (insertLine (host.block))
      } else {
        try {
          console.log (window.eval (source_code))
          dispatch (host, 
                    'blockevaluated', 
                    { bubbles: true, composed: true })
        } catch (error) {
          console.error (error)
        }
      }
    } else if (evt.key === 'ArrowLeft') {
      update (host) (moveCursorLeft (host.block))
    } else if (evt.key === 'ArrowRight') {
      update (host) (moveCursorRight (host.block))
    } else if (evt.key === 'ArrowUp') {
      let b = moveCursorUp (host.block)
      if (equals (host.block.cursor) (b.cursor)) {
        dispatch (host, 'blocktop', { bubbles: true, composed: true })
      } else {
        update (host) (b)
      }
    } else if (evt.key === 'ArrowDown') {
      let b = moveCursorDown (host.block)
      if (equals (host.block.cursor) (b.cursor)) {
        dispatch (host, 'blockbottom', { bubbles: true, composed: true })
      } else {
        update (host) (moveCursorDown (host.block))
      }
    } else {
      return true
    }

    evt.preventDefault ()
    return false
  },
  onkeypress: (host, evt) => {
    update (host) (insertText (evt.key) (host.block))
  }
})
