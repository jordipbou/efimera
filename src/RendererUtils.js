import { 
  addIndex, cond, head, is, isNil, join, length, 
  map, replace, slice, tail
  } from 'ramda'
import { caret } from './Block.js'

// Extracting this functions from BlockRenderer and not importing
// html from hybrids here allows testing without a window object

export const htmlSpaces = replace (/ /g) ('&nbsp;')

const prompt = (first) =>
  `<span class="prompt">${ first ? '&gt;' : '…' }&nbsp;</span>`

export const renderLine = (first) => (line) =>
  `<div class="line">${ prompt (first) }${ line }</div>`

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

export const renderCaretLine = 
  (line) => (first) => (caret) => (autocompletion) =>
  renderLine (first)
             (htmlSpaces (slice (0) (caret [0]) (line)) +
              renderCaret (line [caret [0]]) (autocompletion) +
              htmlSpaces (slice (caret [0] + 1) (Infinity) (line)))

export const renderLines = (block, focus = true) =>
  focus ?
    addIndex 
      (map)
      ((line, idx) => idx === block.cursor [1] ?
                        renderCaretLine (line)
                                        (idx === 0)
                                        (caret (block))
                                        (block.autocompletion)
                        : renderLine (idx === 0) (htmlSpaces (line)))
      (block.lines)
    : addIndex (map) 
               ((line, idx) => renderLine (idx === 0) 
                                          (htmlSpaces (line)))
               (block.lines)



