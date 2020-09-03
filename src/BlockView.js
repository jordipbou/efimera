import { html, render } from 'hybrids'
import { ref } from './HybridsUtils.js'
import { InputView } from './InputView.js'
import { OutputView } from './OutputView.js'
import { PreView } from './PreView.js'

export const inputRefocus = (host) => {
  host.input.focused = true
}

export const BlockView = {
  block: {},
  result: undefined,
  focused: false,
  input: ref ('e-input'),
  output: ref ('e-output'),
  preview: ref ('e-preview'),
  render: render(({ block, result, focused }) => html`
    <e-input block=${block}
             focused=${focused}>
    </e-input>
    <e-output result=${result}></e-output>
    <e-preview></e-preview>
  `.define ({
    EInput: InputView,
    EOutput: OutputView,
    EPreview: PreView
  }), { shadowRoot: false })
}
