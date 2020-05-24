import { and, call, curry, equals, or } from 'ramda'

export let fcurry = curry((f, a, b) =>
  typeof a === 'function' ?
    typeof b === 'function' ?
      (v) => call(f, a(v), b(v))
      : (v) => call(f, a(v), b)
    : typeof b === 'function' ?
      (v) => call(f, a, b(v))
      : call(f, a, b)
)

export let fAnd = fcurry(and)
export let fEquals = fcurry(equals)
export let fOr = fcurry(or)
