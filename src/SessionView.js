import { define, html, render } from 'hybrids'
import { ref } from './HybridsUtils.js'
import { PaneView } from './PaneView.js'
import { TermView, termRefocus } from './TermView.js'
import { 
  ExportJSONView, showExportDialog 
  } from './ExportJSONView.js'
import { 
  ImportJSONView, showImportDialog, hideImportDialog 
  } from './ImportJSONView.js'

// ------------------------ Save / Load session --------------------------

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

// --------------------------- Refocus block -----------------------------

const refocus = (host, evt) => 
  termRefocus (host.term) (evt)

// ---------------------------- Session View -----------------------------

const styles = `
:host { display: block;
        width: 100%;
        height: 100%; }
`

export const SessionView = {
  term: ref ('e-term'),
  export_dialog: ref ('e-export-json'),
  import_dialog: ref ('e-import-json'),
  render: render(() => html`
    <e-pane>
      <span slot="content">
        <e-term onsave=${save} onload=${load}></e-term>
      </slot>
    </e-pane>
    <e-export-json onrefocus=${refocus}></e-export-json>
    <e-import-json onimport=${importJSON}
                   onrefocus=${refocus}>
    </e-import-json>
  `.style (styles)
   .define ({
      EPane: PaneView,
      ETerm: TermView,
      EExportJSON: ExportJSONView,
      EImportJSON: ImportJSONView
    }), { shadowRoot: false })
}

define ('e-session', SessionView)
