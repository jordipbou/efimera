import { join, map, pipe } from 'ramda'
import * as acorn from 'acorn'
import { dispatch } from 'hybrids'

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

const pikaImport = 
  cdnImport ('https://cdn.pika.dev/')

const unpkgImport = 
	cdnImport ('https://unpkg.com/')

const skypackImport = 
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


// ------------------------------- import * as <namespace> from '<package>'
const regex2 = /import\s*\*\s*as\s*(?<namespace>[^\s*])\s*from\s*['|"](?<package>.*)['|"]/
const subst2 = "efimera.npmImport ('$<package>', '$<namespace>')"

// --------------------------------  import { <exports> } from '<package>'
const regex3 = /import\s*{(?<exports>.*)}\s*from\s*['|"](?<package>.*)['|"]/
const subst3 = "efimera.npmImport ('$<package>').then (m => '$<exports>'.split (',').map ((s) => { let p = s.trim (); window[p] = m[p] }))"

export const replaceImports = (line) =>
    line.replace (regex2, subst2)
        .replace (regex3, subst3)

// --------------------------------------------- Referring efimera objects

const regex01 = /@efimera/
const subst01 = "document.querySelector ('e-session')"

const regex02 = /@out/
const subst02 = "document.querySelector ('e-block:nth-of-type(' + (document.querySelector ('e-term').doc.focused + 1) + ')').preview"

const regex03 = /@(\d*)out/
const subst03 = "document.querySelector ('e-block:nth-of-type($1)').preview"

export const replaceEfimeraObjects = (line) =>
  line.replace (regex01, subst01)
      .replace (regex02, subst02)
      .replace (regex03, subst03)

// ------------------------------------------------------------- Show help
const regex001 = /^\.help$/
const subst001 = "efimera.showHelpDialog (document.querySelector ('e-session').help_dialog)"

export const replaceReplInstructions = (line) =>
  line.replace (regex001, subst001)

export const applyReplacements = 
  map (
    pipe (replaceImports,
          replaceEfimeraObjects,
          replaceReplInstructions))

// ----------------------- Check if code is evaluable --------------------
// It's used on block listener to know if enter means evaluate or
// add new line (when code is still not evaluable)

export const is_evaluable = (code) => {
  let modified = applyReplacements (code)
  let source_code = join ('\n') (modified)
  try {
    acorn.parse (source_code) 
    return true
  } catch (error) {
    return false
  }
}

// ---------------------------- Code evaluation --------------------------

export const evaluate_code = (host) => (code) => {
  let modified = applyReplacements (code)

  let strcode = join ('\n') (modified)

  try {
    let result = window.eval (strcode)
    dispatch (host, 'error', { detail: { noerror: true }, 
                               bubbles: true, 
                               composed: true })
    return result
  } catch (e) {
    console.error (e)
    dispatch (host, 'error', { detail: e, 
                               bubbles: true, 
                               composed: true })
    return undefined
  }
}
