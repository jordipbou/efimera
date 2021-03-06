// A document is made up of single/multiline blocks of text.

import { createBlock } from './Block.js'
import { 
  __, add, addIndex, always, append, concat, cond, filter, 
  evolve, gte, head, insert, length,
  identity, join, map, max, min, subtract, remove, T, update
  } from 'ramda'

export const appendBlock = (block = createBlock ()) => (doc) =>
  evolve ({
    blocks: append (block),
    focused: always (length (doc.blocks))
  }) (doc)

export const insertBlockAfter = (block = createBlock ()) => (doc) =>
  evolve ({
    blocks: insert (doc.focused + 1) (block),
    focused: always (doc.focused + 1)
  }) (doc)

export const removeBlock = (idx) => (doc) =>
  evolve ({
    blocks: remove (idx) (1),
    focused: () => min (idx, length (doc.blocks) - 2)
  }) (doc)

export const updateBlock = (idx) => (block) => (doc) =>
  evolve ({
    blocks: update (idx) (block)
  }) (doc)

export const focusBlock = (idx) => (doc) =>
  evolve ({
    focused: idx >= 0 && idx < length (doc.blocks) ? always (idx) : identity
  }) (doc)

export const focusPreviousBlock = (doc) =>
  evolve ({
    focused: always (max (subtract (doc.focused) (1)) (0))
  }) (doc)

export const focusNextBlock = (doc) =>
  evolve ({
    focused: always (min (add (1) (doc.focused)) (length (doc.blocks) - 1))
  }) (doc)

export const focusLastBlock = (doc) =>
  evolve ({
    focused: always (length (doc.blocs) - 1)
  }) (doc)

export const focusedBlock = (doc) =>
  [doc.blocks [doc.focused], doc.focused]

export const createDocument = (blocks = [createBlock ()]) => ({
  blocks: blocks,
  focused: length (blocks) - 1
})
