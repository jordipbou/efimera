import { define, html } from 'hybrids'
import { toHTML } from './PrettyPrint.js'

export const OutputView = {
  result: undefined,
  render: ({ result }) => toHTML (result)
}

define ('e-output', OutputView)
