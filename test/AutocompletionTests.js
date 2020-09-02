const test = require ('ava')
import { longestCommonSubstring } from '../src/Autocompletion.js'

test ('Longest common substring between two strings', (t) => {
  let s1 = 'Ax78BCnn'
  let s2 = 'Ax78Rjkllmop'

  t.deepEqual (longestCommonSubstring (s1) (s2), 'Ax78')
  t.deepEqual (longestCommonSubstring ('') (s2), '')
  t.deepEqual (longestCommonSubstring (s1) (''), '')
  t.deepEqual (longestCommonSubstring ('') (''), '')
})

test ('Longest common substring on an array of strings', (t) => {
  let s1 = ['ABCDEF', 'ABCD', 'ABCXYZ']
  
  t.deepEqual (longestCommonSubstring (s1), 'ABC')

  let s2 = ['ABCD', 'EFGH', 'IJKL']

  t.deepEqual (longestCommonSubstring (s2), '')
})
