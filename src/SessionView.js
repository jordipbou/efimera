import { define, html } from 'hybrids'
import './PaneView.js'
import { termRefocus } from './TermView.js'
import './ExportJSONView.js'
import { ref } from './HybridsUtils.js'
import { showExportDialog } from './ExportJSONView.js'
import { showImportDialog, hideImportDialog } from './ImportJSONView.js'

const save = (host, evt) => {
  let json = JSON.stringify (host.term.doc)
  showExportDialog (json) (host.export_dialog)
}

const load = (host, evt) => 
  showImportDialog (host.import_dialog)

const importJSON = (host, evt) => {
  host.term.doc = JSON.parse (evt.detail)
  hideImportDialog (host.import_dialog)
}

const refocus = (host, evt) => 
  termRefocus (host.term, evt)

export const SessionView = {
  term: ref ('e-term'),
  export_dialog: ref ('e-export-json'),
  import_dialog: ref ('e-import-json'),
  render: () => html`
    <e-pane>
      <span slot="content">
        <e-term onsave=${save} onload=${load}></e-term>
      </slot>
    </e-pane>
    <e-export-json onrefocus=${refocus}></e-export-json>
    <e-import-json onimport=${importJSON}
                   onrefocus=${refocus}>
    </e-import-json>
  ` 
}

define ('e-session', SessionView)
