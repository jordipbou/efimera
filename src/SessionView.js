import { define, html, render } from 'hybrids'
import { ref } from './Utils.js'
import { TermView, termRefocus } from './TermView.js'
import { 
  ExportJSONView, showExportDialog 
  } from './ExportJSONView.js'
import { 
  ImportJSONView, showImportDialog, hideImportDialog 
  } from './ImportJSONView.js'
import { HelpView, showHelpDialog } from './HelpView.js'

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

// ----------------------------- Show help -------------------------------

const onHelp = (host, evt) =>
  showHelpDialog (host.help_dialog)

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
  help_dialog: ref ('e-help'),
  render: render(() => html`
    <e-term onsave=${ onSave } onload=${ onLoad } onhelp=${ onHelp }></e-term>
    <e-export-json onrefocus=${ refocus }></e-export-json>
    <e-import-json onimport=${ onImportJSON }
                   onrefocus=${ refocus }>
    </e-import-json>
    <e-help onrefocus=${ refocus }></e-help>
  `.define ({
    ETerm: TermView,
    EExportJson: ExportJSONView,
    EImportJson: ImportJSONView,
    EHelp: HelpView
  }), { shadowRoot: false })
}

define ('e-session', SessionView)
