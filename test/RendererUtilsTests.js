const test = require ('ava')
import { caret, createBlock } from '../src/Block.js'
import { 
  htmlSpaces, renderCaret, renderCaretLine, renderLine, renderLines
  } from '../src/RendererUtils.js'

test ('Replace spaces for &nbsp;', (t) => {
  t.deepEqual (
    htmlSpaces ('  return null; '),
    '&nbsp;&nbsp;return&nbsp;null;&nbsp;')
})

test ('Render no caret line', (t) => {
  t.deepEqual (
    renderLine ('  return null; '),
    '<div class="line">&nbsp;&nbsp;return&nbsp;null;&nbsp;</div>')
})

test ('Render caret', (t) => {
  t.deepEqual (
    renderCaret (' '),
    '<span class="caret">&nbsp;</span>')

  t.deepEqual (
    renderCaret ('t'),
    '<span class="caret">t</span>')
})

test ('Render caret line', (t) => {
  let b = createBlock (['  let a = 5'])

  t.deepEqual (
    renderCaretLine (b.lines [0], caret (b)),
    '<div class="line"><span class="caret">&nbsp;</span>&nbsp;let&nbsp;a&nbsp;=&nbsp;5</div>')

  b.cursor = [2, 0]
  t.deepEqual (
    renderCaretLine (b.lines [0], caret (b)),
    '<div class="line">&nbsp;&nbsp;<span class="caret">l</span>et&nbsp;a&nbsp;=&nbsp;5</div>')

  b.cursor = [50, 0]
  t.deepEqual (
    renderCaretLine (b.lines [0], caret (b)),
    '<div class="line">&nbsp;&nbsp;let&nbsp;a&nbsp;=&nbsp;5<span class="caret">&nbsp;</span></div>')
})

test ('Render lines', (t) => {
  let b = createBlock (['let f = () =>', '  return 5'])

  t.deepEqual (
    renderLines (b),
    ['<div class="line"><span class="caret">l</span>et&nbsp;f&nbsp;=&nbsp;()&nbsp;=></div>',
     '<div class="line">&nbsp;&nbsp;return&nbsp;5</div>'])
})
