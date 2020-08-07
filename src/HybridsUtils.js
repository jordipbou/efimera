import { is } from 'ramda'

export const ref = 
  (query) => 
    ({ render }) => 
      is (Function, render) ? 
        render ().querySelector (query) 
        : null
