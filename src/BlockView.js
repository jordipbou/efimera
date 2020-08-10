import { define, html } from 'hybrids'
import './InputView.js'
import './OutputView.js'

export const BlockView = {
  block: {},
  result: undefined,
  focused: false,
  render: ({ block, result, focused }) => html`
    <e-input block=${block}
             focused=${focused}>
    </e-input>
    <e-output result=${result}></e-output>
  `
}

define ('e-block', BlockView)
