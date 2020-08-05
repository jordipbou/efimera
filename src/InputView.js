// InputView renders a Block using a BlockRenderer
// and captures user input thru an BlockListener.

import { define, html } from 'hybrids'
import { init } from './HybridsUtils.js'
import { createRenderer } from './BlockRenderer.js'
import { createListener } from './BlockListener.js'
import { createBlock } from './Block.js'

const styles = `
#block-input-container {
  min-height: 1rem;
}
`

export const InputView = {
  block: init ('block', () => createBlock ()),
  renderer: init ('renderer', createRenderer),
  listener: init ('listener', createListener),
  render: ({ block, renderer, listener }) => html`
    <div id="block-input-container" 
         tabindex="0" 
         onkeydown="${listener.onkeydown}"
         onkeypress="${listener.onkeypress}">
      ${renderer.render (block)}
    </div>
  `.style (styles)
}

define ('e-input', InputView)
