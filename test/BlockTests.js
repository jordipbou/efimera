const test = require ('ava')
import { 
  caret, changeBlock, createBlock, deleteText, insertText, insertLine,
  moveCursorDown, moveCursorLeft, moveCursorRight, moveCursorUp,
  moveCursorToEnd, moveCursorToStart,
  removeText, undoChangeBlock
  } from '../src/Block.js'
import { has, length } from 'ramda'

// -------------------------------------------------------- Block creation

test ('Block creation', (t) => {
  let b = createBlock ()
  t.true (has ('lines') (b))
  t.true (has ('cursor') (b))
  t.deepEqual (b.lines, [''])
  t.deepEqual (b.cursor, [0, 0])

  b = createBlock (['let a = 5'])
  t.deepEqual (b.lines, ['let a = 5'])

  b = createBlock (['let a = 5', 'let b = 10', 'a + b'])
  t.deepEqual (b.lines [0], 'let a = 5')
  t.deepEqual (b.lines [1], 'let b = 10')
  t.deepEqual (b.lines [2], 'a + b')

  b = createBlock (null)
  t.deepEqual (b.lines, [''])
})

// ----------------------------------------------- Cursor / caret movement

test ('Caret from cursor', (t) => {
  let b = createBlock (['let a = 5', 'let b = 10', '', 'a + b'])
  t.deepEqual (b.cursor, [0, 0])
  t.deepEqual (caret (b), [0, 0])

  b.cursor = [10, 0]
  t.deepEqual (caret (b), [9, 0])

  b.cursor = [-15, -10]
  t.deepEqual (caret (b), [0, 0])
})

test ('Move cursor down', (t) => {
  let b = createBlock (['let a = 5', 'let b = 10', '', 'a + b'])
  let c = moveCursorDown (b)
  t.deepEqual (c.cursor, [0, 1])
  c = moveCursorDown (c)
  t.deepEqual (c.cursor, [0, 2])
  c = moveCursorDown (c)
  t.deepEqual (c.cursor, [0, 3])
  c = moveCursorDown (c)
  t.deepEqual (c.cursor, [0, 3])

  b.cursor = [4, 0]
  t.deepEqual (caret (b), [4, 0])
  c = moveCursorDown (b)
  t.deepEqual (c.cursor, [4, 1])
  t.deepEqual (caret (c), [4, 1])
  c = moveCursorDown (c)
  t.deepEqual (c.cursor, [4, 2])
  t.deepEqual (caret (c), [0, 2])
  c = moveCursorDown (c)
  t.deepEqual (c.cursor, [4, 3])
  t.deepEqual (caret (c), [4, 3])
  c = moveCursorDown (c)
  t.deepEqual (c.cursor, [4, 3])
  t.deepEqual (caret (c), [4, 3])
})

test ('Move cursor up', (t) => {
  let b = createBlock (['let a = 5', 'let b = 10', '', 'a + b'])
  b.cursor = [0, 3]
  let c = moveCursorUp (b)
  t.deepEqual (c.cursor, [0, 2])
  c = moveCursorUp (c)
  t.deepEqual (c.cursor, [0, 1])
  c = moveCursorUp (c)
  t.deepEqual (c.cursor, [0, 0])
  c = moveCursorUp (c)
  t.deepEqual (c.cursor, [0, 0])

  b.cursor = [5, 3]
  t.deepEqual (caret (b), [5, 3])
  c = moveCursorUp (b)
  t.deepEqual (c.cursor, [5, 2])
  t.deepEqual (caret (c), [0, 2])
  c = moveCursorUp (c)
  t.deepEqual (c.cursor, [5, 1])
  t.deepEqual (caret (c), [5, 1])
  c = moveCursorUp (c)
  t.deepEqual (c.cursor, [5, 0])
  t.deepEqual (caret (c), [5, 0])
  c = moveCursorUp (c)
  t.deepEqual (c.cursor, [5, 0])
  t.deepEqual (caret (c), [5, 0])
})

test ('Move cursor right', (t) => {
  let b = createBlock (['let a = 5', 'let b = 10', '', 'a + b'])
  b.cursor = [0, 3]
  let c = moveCursorRight (b)
  t.deepEqual (c.cursor, [1, 3])
  c = moveCursorRight (c)
  t.deepEqual (c.cursor, [2, 3])
  c = moveCursorRight (c)
  t.deepEqual (c.cursor, [3, 3])
  c = moveCursorRight (c)
  t.deepEqual (c.cursor, [4, 3])
  c = moveCursorRight (c)
  t.deepEqual (c.cursor, [5, 3])
  c = moveCursorRight (c)
  t.deepEqual (c.cursor, [5, 3])
})

