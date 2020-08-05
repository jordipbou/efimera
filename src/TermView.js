import { define, html } from 'hybrids'
import './InputView.js'

export const TermView = {
  render: () => html`
    <e-input></e-input> 
  `
}

define ('e-term', TermView)
