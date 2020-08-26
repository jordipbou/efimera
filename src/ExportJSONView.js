import { define, dispatch, html } from 'hybrids'
import { ref } from './HybridsUtils.js'

const onclose = (host) => (evt) =>
  dispatch (host, 'refocus', { bubbles: true, composed: true })

export const showExportDialog = (json) => (host) => {
  host.dialog.removeEventListener ('close',
                                   onclose (host))
  host.dialog.addEventListener ('close',
                                onclose (host))
  host.json = json
  host.dialog.showModal ()
}

const copyToClipboard = (host, evt) => {
  navigator.clipboard.writeText (host.json)
  host.dialog.close ()
}

const styles = `
.json { width: 80vw; }
`

export const ExportJSONView = {
  json: '',
  dialog: ref ('dialog'),
  render: ({ json }) => html`
    <dialog>
      <h3>Export to JSON</h3>
      <div class="json">${json}</div>
      <div>
        <button onclick=${copyToClipboard}>Copy</button>
      </div>
    </dialog>
  `.style (styles)
}

define ('e-export-json', ExportJSONView)
