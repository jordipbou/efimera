import { html, render } from 'hybrids'
import { 
  ResultDefines, toBlocks } from './PrettyPrint.js'
import { noShadow } from './Utils.js'

export const OutputView = {
  result: { evaluated: false, value: undefined },
  render: noShadow (
    ({ result }) => 
      html`${ result.evaluated && toBlocks (true) ('') (result.value) }`
        .define (ResultDefines))
}
