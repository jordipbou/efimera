// A block is a single/multiline text with editing capabilities.
import { 
  __, add, adjust, always, apply, concat, curry, evolve, 
  insert, intersperse, is, join, length, max, min, nth,
  pair, path, paths, pipe, remove, slice, splitAt, subtract, update 
  } from 'ramda'

// ------------------------------- Caret -------------------------------------

const getYCaret = (block) =>
  Math.min (Math.max (block.cursor [1], 0), length (block.lines) - 1)

export const caret = (block) =>
  [ Math.min (Math.max (block.cursor [0], 0), 
              length (block.lines [getYCaret (block)])),
    getYCaret (block)]

// -------------------------- Cursor movement --------------------------------

export const moveCursorDown = (block) =>
  evolve ({
    cursor: adjust (1) 
                   (pipe (add (1), 
                          min (length (block.lines) - 1)))
  }) (block)

export const moveCursorUp = 
  evolve ({
    cursor: adjust (1)
                   (pipe (subtract (__, 1),
                          max (0)))
  })

export const moveCursorRight = (block) =>
  evolve ({
    cursor: adjust (0)
                   (pipe (add (1),
                          min (length (block.lines [block.cursor [1]]))))
  }) (block)

export const moveCursorLeft = 
  evolve ({
    cursor: adjust (0)
                   (pipe (subtract (__, 1),
                          max (0)))
  })

// -------------------------- Text modification ------------------------------

export const insertText = (text) => (block) =>
  evolve ({
    lines: update
             (block.cursor [1])
             (join ('') 
                   (insert (1) 
                           (text) 
                           (splitAt (block.cursor [0]) 
                           (block.lines [block.cursor [1]])))) 
  }) (block)

export const removeText = (n) => (block) => 
  (block.cursor [0] === 0 && block.cursor [1] === 0) || n === 0 ?
    block
    : n <= block.cursor [0] ?
      evolve ({
        lines: 
          update
            (block.cursor [1])
            (join ('')
              ([slice (0, block.cursor [0] - n, block.lines [block.cursor [1]]),
                slice (block.cursor [0], Infinity, block.lines [block.cursor [1]])])),
        cursor: always ([block.cursor [0] - n, block.cursor [1]])
      }) (block)
      : block.cursor [0] === 0 ?
        removeText (n - 1)
                   (evolve ({
                      lines: 
                        always (
                          remove (block.cursor [1], 1)
                                 (update (block.cursor [1] - 1)
                                         (concat (block.lines [block.cursor [1] - 1])
                                                 (block.lines [block.cursor [1]]))
                                         (block.lines))),
                      cursor: always ([length (block.lines [block.cursor [1] - 1]),
                                       block.cursor [1] - 1])
                    }) (block))
        : removeText (n - block.cursor [0]) (removeText (block.cursor [0]) (block))

// ------------------------------ Block creation ------------------------------

export const createBlock = (text = ['']) => ({
  lines: text === null ? [''] : text,
  cursor: [0, 0], // x -position on current line-, y -number of current line-
})
