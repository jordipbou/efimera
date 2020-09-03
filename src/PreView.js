import { html, render } from 'hybrids'

const styles = `
:host { display: block; }
`

export const PreView = {
  render: render((host) => html``.style (styles), { shadowRoot: false })
}
