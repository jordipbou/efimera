import { html } from 'hybrids'
import { ref } from './HybridsUtils.js'
import { 
  createDocument, focusNextBlock, focusPreviousBlock, 
  updateBlock, appendBlock 
  } from './Document.js'
import { BlockView, inputRefocus } from './BlockView.js'
import { 
  addIndex, always, append, drop, evolve, F, head, map, length, T, update 
  } from 'ramda'
import { autocomplete } from './Autocompletion.js'

// ---------------- Block modification / Autocompletion ------------------

const onUpdateBlock = (idx) => (host, evt) => {
  host.doc = updateBlock (idx) (evt.detail) (host.doc) 

  let [completions, name, autocompletion] = autocomplete (evt.detail)
  host.doc = updateBlock (idx)
                         (evolve ({ 
                           autocompletion: always (autocompletion),
                           completions: always (completions)
                          }) (evt.detail))
                         (host.doc)

}

// ------------------------- Code evaluation -----------------------------

const blockEvaluated = (idx) => (host, evt) => {
  host.results = update (idx) (evt.detail) (host.results)
  if (idx === length (host.doc.blocks) - 1) {
    host.doc = appendBlock () (host.doc)
    host.results = append (undefined) (host.results)
    //focusLastBlock (host)
  } else {
    // TODO: Jump to next block?
  }
}

const blockTop = (host, evt) => {
  host.doc = focusPreviousBlock (host.doc) 
}

const blockBottom = (host, evt) => {
  host.doc = focusNextBlock (host.doc)
}

export const termRefocus = (host, evt) => {
  inputRefocus (
    host
      .render ()
      .querySelector ('e-block:nth-child(' + (host.doc.focused + 1) + ')'))
}

export const TermView = {
  doc: { 
    connect: (host, key, invalidate) => { host.doc = createDocument () }
  },
  results: [undefined],
  render: ({ doc, results }) => html`
    ${addIndex (map) 
               ((b, idx) => 
                  html`
                    <e-block block=${b}
                             onupdateblock=${onUpdateBlock (idx)}
                             onblockevaluated=${blockEvaluated (idx)}
                             onblocktop=${blockTop}
                             onblockbottom=${blockBottom}
                             focused=${doc.focused === idx}
                             result=${results [idx]}>
                    </e-block>`) 
               (doc.blocks)}
  `.define ({ EBlock: BlockView })
}
