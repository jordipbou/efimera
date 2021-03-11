import { join, map, pipe } from 'ramda'
import * as acorn from 'acorn'

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
    return skypackImport ('rxjs', ns)
  } else if (pkg === 'rxjs/operators') {
    return skypackImport ('rxjs/operators', ns)
  } else if (pkg === 'mathjs') {
    return skypackImport ('mathjs', ns)
  } else {
    return unpkgImport (pkg, ns)
  }
}

// Importing npm packages ------------------------------------------------

// ---------------------------------------------------- import '<package>'

const regex1 = /import\s*['|"](?<package>.*)['|"]/
const subst1 = "efimera.npmImport ('$<package>')" 

// ------------------------------- import * as <namespace> from '<package>'

const regex2 = /import\s*\*\s*as\s*(?<namespace>[^\s]*)\s*from\s*['|"](?<package>.*)['|"]/
const subst2 = "efimera.npmImport ('$<package>', '$<namespace>')"

// --------------------------------  import { <exports> } from '<package>'

const regex3 = /import\s*{(?<exports>.*)}\s*from\s*['|"](?<package>.*)['|"]/
const subst3 = "efimera.npmImport ('$<package>').then (m => '$<exports>'.split (',').map ((s) => { let p = s.trim (); window[p] = m[p] }))"

// ------------------------------- import * from '<package>'

// This is not correct Javascript syntax, but I find it pretty useful.

const regex4 = /import\s*\*\s*from\s*['|"](?<package>.*)['|"]/
const subst4 = "efimera.npmImport ('$<package>', null)"

export const replaceImports = (line) =>
    line.replace (regex1, subst1)
        .replace (regex2, subst2)
        .replace (regex3, subst3)
        .replace (regex4, subst4)

// Referring efimera objects ---------------------------------------------

// --------------------------------------- Efimera session (Global object)

const regex01 = /@efimera/
const subst01 = "document.querySelector ('e-session')"

// ------------------------------------------ Render view of current block

const regex02 = /@out/
const subst02 = "document.querySelector ('e-block:nth-of-type(' + (document.querySelector ('e-term').doc.focused + 1) + ')').preview"

// ---------------------------------------- Render view of block by number

const regex03 = /@(\d*)out/
const subst03 = "document.querySelector ('e-block:nth-of-type($1)').preview"

// ------------------------------------------- Input view of current block

const regex04 = /@in/
const subst04 = "document.querySelector ('e-block:nth-of-type(' + (document.querySelector ('e-term').doc.focused + 1) + ')').input"

// ----------------------------------------- Input view of block by number

const regex05 = /@(\d*)in/
const subst05 = "document.querySelector ('e-block:nth-of-type($1)').input"

// ------------- Result (output view) of two blocks before the current one

const regex06 = /@@@/
const subst06 = "document.querySelector ('e-block:nth-of-type(' + (document.querySelector ('e-term').doc.focused - 1) + ')').output.result"

// --------------------------------- Result (output view) of previous block

const regex07 = /@@/
const subst07 = "document.querySelector ('e-block:nth-of-type(' + (document.querySelector ('e-term').doc.focused) + ')').output.result"


// ------------------------------- Result (output view) of block by number

const regex08 = /@(\d*)@/
const subst08 = "document.querySelector ('e-block:nth-of-type($1)').output.result"

// ----------------------------------------------------------- Term object

const regex09 = /@term/
const subst09 = "document.querySelector ('e-term')"

// -------------------------------------------------- Current block object

const regex010 = /@block/
const subst010 = "document.querySelector ('e-block:nth-of-type(' + (document.querySelector ('e-term').doc.focused + 1) + ')')"

// ------------------------------------------------ Block object by number

const regex011 = /@(\d*)block/
const subst011 = "document.querySelector ('e-block:nth-of-type($1)')"

export const replaceEfimeraObjects = (line) =>
  line.replace (regex01, subst01)
      .replace (regex02, subst02)
      .replace (regex03, subst03)
      .replace (regex04, subst04)
      .replace (regex05, subst05)
      .replace (regex06, subst06)
      .replace (regex07, subst07)
      .replace (regex08, subst08)
      .replace (regex09, subst09)
      .replace (regex010, subst010)
      .replace (regex011, subst011)

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

  let result = ['ok', undefined, null]
  try {
    result [1] = window.eval (strcode)
  } catch (e) {
    result [0] = 'error'
    result [2] = e
    console.error (e)
  }

  return result
}
