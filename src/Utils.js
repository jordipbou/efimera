import { is } from 'ramda'
import { dispatch, render } from 'hybrids'

export const ref = 
  (query) => 
    ({ render }) => 
      is (Function, render) ? 
        render ().querySelector (query) 
        : null

export const noShadow = (r) => render(r, { shadowRoot: false })
  

const onCloseDialog = (host) => (evt) =>
  dispatch (host, 
            'refocus', 
            { bubbles: true, composed: true })

export const setOnCloseListener = (host) => (dialog) => {
  dialog.removeEventListener ('close', onCloseDialog (host))
  dialog.addEventListener ('close', onCloseDialog (host))
}
