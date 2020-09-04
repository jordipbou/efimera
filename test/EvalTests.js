const test = require ('ava')
import { replaceImports } from '../src/Eval.js'

test ('Replace import statements', (t) => {
  let line = 'import * as E from \'efimera\''
  t.deepEqual (
    'efimera.npmImport (\'efimera\', \'E\')', 
    replaceImports (line))

  line = 'import { foo } from "efimera"'
  t.deepEqual (
    'efimera.npmImport (\'efimera\').then (m => \' foo \'.split (\',\').map ((s) => { let p = s.trim (); window[p] = m[p] }))',
    replaceImports (line))

  line = 'import {  foo,  bar  } from \'efimera\''
  t.deepEqual (
    'efimera.npmImport (\'efimera\').then (m => \'  foo,  bar  \'.split (\',\').map ((s) => { let p = s.trim (); window[p] = m[p] }))',
    replaceImports (line))
})
