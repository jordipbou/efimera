import { define, html, render } from 'hybrids'
import { ref } from './HybridsUtils.js'
import { TermView, termRefocus } from './TermView.js'
import { 
  ExportJSONView, showExportDialog 
  } from './ExportJSONView.js'
import { 
  ImportJSONView, showImportDialog, hideImportDialog 
  } from './ImportJSONView.js'

// ------------------------ Save / Load session --------------------------

const onSave = (host, evt) => {
  let json = JSON.stringify (host.term.doc)
  showExportDialog (json) (host.export_dialog)
}

const onLoad = (host, evt) => 
  showImportDialog (host.import_dialog)

const onImportJSON = (host, evt) => {
  host.term.doc = JSON.parse (evt.detail)
  hideImportDialog (host.import_dialog)
}

// --------------------------- Refocus block -----------------------------
// After closing one of the export/import modals, focus is returned
// to currently 'focused' block to be able to type without touching the
// mouse.

const refocus = (host, evt) => 
  termRefocus (host.term) (evt)

// ---------------------------- Session View -----------------------------

export const SessionView = {
  term: ref ('e-term'),
  export_dialog: ref ('e-export-json'),
  import_dialog: ref ('e-import-json'),
  render: render(() => html`
    <e-term onsave=${ onSave } onload=${ onLoad }></e-term>
    <e-export-json onrefocus=${ refocus }></e-export-json>
    <e-import-json onimport=${ onImportJSON }
                   onrefocus=${ refocus }>
    </e-import-json>
  `.define ({
    ETerm: TermView,
    EExportJson: ExportJSONView,
    EImportJson: ImportJSONView
  }), { shadowRoot: false })
}

define ('e-session', SessionView)
