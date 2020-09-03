import { html, render } from 'hybrids'
import { toHTML } from './PrettyPrint.js'

export const OutputView = {
  result: undefined,
  render: render(
    ({ result }) => html`${ toHTML (result) }`,
    { shadowRoot: false })
}
