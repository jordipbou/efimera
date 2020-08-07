import { dispatch } from 'hybrids'
import { 
  deleteText, insertText, insertLine,
  moveCursorLeft, moveCursorRight, moveCursorUp, moveCursorDown,
  removeText 
  } from './Block.js'

export const createListener = () => ({
  onkeydown: (host, evt) => {
    if (evt.key === 'Backspace') {
      host.block = removeText (1) (host.block)
    } else if (evt.key === 'Delete') {
      host.block = deleteText (1) (host.block)
    } else if (evt.key === 'Enter') {
      // Evaluate !!!!
      host.block = insertLine (host.block)
    } else if (evt.key === 'ArrowLeft') {
      host.block = moveCursorLeft (host.block)
    } else if (evt.key === 'ArrowRight') {
      host.block = moveCursorRight (host.block)
    } else if (evt.key === 'ArrowUp') {
      host.block = moveCursorUp (host.block)
    } else if (evt.key === 'ArrowDown') {
      host.block = moveCursorDown (host.block)
    } else {
      return true
    }

    evt.preventDefault ()
    return false
  },
  onkeypress: (host, evt) => {
    host.block = insertText (evt.key) (host.block)
  }
})
