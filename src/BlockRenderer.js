// A block renderer renders a block content and possibly
// added content (like autocompletions) to HTML

// TODO:
// * Ignore auto completion and syntax highlighting (at least for now)
//   -- the important part is that they belong to the renderer, so
//      if necessary a new render can be created --

import { html } from 'hybrids'
import { renderLines } from './RendererUtils.js'

const styles = `
.line { min-height: 1em;
        line-height: 1;
        padding: 0em;
        margin: 0em; }

.line:focus { outline-style: none; }

.caret { min-width: 0.5em;
         animation: blink .75s step-end infinite; }

@keyframes blink { from, to { background-color: var(--term-background); 
                              color: var(--term-color); }
                   50% { background-color: var(--term-background-inverted);
                         color: var(--term-color-inverted); } }

.autocompletion .caret { animation: auto-blink .75s step-end infinite; }

@keyframes auto-blink { 
  from, to { background-color: var(--term-background);
             color: var(--autocompletion-color); }
  50% { background-color: var(--term-background-inverted);
        color: var(--autocompletion-color-inverted); } }

.autocompletion { color: var(--autocompletion-color); }

`

export const createRenderer = () => ({
  render: (block, focused) => 
    html (renderLines (block, focused)).style (styles)
})
