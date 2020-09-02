import { html } from 'hybrids'
import { toHTML } from './PrettyPrint.js'

const styles = `
:host { display: block;
        min-width: 100vw; 
        line-height: 1em;
        background: var(--result-background); }
`

export const OutputView = {
  result: undefined,
  render: ({ result }) => html`${ toHTML (result) }`.style (styles)
}
