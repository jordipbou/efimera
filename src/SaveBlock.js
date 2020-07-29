import { dispatch, define, html } from 'hybrids'
import { ref, forward } from './HybridsUtils.js'

const styles = `
h2 {
  font-family: sans-serif;
}
`

export const SaveBlock = {
  init: {
    connect: (host, key, invalidate) => {
      let dialog = ref ('dialog') (host)
      forward (dialog, host, 'close')
      dialog.showModal ()
      console.log (host.blockText)
    }
  },
  block: '',
  logged: false,
  render: ({ block, logged }) => html`
    <dialog>
      <h2>Save current block to Gist</h2>
      ${!logged && html`not logged`}
      ${logged && html`logged`}
    </dialog>
  `.style (styles)
}

define ('e-save-block', SaveBlock)
