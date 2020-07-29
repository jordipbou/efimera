import { is, isNil, not } from 'ramda'

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