test ('Move cursor left', (t) => {
  let b = createBlock (['let a = 5', 'let b = 10', '', 'a + b'])
  b.cursor = [5, 3]
  let c = moveCursorLeft (b)
  t.deepEqual (c.cursor, [4, 3])
  c = moveCursorLeft (c)
  t.deepEqual (c.cursor, [3, 3])
  c = moveCursorLeft (c)
  t.deepEqual (c.cursor, [2, 3])
  c = moveCursorLeft (c)
  t.deepEqual (c.cursor, [1, 3])
  c = moveCursorLeft (c)
  t.deepEqual (c.cursor, [0, 3])
  c = moveCursorLeft (c)
  t.deepEqual (c.cursor, [0, 3])
})

test ('Complex cursor movements', (t) => {
  let b = createBlock (['123', '456789'])
  b.cursor = [6, 1]
  let c = moveCursorUp (b)
  t.deepEqual (c.cursor, [6, 0])
  c = moveCursorLeft (c)
  t.deepEqual (c.cursor, [2, 0])
})

test ('Move cursor to end/start of line', (t) => {
  let b = createBlock (['let a = 5', 'let b = 10', 'a + b'])

  let c = moveCursorToEnd (b)
  t.deepEqual (c.cursor, [9, 0])
  c = moveCursorToStart (c)
  t.deepEqual (c.cursor, [0, 0])
  b.cursor = [0, 1]
  c = moveCursorToEnd (b)
  t.deepEqual (c.cursor, [10, 1])
  c = moveCursorToStart (c)
  t.deepEqual (c.cursor, [0, 1])
  c = moveCursorToStart (c)
  t.deepEqual (c.cursor, [0, 1])
})

// --------------------------------------------------------------- History

test ('Change history on text modification', (t) => {
  let b = createBlock ()
  t.deepEqual (b.lines, [''])
  t.deepEqual (b.history, [])
  let b1 = changeBlock (b) (['let a = 5'])
  t.deepEqual (b1.lines, ['let a = 5'])
  t.deepEqual (b1.history, [['']])
  let b2 = changeBlock (b1) (['let a = 5', 'let b = 10'])
  t.deepEqual (b2.lines, ['let a = 5', 'let b = 10'])
  t.deepEqual (b2.history, [['let a = 5'], ['']])
  let b3 = changeBlock (b2) (['let a = 5', 'let b = 10', 'a + b'])
  t.deepEqual (b3.lines, ['let a = 5', 'let b = 10', 'a + b'])
  t.deepEqual (b3.history, [['let a = 5', 'let b = 10'], 
                            ['let a = 5'], 
                            ['']])
})

test ('Undo change history', (t) => {
  let b = createBlock ()
  b.lines = ['let a = 5', 'let b = 10', 'a + b']
  b.history = [['let a = 5', 'let b = 10'], ['let a = 5'], ['']]
  let b1 = undoChangeBlock (b)
  t.deepEqual (b1.lines, ['let a = 5', 'let b = 10'])
  t.deepEqual (b1.history, [['let a = 5'], ['']])
  let b2 = undoChangeBlock (b1)
  t.deepEqual (b2.lines, ['let a = 5'])
  t.deepEqual (b2.history, [['']])
})

// ----------------------------------------------------- Text modification

test ('Insert text into block at cursor position', (t) => {
  let b = createBlock ()
  let c = insertText (['let a = 5']) (b)
  t.deepEqual (c.lines [0], 'let a = 5')

  b.lines = ['first line', 'second line']
  b.cursor = [7, 1]
  c = insertText ('after first ') (b)
  t.deepEqual (c.lines [0], 'first line')
  t.deepEqual (c.lines [1], 'second after first line')

  b.cursor = [10, 0]
  c = insertText (' forever') (b)
  t.deepEqual (c.lines [0], 'first line forever')
  t.deepEqual (c.lines [1], 'second line')

  b.lines = ['b1']
  b.cursor = [0, 0]
  c = insertText ('beta') (b)
  t.deepEqual (c.lines, ['betab1'])
  t.deepEqual (c.cursor, [4, 0])
})

