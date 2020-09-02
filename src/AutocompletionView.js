import { html } from 'hybrids'
import { map } from 'ramda'

const styles = `
:host { width: 100%;
        position: absolute;
        bottom: 0px;
        left: 0px; 
        background: var(--autocompletions-background);
        color: var(--autocompletions-color);
        overflow-x: hidden;
        text-overflow: ellipsis; }
.completion { margin-left: 5px;
              margin-right: 5px; }
`

const autocompletionItem = (completion) =>
  html`<span class="completion">${ completion }</span>`

export const AutocompletionView = {
  completions: [],
  render: ({ completions }) => html`
    ${ map (autocompletionItem) (completions) }
  `.style (styles)
}
