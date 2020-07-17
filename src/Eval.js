import { dispatch } from 'hybrids'
import { map } from 'ramda'

import { toHTML } from './PrettyPrint.js'

export const evaluate_code = (host, code) => {
  // TODO: Add hack to use import as if it was (pikaImport)
  // let hack...to be able to use let with global variables
  let modified = 
    map ((line) => 
      line.replace (/^let/, 'var')
          .replace (/^const/, 'var')
          .replace (/@view/, 
                   'document.querySelector (\'[data-uuid="' + host.uuid + '"] .view\')')
          .replace (/@block/,
                   'document.querySelector (\'[data-uuid="' + host.uuid + '"]\')'))
        (code)

  let strcode = modified.join('\n')

  let result = window.eval (strcode)

  dispatch (host, 'scrolltoend')

  host.result = toHTML (result)
}
