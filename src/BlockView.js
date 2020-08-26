import { define, html } from 'hybrids'
import { ref } from './HybridsUtils.js'
import './InputView.js'
import './OutputView.js'

export const inputRefocus = (host) => {
  host.input.focused = true
}

export const BlockView = {
  block: {},
  result: undefined,
  focused: false,
  input: ref ('e-input'),
  render: ({ block, result, focused }) => html`
    <e-input block=${block}
             focused=${focused}>
    </e-input>
    <e-output result=${result}></e-output>
  `
}

define ('e-block', BlockView)
