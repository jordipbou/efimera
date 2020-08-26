// A document is made up of single/multiline blocks of text.

import { createBlock } from './Block.js'
import { 
  __, add, always, append, concat, cond, gte, length, evolve, 
  identity, join, map, max, min, subtract, remove, T, update
  } from 'ramda'

export const appendBlock = (block = createBlock ()) => (doc) =>
  evolve ({
    blocks: append (block),
    focused: always (length (doc.blocks))
  }) (doc)

export const removeBlock = (idx) => (doc) =>
  evolve ({
    blocks: remove (idx) (1),
    focused: cond ([
               [gte (length (doc.blocks) - 1), 
                  always (length (doc.blocks) - 2)],
               [T, identity]])
  }) (doc)

export const updateBlock = (idx) => (block) => (doc) =>
  evolve ({
    blocks: update (idx) (block)
  }) (doc)

export const focusPreviousBlock = (doc) =>
  evolve ({
    focused: always (max (subtract (doc.focused) (1)) (0))
  }) (doc)

export const focusNextBlock = (doc) =>
  evolve ({
    focused: always (min (add (1) (doc.focused)) (length (doc.blocks) - 1))
  }) (doc)

export const createDocument = (blocks = [createBlock ()]) => ({
  blocks: blocks,
  focused: length (blocks) - 1
})
