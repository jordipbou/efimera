// InputView renders a Block using a BlockRenderer
// and captures user input thru an BlockListener.

import { html } from 'hybrids'
import { ref } from './HybridsUtils.js'
import { createRenderer } from './BlockRenderer.js'
import { createListener } from './BlockListener.js'
import { createBlock } from './Block.js'

const styles = `
#block-input-container { min-height: 1rem; }
#block-input-container:focus { outline-style: none; }
`

export const InputView = {
  block: {},
  container: ref ('#block-input-container'),
  focused: {
    set: (host, value, lastValue) => {
      if (value) host.container.focus ()
      return value
    }
  },
  renderer: { 
    connect: (host, key, invalidate) => { 
      host.renderer = createRenderer ()
  }},
  listener: {
    connect: (host, key, invalidate) => {
      host.listener = createListener ()
  }},
  render: ({ block, focused, renderer, listener }) => html`
    <div id="block-input-container" 
         tabindex="0" 
         onkeydown=${listener.onkeydown}
         onkeypress=${listener.onkeypress}>
      ${ renderer.render (block, focused) }
    </div>
  `.style (styles)
}
