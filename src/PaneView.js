import { html } from 'hybrids'

const styles = `
:host { display: block;
        width: 100%;
        height: 100%; }
`

export const PaneView = {
  render: () => html`
    <slot name="content">Default content</slot>
  `.style (styles)
}
