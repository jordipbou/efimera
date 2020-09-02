import { html } from 'hybrids'
import { ref } from './HybridsUtils.js'
import { InputView } from './InputView.js'
import { OutputView } from './OutputView.js'

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
  `.define ({
    EInput: InputView,
    EOutput: OutputView
  })
}
