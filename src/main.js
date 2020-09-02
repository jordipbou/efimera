import { define } from 'hybrids'
import { SessionView } from './SessionView.js'

import './main.css'

// -------------- Import modules from npm directly from eval -------------

const populateWindowNamespace = (module) => {
  for (let p in module) window[p] = module[p]
}

const ownNamespace = (namespace, d) => (module) =>
  window[namespace] = d ? module.default : module

const populateOn = (namespace, d) =>
  namespace === null ?
    populateWindowNamespace
    : ownNamespace (namespace, d)

const cdnImport = (cdn) => (pkg, ns, d = false) =>
  import (cdn + pkg)
    .then (populateOn (ns !== undefined ? ns : pkg, d))

// Although the npm packages are the same, it seems that different
// cdns return different files (I suppose depending on main, module
// and browser properties of package.json)

export const pikaImport = 
  cdnImport ('https://cdn.pika.dev/')

export const unpkgImport = 
	cdnImport ('https://unpkg.com/')

export const skypackImport = 
  cdnImport ('https://cdn.skypack.dev/')

export const npmImport = (pkg, ns) => {
  // By using null as namespace, all names
  // from package namespace will be populated into
  // window namespace.
  if (pkg === 'frmidi') {
    return unpkgImport ('frmidi', ns)
  } else if (pkg === 'ramda') {
    return skypackImport ('ramda', ns)
  } else if (pkg === 'hybrids') {
    return unpkgImport ('hybrids', ns)
  } else if (pkg === 'rxjs') {
    return pikaImport ('rxjs', ns)
  } else {
    return unpkgImport (pkg, ns)
  }
}

// -------------------- Main element definition --------------------------

define ('e-session', SessionView)
