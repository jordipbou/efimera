import { define, html } from 'hybrids'
import { toHTML, styles } from './PrettyPrint.js'

export const OutputView = {
  result: undefined,
  //render: ({ result }) => html ([toHTML (toggle) (result)])
  render: ({ result }) => toHTML (result).style (styles)
}

define ('e-output', OutputView)
