import { html, render } from 'hybrids'
import { ref } from './Utils.js'
import { moveCursorTo } from './Block.js'
import { 
  createDocument, 
  focusBlock, focusedBlock, focusLastBlock, 
  focusNextBlock, focusPreviousBlock, 
  removeBlock, updateBlock, appendBlock 
  } from './Document.js'
import { BlockView, inputRefocus } from './BlockView.js'
import { 
  addIndex, always, append, curry, drop, evolve, 
  F, head, map, length, T, update 
  } from 'ramda'
import { autocomplete } from './Autocompletion.js'
import { AutocompletionView } from './AutocompletionView.js'
import { WelcomeBlockView } from './WelcomeBlockView.js'

// ---------------- Block modification / Autocompletion ------------------

const onUpdateBlock = (idx) => (host, evt) => {
  host.doc = updateBlock (idx) (evt.detail) (host.doc) 
  doAutocompletion (host)
}

const onDeleteBlock = (idx) => (host, evt) => {
  if (length (host.doc.blocks) > 1) {
    host.doc = removeBlock (idx) (host.doc)
    doAutocompletion (host)
  }
}

const doAutocompletion = (host) => {
  let [block, idx] = focusedBlock (host.doc)
  let [completions, name, autocompletion] = autocomplete (block)
  host.doc = updateBlock (idx)
                         (evolve ({ 
                           autocompletion: always (autocompletion),
                           completions: always (completions)
                          }) (block))
                         (host.doc)

  host.completions = completions
}

// ------------------------- Code evaluation -----------------------------

const blockEvaluated = (idx) => (host, evt) => {
  host.results = update (idx) (evt.detail) (host.results)
  if (idx === length (host.doc.blocks) - 1) {
    host.doc = appendBlock () (host.doc)
    host.results = append (undefined) (host.results)
    host.completions = []
    //focusLastBlock (host)
  } else {
    // TODO: Jump to next block?
  }
}

const blockTop = (host, evt) => {
  host.doc = focusPreviousBlock (host.doc) 
  doAutocompletion (host)
}

const blockBottom = (host, evt) => {
  host.doc = focusNextBlock (host.doc)
  doAutocompletion (host)
}

export const termRefocus = (host) => (evt) =>
  inputRefocus (
    host
      .render ()
      .querySelector ('e-block:nth-of-type(' + (host.doc.focused + 1) + ')'))

const onBlockClick = (idx) => (host, evt) =>
  host.doc = 
    focusBlock (idx)
               (updateBlock (idx) 
                            (moveCursorTo ([evt.detail.x, evt.detail.line])
                                          (host.doc.blocks [idx]))
                            (host.doc))

export const TermView = {
  doc: { 
    connect: (host, key, invalidate) => { 
      host.doc = createDocument () 

      // Add onclick event listener to host
      host.addEventListener ('click', termRefocus (host))
      return () => host.removeEventListener ('click', termRefocus (host))
    }
  },
  results: [undefined],
  completions: [],
  render: render(({ doc, completions, results }) => html`
    <e-welcome></e-welcome>
    ${addIndex (map) 
               ((b, idx) => 
                  html`
                    <e-block block=${b}
                             onmovecursorto=${onBlockClick (idx)}
                             ondeleteblock=${onDeleteBlock (idx)}
                             onupdateblock=${onUpdateBlock (idx)}
                             onblockevaluated=${blockEvaluated (idx)}
                             onblocktop=${blockTop}
                             onblockbottom=${blockBottom}
                             focused=${doc.focused === idx}
                             result=${results [idx]}>
                    </e-block>`) 
               (doc.blocks)}
    <e-completions completions=${ completions }></e-completions>
  `.define ({ 
      EBlock: BlockView, 
      ECompletions: AutocompletionView,
      EWelcome: WelcomeBlockView }),
  { shadowRoot: false })
}
