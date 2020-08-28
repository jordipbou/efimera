const test = require ('ava')
import { replaceImports } from '../src/Eval.js'

test ('Replace import statements', (t) => {
  let line = 'import "efimera"'
  t.deepEqual (
    'npmImport (\'efimera\')', 
    replaceImports (line))

  line = 'import * from \'efimera\''
  t.deepEqual (
    'npmImport (\'efimera\', null)', 
    replaceImports (line))

  line = 'import { foo } from "efimera"'
  t.deepEqual (
    'npmImport (\'efimera\').then (m => \' foo \'.split (\',\').map ((s) => { let p = s.trim (); window[p] = m[p] }))',
    replaceImports (line))

  line = 'import {  foo,  bar  } from \'efimera\''
  t.deepEqual (
    'npmImport (\'efimera\').then (m => \'  foo,  bar  \'.split (\',\').map ((s) => { let p = s.trim (); window[p] = m[p] }))',
    replaceImports (line))
})
