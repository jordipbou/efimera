import { define, html } from 'hybrids'

export const PaneView = {
  render: () => html`
    <slot name="content">Default content</slot>
  `
}

define ('e-pane', PaneView)
