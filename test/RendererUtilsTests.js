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
    renderCaret ('') (''),
    '<span class="caret">&nbsp;</span>')

  t.deepEqual (
    renderCaret (' ') (''),
    '<span class="caret">&nbsp;</span>')

  t.deepEqual (
    renderCaret ('t') (''),
    '<span class="caret">t</span>')

  t.deepEqual (
    renderCaret ('') ('rray'),
    '<span class="autocompletion"><span class="caret">r</span>ray</span>')

  t.deepEqual (
    renderCaret (' ') ('rray'),
    '<span class="autocompletion"><span class="caret">r</span>ray</span>')

  t.deepEqual (
    renderCaret ('h') ('rray'),
    '<span class="caret">h</span>')
})

test ('Render caret line', (t) => {
  let b = createBlock (['A  let a = 5'])

  t.deepEqual (
    renderCaretLine (b.lines [0]) (caret (b)) (''),
    '<div class="line"><span class="caret">A</span>&nbsp;&nbsp;let&nbsp;a&nbsp;=&nbsp;5</div>')

  t.deepEqual (
    renderCaretLine (b.lines [0]) (caret (b)) ('Array'),
    '<div class="line"><span class="caret">A</span>&nbsp;&nbsp;let&nbsp;a&nbsp;=&nbsp;5</div>')

  b.cursor = [1, 0]
  t.deepEqual (
    renderCaretLine (b.lines [0]) (caret (b)) ('rray'),
    '<div class="line">A<span class="autocompletion"><span class="caret">r</span>ray</span>&nbsp;let&nbsp;a&nbsp;=&nbsp;5</div>')

  b.cursor = [2, 0]
  t.deepEqual (
    renderCaretLine (b.lines [0]) (caret (b)) (''),
    '<div class="line">A&nbsp;<span class="caret">&nbsp;</span>let&nbsp;a&nbsp;=&nbsp;5</div>')

  b.cursor = [50, 0]
  t.deepEqual (
    renderCaretLine (b.lines [0]) (caret (b)) (''),
    '<div class="line">A&nbsp;&nbsp;let&nbsp;a&nbsp;=&nbsp;5<span class="caret">&nbsp;</span></div>')
})

test ('Render lines', (t) => {
  let b = createBlock (['let f = () =>', '  5'])

  t.deepEqual (
    renderLines (b),
    ['<div class="line"><span class="caret">l</span>et&nbsp;f&nbsp;=&nbsp;()&nbsp;=></div>',
     '<div class="line">&nbsp;&nbsp;5</div>'])
})

test ('Render unfocused block', (t) => {
  let b = createBlock (['let f = () =>', '  5'])

  t.deepEqual (
    renderLines (b, false),
    ['<div class="line">let&nbsp;f&nbsp;=&nbsp;()&nbsp;=></div>',
     '<div class="line">&nbsp;&nbsp;5</div>'])
})