test ('Remove text to the left of the cursor', (t) => {
  let b = createBlock (['let a = 5'])
  b.cursor = [9, 0]
  let c = removeText (1) (b)
  t.deepEqual (c.lines [0], 'let a = ')
  t.deepEqual (c.cursor, [8, 0])

  b.cursor = [0, 0]
  c = removeText (1) (b)
  t.deepEqual (c.lines [0], 'let a = 5')
  t.deepEqual (c.cursor, [0, 0])

  b.lines = ['let a = 5', '']
  b.cursor = [0, 1]
  c = removeText (1) (b)
  t.deepEqual (c.lines, ['let a = 5'])
  t.deepEqual (c.cursor, [9, 0])

  b.lines = ['let a = 5', 'let b = 10', 'a + b']
  b.cursor = [10, 1]
  c = removeText (11) (b)
  t.deepEqual (c.lines, ['let a = 5', 'a + b'])
  t.deepEqual (c.cursor, [9, 0])

  b.cursor = [1, 1]
  c = removeText (2) (b)
  t.deepEqual (c.lines, ['let a = 5et b = 10', 'a + b'])
  t.deepEqual (c.cursor, [9, 0])

  b.lines = ['']
  b.cursor = [0, 0]
  c = removeText (15) (b)
  t.deepEqual (c.lines, [''])
  t.deepEqual (c.cursor, [0, 0])
})

test ('Delete text on and right of the cursor', (t) => {
  let b = createBlock (['let a = 5', 'let b = 10', 'a + b'])
  b.cursor = [3, 1]
  let c = deleteText (1) (b)
  t.deepEqual (c.lines, ['let a = 5', 'letb = 10', 'a + b'])
  t.deepEqual (c.cursor, [3, 1])
  
  c = deleteText (6) (c)
  t.deepEqual (c.lines, ['let a = 5', 'let', 'a + b'])
  t.deepEqual (c.cursor, [3, 1])

  c = deleteText (1) (c)
  t.deepEqual (c.lines, ['let a = 5', 'leta + b'])
  t.deepEqual (c.cursor, [3, 1])

  b.cursor = [5, 2]
  c = deleteText (10) (b)
  t.deepEqual (c.lines, ['let a = 5', 'let b = 10', 'a + b'])
  t.deepEqual (c.cursor, [5, 2])

  b.cursor = [5, 0]
  c = deleteText (10) (b)
  t.deepEqual (c.lines, ['let a = 10', 'a + b'])
  t.deepEqual (c.cursor, [5, 0])
})

test ('Insert new line after cursor current line', (t) => {
  let b = createBlock (['let a = 5', 'let b = 10', 'a + b'])
  b.cursor = [3, 1]
  let c = insertLine (b)
  t.deepEqual (c.lines, ['let a = 5', 'let', ' b = 10', 'a + b'])
  t.deepEqual (c.cursor, [0, 2])

  b.cursor = [9, 0]
  c = insertLine (b)
  t.deepEqual (c.lines, ['let a = 5', '', 'let b = 10', 'a + b'])
  t.deepEqual (c.cursor, [0, 1])
})

test ('Complex inserting and removal', (t) => {
  let b = createBlock (['let a = 5', 'let b = 10'])
  b.cursor = [10, 1]
  let c = insertLine (b)
  t.deepEqual (c.cursor, [0, 2])
  c = insertText ('a + b') (c)
  t.deepEqual (c.cursor, [5, 2])
  c = removeText (1) (c)
  t.deepEqual (c.lines, ['let a = 5', 'let b = 10', 'a + '])
  t.deepEqual (c.cursor, [4, 2])

  b = createBlock (['let a = 5', 'a'])
  b.cursor = [1, 1]
  c = removeText (1) (b)
  t.deepEqual (c.lines, ['let a = 5', ''])
  t.deepEqual (c.cursor, [0, 1])
  c = removeText (1) (c)
  t.deepEqual (c.lines, ['let a = 5'])
  t.deepEqual (c.cursor, [9, 0])
  c = removeText (1) (c)
  t.deepEqual (c.lines, ['let a = '])
  t.deepEqual (c.cursor, [8, 0])
})

test ('Complex movement and removal', (t) => {
  let b = createBlock (['let a = 5', 'let b = 10', 'a + b'])
  b.cursor = [10, 1]
  let c = moveCursorDown (b)
  t.deepEqual (c.cursor, [10, 2])
  t.deepEqual (caret (c), [5, 2])
  c = removeText (1) (c)
  t.deepEqual (c.lines [2], 'a + ')
  t.deepEqual (c.cursor, [4, 2])
  t.deepEqual (caret (c), [4, 2])
})
