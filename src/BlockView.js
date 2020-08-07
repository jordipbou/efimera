import { define, html } from 'hybrids'
import './InputView.js'

export const BlockView = {
  block: {},
  focused: false,
  render: ({ block, focused }) => html`
    <e-input block=${block}
             focused=${focused}>
    </e-input>
  `
}

define ('e-block', BlockView)
