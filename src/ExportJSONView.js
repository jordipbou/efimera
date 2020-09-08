import { dispatch, html, render } from 'hybrids'
import { ref, setOnCloseListener } from './Utils.js'
import dialogPolyfill from 'dialog-polyfill'
import { addIndex, join, map, prop } from 'ramda'

export const showExportDialog = (json) => (host) => {
  setOnCloseListener (host) (host.dialog)
  host.json = json
  host.dialog.showModal ()
}

const copyToClipboard = (host, evt) => {
  navigator.clipboard.writeText (host.json)
  host.dialog.close ()
}

const formatLink = (json) =>
  'https://jordipbou.github.com/efimera/?json=' + encodeURI (json)

const copyLinkToClipboard = (host, evt) => {
  navigator.clipboard.writeText (formatLink (host.json))
  host.dialog.close ()
}

const formatText = (blocks) =>
    join ('\n')
         (map (join ('\n'))
           (map 
             (addIndex (map)
                       ((l, i) => i === 0 ? '> ' + l : '… ' + l))
             (map (prop ('lines')) (blocks))))

const copyTextToClipboard = (host, evt) => {
  let object = JSON.parse (host.json)
  let text = formatText (object.blocks)
  navigator.clipboard.writeText (text)
}

const copyTextAndLinkToClipboard = (host, evt) => {
  let object = JSON.parse (host.json)
  let text = formatText (object.blocks)
  let link = formatLink (host.json)

  navigator.clipboard.writeText (
    text + '\n[Load on Efimera](' + link + ')')
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
        <div>
          <button onclick=${ copyToClipboard }>Copy</button>
          <button onclick=${ copyLinkToClipboard }>Copy link</button>
          <button onclick=${ copyTextToClipboard }>Only text</button>
          <button onclick=${ copyTextAndLinkToClipboard }>Text and link</button>
        </div>
      </div>
      <div class="json-export-preview">${ json }</div>
    </dialog>
  `, { shadowRoot: false })
}
