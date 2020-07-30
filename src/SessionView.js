import { define, html } from 'hybrids'
import './PaneView.js'
import './TermView.js'

export const SessionView = {
  render: () => html`
    <e-pane>
      <span slot="content">
        <e-term />
      </slot>
    </e-pane>
  ` 
}

define ('e-session', SessionView)
