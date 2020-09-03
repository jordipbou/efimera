import { dispatch, html, render } from 'hybrids'
import { ref } from './HybridsUtils.js'

const onclose = (host) => (evt) =>
  dispatch (host, 'refocus', { bubbles: true, composed: true })

export const showImportDialog = (host) => {
  host.dialog.removeEventListener ('close',
                                   onclose (host))
  host.dialog.addEventListener ('close',
                                onclose (host))
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
