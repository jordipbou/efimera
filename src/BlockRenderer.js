// A block renderer renders a block content and possibly
// added content (like autocompletions) to HTML

// TODO:
// * Ignore auto completion and syntax highlighting (at least for now)
//   -- the important part is that they belong to the renderer, so
//      if necessary a new render can be created --

import { html } from 'hybrids'
import { renderLines } from './RendererUtils.js'

const styles = `
.line {
  background-color: gray;
  min-height: 1em;
  line-height: 1;
  padding: 0em;
  margin: 0em;
}

.caret {
  min-width: 0.5em;
  animation: blink .75s step-end infinite;
}

.autocompletion {
  color: green;
}

@keyframes blink {
  from, to { background-color: black; 
             color: white; }
  50% { background-color: white;
        color: black; }
}
`

export const createRenderer = () => ({
  render: (block, focused) => 
    html (renderLines (block, focused)).style (styles)
})
