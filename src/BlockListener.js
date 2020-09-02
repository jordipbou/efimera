import { dispatch } from 'hybrids'
import { 
  autocomplete, caret, deleteText, insertText, insertLine,
  moveCursorLeft, moveCursorRight, moveCursorUp, moveCursorDown,
  moveCursorToEnd, moveCursorToStart,
  removeText 
  } from './Block.js'
import * as acorn from 'acorn'
import { equals, join, length } from 'ramda'
import { is_evaluable, evaluate_code } from './Eval.js'

const update = (host) => (detail) =>
  dispatch (host,
            'updateblock', 
            { detail: detail,
              bubbles: true,
              composed: true })

export const createListener = () => ({
  onkeydown: (host, evt) => {
    if (evt.key === 'Backspace') {
      if (length (host.block.lines) === 1 && length (host.block.lines [0]) === 0) {
        dispatch (host, 'deleteblock', { bubbles: true, composed: true })
      } else {
        update (host) (removeText (1) (host.block))
      }
    } else if (evt.key === 'Delete') {
      update (host) (deleteText (1) (host.block))
    } else if (evt.key === 'Enter') {
      let singleline = length (host.block.lines) === 1
      let valid_code = is_evaluable (host.block.lines)
      let do_evaluate = evt.ctrlKey || (singleline && valid_code)

      if (evt.shiftKey || !do_evaluate) {
        update (host) (insertLine (host.block))
      } else {
        let result = evaluate_code (host.block.lines)
        dispatch (host, 
                  'blockevaluated', 
                  { detail: result, 
                    bubbles: true, 
                    composed: true })
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
    } else if (evt.key === 'End') {
      update (host) (moveCursorToEnd (host.block))
    } else if (evt.key === 'Home') {
      update (host) (moveCursorToStart (host.block))
    } else if (evt.key === 'Tab') {
      if (host.block.autocompletion !== '...') {
        update (host) (autocomplete (host.block))
      }
    } else if ((evt.key === 's' || evt.key === 'S') && evt.ctrlKey) {
      dispatch (host, 'save', { bubbles: true, composed: true })
    } else if ((evt.key === 'l' || evt.key === 'L') && evt.ctrlKey) {
      dispatch (host, 'load', { bubbles: true, composed: true })
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
