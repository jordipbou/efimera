const test = require ('ava')
import { 
  appendBlock, createDocument, documentToGist,
  focusBlock, focusedBlock, focusNextBlock, focusPreviousBlock,
  insertBlockAfter, removeBlock, updateBlock
  } from '../src/Document.js'
import { createBlock, insertText } from '../src/Block.js'

test ('Document creation', (t) => {
  let d = createDocument ()

  t.deepEqual (d.blocks, [createBlock ()])
  t.is (d.focused, 0)

  let e = createDocument ([createBlock (['line1']), 
                           createBlock (['line2'])])
  t.deepEqual (e.blocks, [createBlock (['line1']), 
                          createBlock (['line2'])])
  t.is (e.focused, 1)
})

test ('Append block', (t) => {
  let d = createDocument ([createBlock (['line1'])])

  t.deepEqual (d.blocks, [createBlock (['line1'])])
  t.is (d.focused, 0)

  let e = appendBlock (createBlock (['line2'])) (d)
  t.deepEqual (e.blocks, [createBlock (['line1']), 
                          createBlock (['line2'])])
  t.is (e.focused, 1)
})

test ('Insert block', (t) => {
  let d = createDocument ([createBlock (['b1']), 
                           createBlock (['b2']),
                           createBlock (['b3'])])
  d.focused = 1
  let e = insertBlockAfter () (d)
  t.deepEqual (e.blocks, [createBlock (['b1']),
                          createBlock (['b2']),
                          createBlock (),
                          createBlock (['b3'])])
  t.deepEqual (e.focused, 2)

  d.focused = 2
  e = insertBlockAfter () (d)
  t.deepEqual (e.blocks, [createBlock (['b1']),
                          createBlock (['b2']),
                          createBlock (['b3']),
                          createBlock ()])
  t.deepEqual (e.focused, 3)
})

test ('Remove block', (t) => {
  let d = createDocument ([createBlock (['b1']), createBlock (['b2'])])
  t.deepEqual (d.blocks, [createBlock (['b1']), createBlock (['b2'])])
  t.deepEqual (d.focused, 1)

  let e = removeBlock (1) (d)
  t.deepEqual (e.blocks, [createBlock (['b1'])])
  t.is (e.focused, 0)

  e = appendBlock (createBlock (['b3'])) (d)
  e = removeBlock (1) (e)
  t.deepEqual (e.blocks, [createBlock (['b1']), createBlock (['b3'])])
  t.is (e.focused, 1)

  d = createDocument ([
    createBlock (['b1']),
    createBlock (['b2']),
    createBlock (['b3']),
    createBlock (['b4']),
    createBlock ([])
  ])
  e = removeBlock (1) (d)
  t.is (e.focused, 1)

  e = removeBlock (3) (d)
  t.is (e.focused, 3)
})

test ('Update block', (t) => {
  let d = createDocument ([createBlock (['b1']), createBlock (['b2'])])
  let e = updateBlock (0) (insertText ('beta') (d.blocks [0])) (d)
  let b2 = createBlock (['betab1'])
  b2.cursor = [4, 0]
  t.deepEqual (e.blocks, [b2, createBlock (['b2'])])
})

test ('Focus block', (t) => {
  let d = createDocument ([createBlock (['b1']), createBlock (['b2'])])
  let e = focusBlock (1) (d)
  t.is (e.focused, 1)
  e = focusBlock (-50) (e)
  t.is (e.focused, 1)
  e = focusBlock (1000) (e)
  t.is (e.focused, 1)
})

test ('Focus previous block', (t) => {
  let d = createDocument ([createBlock (['b1']), createBlock (['b2'])])
  d.focused = 1

  let e = focusPreviousBlock (d)
  t.is (e.focused, 0)

  e = focusPreviousBlock (e)
  t.is (e.focused, 0)
})

test ('Focus next block', (t) => {
  let d = createDocument ([createBlock (['b1']), createBlock (['b2'])])
  d.focused = 0

  let e = focusNextBlock (d)
  t.is (e.focused, 1)

  e = focusNextBlock (e)
  t.is (e.focused, 1)
})

test ('Get current focused block and its index', (t) => {
  let a = createBlock (['b1'])
  let b = createBlock (['b2'])
  let c = createBlock (['b3'])
  let d = createDocument ([a, b, c])

  d.focused = 1

  let [block, idx] = focusedBlock (d)
  t.deepEqual (block, b)
  t.is (idx, 1)

  d.focused = 0;
  [block, idx] = focusedBlock (d)
  t.deepEqual (block, a)
  t.is (idx, 0)
})
