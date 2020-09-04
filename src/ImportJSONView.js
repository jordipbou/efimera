import { dispatch, html, render } from 'hybrids'
import { ref, setOnCloseListener } from './Utils.js'

export const showImportDialog = (host) => {
  setOnCloseListener (host) (host.dialog)
  host.dialog.showModal ()
}

export const hideImportDialog = (host) =>
  host.dialog.close ()

const handleClipboardReadPermission = () =>
  navigator
    .permissions
    .query({name:'clipboard-read'})

const showClipboardError = (host) => () =>
  host.error.innerHTML = 'You need to grant permission for clipboard access'

const importFromJSON = (host, evt) =>
  navigator
    .permissions
    .query ({name: 'clipboard-read'})
    .then ((result) => 
      result.state === 'granted' || result.state === 'prompt' ?
        navigator
          .clipboard
          .readText ()
          .then (json =>
            dispatch (host, 
                      'import', 
                      { detail: json,
                        bubbles: true, 
                        composed: true }))
          .catch (showClipboardError (host))
        : showClipboardError (host) ())

export const ImportJSONView = {
  textarea: ref ('textarea'),
  dialog: ref ('dialog'),
  error: ref ('p'),
  render: render(({ json }) => html`
    <dialog>
      <h3>Import from JSON</h3>
      <p></p>
      <div>
        <button onclick=${importFromJSON}>Import from clipboard</button>
      </div>
    </dialog>
  `, { shadowRoot: false })
}
