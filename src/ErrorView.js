import { html, property, render } from 'hybrids'
import { has } from 'ramda'

export const ErrorView = {
  error: property(null),
  render: render(({ error }) => html`
    ${ error && !has ('noerror') (error) ? error.toString () : '' }
  `, { shadowRoot: false })}
