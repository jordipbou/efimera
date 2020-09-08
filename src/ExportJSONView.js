import { dispatch, html, render } from 'hybrids'
import { ref, setOnCloseListener } from './Utils.js'
import dialogPolyfill from 'dialog-polyfill'

export const showExportDialog = (json) => (host) => {
  setOnCloseListener (host) (host.dialog)
  host.json = json
  host.dialog.showModal ()
}

const copyToClipboard = (host, evt) => {
  navigator.clipboard.writeText (host.json)
  host.dialog.close ()
}

export const ExportJSONView = {
  init: {
    connect: (host, key, invalidate) => {
      dialogPolyfill.registerDialog (host.dialog)
    },
  },
  json: '',
  dialog: ref ('dialog'),
  render: render(({ json }) => html`
    <dialog>
      <div class="json-export-header">
        <h3>Export to JSON</h3>
        <button onclick=${ copyToClipboard }>Copy</button>
      </div>
      <div class="json-export-preview">${ json }</div>
    </dialog>
  `, { shadowRoot: false })
}
