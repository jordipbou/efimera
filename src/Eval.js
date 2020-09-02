import { join, map, pipe } from 'ramda'
import * as acorn from 'acorn'

// ---------------------------------------------------- import '<package>'
const regex1 = /import\s*['|"](?<package>.*)['|"]/
const subst1 = "efimera.npmImport ('$<package>')"

// --------------------------------------------- import * from '<package>'
const regex2 = /import\s*\*\s*from\s*['|"](?<package>.*)['|"]/
const subst2 = "efimera.npmImport ('$<package>', null)"

// --------------------------------  import { <exports> } from '<package>'
const regex3 = /import\s*{(?<exports>.*)}\s*from\s*['|"](?<package>.*)['|"]/
const subst3 = "efimera.npmImport ('$<package>').then (m => '$<exports>'.split (',').map ((s) => { let p = s.trim (); window[p] = m[p] }))"

export const replaceImports = (line) =>
  line.replace (regex1, subst1)
      .replace (regex2, subst2)
      .replace (regex3, subst3)

export const replaceLet = (line) =>
  line.replace (/^let/, 'var')

export const replaceConst = (line) =>
  line.replace (/^const/, 'var')

export const applyReplacements = 
  map (
    pipe (replaceImports,
          replaceLet,
          replaceConst))

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

export const evaluate_code = (code) => {
  let modified = applyReplacements (code)

  let strcode = join ('\n') (modified)

  return window.eval (strcode)
}
