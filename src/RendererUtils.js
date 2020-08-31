import { 
  addIndex, cond, head, is, isNil, join, length, 
  map, replace, slice, tail
  } from 'ramda'
import { caret } from './Block.js'

// Extracting this functions from BlockRenderer and not importing
// html from hybrids here allows testing without a window object

export const htmlSpaces = replace (/ /g) ('&nbsp;')

export const renderLine = (line) =>
  `<div class="line">${htmlSpaces (line)}</div>`

export const renderCaret = (character) => (autocompletion) => 
  (character === undefined || character === ' ' || character === '')  
  && length (autocompletion) > 0 ?
     '<span class="autocompletion">' + 
     '<span class="caret">' +
     htmlSpaces (head (autocompletion)) +
     '</span>' +
     htmlSpaces (tail (autocompletion)) +
     '</span>'
     : '<span class="caret">' +
       htmlSpaces ((character === '' || !character)? ' ' : character) + 
       '</span>'

export const renderCaretLine = (line) => (caret) => (autocompletion) =>
  '<div class="line">' + 
  htmlSpaces (slice (0) (caret [0]) (line)) +
  renderCaret (line [caret [0]]) (autocompletion) +
  htmlSpaces (slice (caret [0] + 1) (Infinity) (line)) +
  '</div>'

export const renderLines = (block, focus = true) =>
  focus ?
    addIndex 
      (map)
      ((line, idx) => idx === block.cursor [1] ?
                        renderCaretLine (line) 
                                        (caret (block))
                                        (block.autocompletion)
                        : renderLine (line))
      (block.lines)
    : map (renderLine) (block.lines)



