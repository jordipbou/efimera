import { html, render } from 'hybrids'
import { map } from 'ramda'

const autocompletionItem = (completion) =>
  html`<span class="completion">${ completion }</span>`

export const AutocompletionView = {
  completions: [],
  render: render(({ completions }) => html`
    ${ map (autocompletionItem) (completions) }
  `, { shadowRoot: false })
}
