import { dispatch } from 'hybrids'
import { 
  autocomplete, caret, deleteLine, deleteText, emptyBlock, 
  insertText, insertLine,
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
      if (emptyBlock (host.block) && evt.ctrlKey) {
        dispatch (host, 'deleteblock', { bubbles: true, composed: true })
      } else if (evt.ctrlKey) {
        update (host) (deleteLine (host.block))
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
        if (!equals (host.block.lines, [''])) {
          let [st, result, e] = evaluate_code (host) (host.block.lines)
          if (st === 'ok') {
            dispatch (host, 'error', { detail: { noerror: true },
                                       bubbles: true, 
                                       composed: true })
            dispatch (host, 
                      'blockevaluated', 
                      { detail: result, 
                        bubbles: true, 
                        composed: true })
          } else {
            dispatch (host, 'error', { detail: e,
                                       bubbles: true, 
                                       composed: true })
          }
        } else {
          dispatch (host, 'error', { detail: { noerror: true },
                                     bubbles: true,
                                     composed: true })
          dispatch (host, 'blockevaluated', { detail: undefined,
                                              bubbles: true,
                                              composed: true })
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
    } else if ((evt.key === 'o' || evt.key === 'O') && evt.ctrlKey) {
      dispatch (host, 'load', { bubbles: true, composed: true })
    } else if ((evt.key === 'l' || evt.key === 'L')) {
      if (evt.ctrlKey) {
        console.clear ()
        dispatch (host, 'error', { detail: { noerror: true },
                                   bubbles: true,
                                   composed: true })
        if (evt.shiftKey) {
          dispatch (host, 'cleardocument', { bubbles: true, composed: true })
        }
      } else {
        return true
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
