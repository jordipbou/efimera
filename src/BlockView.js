import { html, render } from 'hybrids'
import { ref } from './Utils.js'
import { InputView } from './InputView.js'
import { OutputView } from './OutputView.js'
import { RenderView } from './RenderView.js'

export const inputRefocus = (host) => {
  host.input.focused = true
}

export const BlockView = {
  block: {},
  result: undefined,
  focused: false,
  input: ref ('e-input'),
  output: ref ('e-output'),
  preview: ref ('e-render'),
  render: render(({ block, result, focused }) => html`
    <e-input block=${block}
             focused=${focused}>
    </e-input>
    <e-output result=${result}></e-output>
    <e-render></e-render>
  `.define ({
    EInput: InputView,
    EOutput: OutputView,
    ERender: RenderView
  }), { shadowRoot: false })
}
