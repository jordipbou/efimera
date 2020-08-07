import { 
  addIndex, cond, is, isNil, join, length, map, replace, slice 
  } from 'ramda'
import { caret } from './Block.js'

// Extracting this functions from BlockRenderer and not importing
// html from hybrids here allows testing without a window object

export const htmlSpaces = replace (/ /g) ('&nbsp;')

export const renderLine = (line) =>
  `<div class="line">${htmlSpaces (line)}</div>`

export const renderCaret = (character) =>
  `<span class="caret">${htmlSpaces (character)}</span>`

export const renderCaretLine = (line, caret) =>
  length (line) <= caret [0] ?
    `<div class="line">${htmlSpaces (line)}${renderCaret (' ')}</div>`  
    : '<div class="line">' +
      htmlSpaces (slice (0) (caret [0]) (line)) +
      renderCaret (line [caret [0]]) +
      htmlSpaces (slice (caret [0] + 1) (Infinity) (line)) +
      '</div>'

export const renderLines = (block) =>
  addIndex 
    (map)
    ((line, idx) => idx === block.cursor [1] ?
                      renderCaretLine (line, caret (block))
                      : renderLine (line))
    (block.lines)



