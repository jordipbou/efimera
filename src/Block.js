// A block is a single/multiline text with editing capabilities.
import { 
  __, add, addIndex, adjust, always, apply, 
  concat, cond, curry, evolve, equals, filter,
  insert, intersperse, is, join, length, max, min, nth,
  pair, path, paths, pipe, prepend, reject, remove, 
  slice, splitAt, subtract, T, tail, update 
  } from 'ramda'

// -------------------------- Predicates ---------------------------------

export const emptyBlock = (block) =>
  length (block.lines) === 1 && length (block.lines[0]) === 0

// ----------------------------- Caret -----------------------------------

export const caret = (block) => {
  let cursor = block.cursor
  let lines = block.lines
  let y = Math.min (Math.max (cursor [1], 0), length (lines) - 1)

  return [ Math.min (Math.max (cursor [0], 0), length (lines [y])), y ]
}

// ------------------------ Cursor movement ------------------------------

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

export const moveCursorLeft = (block) => 
  evolve ({
    cursor: update (0)
                   (min (max (0, block.cursor [0] - 1))
                        (length (block.lines [block.cursor [1]]) - 1))
  }) (block)

export const moveCursorTo = (cursor) => (block) =>
  evolve ({
    cursor: always (caret (evolve ({ cursor: always (cursor) }) (block)))
  }) (block)

export const moveCursorToEnd = (block) =>
  evolve ({
    cursor: update (0) (length (block.lines [block.cursor [1]]))
  }) (block)

export const moveCursorToStart = (block) =>
  evolve ({
    cursor: update (0) (0)
  }) (block)

// ----------------------------- History ---------------------------------

// TODO: Use a maximum number of history changes ?!?!

export const changeBlock = (block) => (lines) =>
  evolve ({
    lines: always (lines),
    history: prepend (block.lines)
  }) (block)

export const undoChangeBlock = (block) =>
  length (block.history) > 0 ?
    evolve ({
      lines: always (block.history [0]),
      history: tail
    }) (block)
    : block

// ------------------------ Text modification ----------------------------

export const insertText = (text) => (block) =>
  evolve ({
    lines: update
             (block.cursor [1])
             (join ('') 
                   (insert (1) 
                           (text) 
                           (splitAt (block.cursor [0]) 
                           (block.lines [block.cursor [1]])))),
    cursor: adjust (0) (add (length (text)))
  }) (block)

export const removeText = (n) => (block) => 
  (caret (block) [0] === 0 && caret (block) [1] === 0) || n === 0 ?
    block
    : n <= caret (block) [0] ?
      evolve ({
        lines: 
          update
            (caret (block) [1])
            (join ('')
              ([slice (0, caret (block) [0] - n, block.lines [caret (block) [1]]),
                slice (caret (block) [0], Infinity, block.lines [caret (block) [1]])])),
        cursor: always ([caret (block) [0] - n, caret (block) [1]])
      }) (block)
      : caret (block) [0] === 0 ?
        removeText (n - 1)
                   (evolve ({
                      lines: 
                        always (
                          remove (caret (block) [1], 1)
                                 (update (caret (block) [1] - 1)
                                         (concat (block.lines [caret (block) [1] - 1])
                                                 (block.lines [caret (block) [1]]))
                                         (block.lines))),
                      cursor: always ([length (block.lines [caret (block) [1] - 1]),
                                       caret (block) [1] - 1])
                    }) (block))
        : removeText (n - caret (block) [0]) (removeText (caret (block) [0]) (block))

export const deleteText = (n) => (block) => {
  let cursor = caret (block)
  let height = length (block.lines) - 1
  let width = length (block.lines [cursor [1]])
  let line = block.lines [cursor [1]]
  let next_line = block.lines [cursor [1] + 1]

  return (cursor [1] === height && cursor [0] === width) || n === 0 ?
           block
           : n <= width - cursor [0] ?
             evolve ({ lines: update (cursor [1])
                                     (join 
                                        ('') 
                                        (remove (cursor [0]) 
                                                (n) 
                                                (line))),
                       cursor: always (cursor)})
                    (block)
             : cursor [0] === width ?
               deleteText (n - 1)
                          (evolve ({
                             lines: 
                               pipe (
                                 update (cursor [1])
                                        (line + next_line),
                                 remove (cursor [1] + 1) (1)),
                             cursor: always (cursor)}) (block))
                 : deleteText (n - (width - cursor [0]))
                              (deleteText (width - cursor [0])
                                          (block))
}

export const insertLine = (block) =>
  evolve ({
    lines: pipe (insert (block.cursor [1] + 1) 
                        (block.lines [block.cursor [1]]),
                 adjust (block.cursor [1] + 1)
                        (slice (block.cursor [0]) (Infinity)),
                 adjust (block.cursor [1]) 
                        (slice (0) (block.cursor [0]))),
    cursor: pipe (update (0) (0), adjust (1) (add (1)))
  }) (block)

export const deleteLine = (block) =>
  length (block.lines) === 1 ?
    evolve ({
      lines: always (['']),
      cursor: always ([0, 0])
    }) (block)
    : block.cursor [1] === 0 ?
      evolve ({
        lines: tail,
        cursor: always ([0, 0])
      }) (block)
      : evolve ({
          lines: addIndex (reject) ((l, idx) => idx === block.cursor [1]),
          cursor: always ([
                    length 
                      (block.lines 
                        [min (block.cursor [1] - 1) 
                             (length (block.lines) - 2)]), 
                    min (block.cursor [1]) (length (block.lines) - 2)
                  ])
        }) (block)
// --------------------------- Autocompletion ----------------------------

export const willAutocomplete = (block) => {
  if (block.autocompletion !== '...' && block.autocompletion !== '') {
    let start = caret (block) [0]
    let end = start + length (block.autocompletion)
    let current_line = caret (block) [1]
    let text_after = slice (start) (end) (block.lines [current_line])

    return text_after !== block.autocompletion
  } else {
    return false
  }
}

export const autocomplete = (block) => {
  if (block.autocompletion !== '...' && block.autocompletion !== '') {
    let start = caret (block) [0]
    let end = start + length (block.autocompletion)
    let current_line = caret (block) [1]
    let text_after = slice (start) (end) (block.lines [current_line])

    if (text_after !== block.autocompletion) {
      return insertText (block.autocompletion) (block)
    } else {
      return moveCursorTo ([end, current_line]) (block)
    }
  } else {
    return block
  }
}

// --------------------------- Block creation ----------------------------

export const createBlock = (text = ['']) => ({
  lines: text === null ? [''] : text,
  history: [],
  completions: [],
  autocompletion: '',
  cursor: [0, 0] // x -position on current line-
                 // y -number of current line-
})
