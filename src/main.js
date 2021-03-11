import { define } from 'hybrids'
import { SessionView } from './SessionView.js'

import './main.css'

export * from './BlockRenderer.js'
export { npmImport } from './Eval.js'
export { showHelpDialog } from './HelpView.js'

export * as M from 'frmidi'
export * as R from 'ramda'
export * as X from 'rxjs'
export * as O from 'rxjs/operators'

// -------------------- Main element definition --------------------------

define ('e-session', SessionView)
