import { is, isNil, not } from 'ramda'

export const init = (p, f) => ({
  get: (host, lastValue) => lastValue,
  set: (host, value, lastValue) => value,
  connect: (host, key, invalidate) => { host [p] = f (host, key, invalidate) }
})

export const ref = 
  (query) => 
    ({ render }) => 
      is (Function, render) ? 
        render ().querySelector (query) 
        : null

export const forward =
  (element, host, evt) =>
    not (isNil (element)) ?
      element.addEventListener (evt, (e) => dispatch (host, evt))
      : null
