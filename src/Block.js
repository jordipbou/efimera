import { html, define, render } from 'hybrids'
import { filter, map } from 'ramda'

import { EditorView } from '@codemirror/next/view'
import { EditorState } from '@codemirror/next/state'
import { javascript } from '@codemirror/next/lang-javascript'
import { bracketMatching } from '@codemirror/next/matchbrackets'
import { history, historyKeymap } from '@codemirror/next/history'
import { foldGutter, foldKeymap } from "@codemirror/next/fold"
import { lineNumbers } from "@codemirror/next/gutter"
import { oneDark } from '@codemirror/next/theme-one-dark'
import { keymap } from "@codemirror/next/keymap"
import { specialChars } from "@codemirror/next/special-chars"
import { 
  highlightActiveLine, highlightSelectionMatches
  } from "@codemirror/next/highlight-selection"
import { 
  defaultKeymap, cursorPageUp, cursorPageDown,
  deleteCharBackward, deleteCharForward
  } from "@codemirror/next/commands"

// There were problems rewriting these keys if defaultKeymap
// was added.
const customKeymap = 
  filter ((i) => i.key !== 'PageUp' 
              && i.key !== 'PageDown'
              && i.key !== 'Backspace'
              && i.key !== 'Delete')
         (defaultKeymap)

import { searchKeymap } from "@codemirror/next/search"
import { commentKeymap } from "@codemirror/next/comment"
import { gotoLine } from "@codemirror/next/goto-line"
import { lintKeymap } from "@codemirror/next/lint"
import {
  autocomplete, startCompletion
  } from "@codemirror/next/autocomplete"

import prettyPrintJson from 'pretty-print-json'

const pretty_print = (data) => 
  data === undefined ?
    'undefined'
    : prettyPrintJson.toHtml (data)
  
const hostEvent = (host, evt_name) => {
  host.dispatchEvent (
    new CustomEvent (evt_name,
                    { detail: host }))

  return true
}

const evaluate_code = (host, code) => {
  // TODO: Add hack to use import as if it was (pikaImport)
  // let hack...to be able to use let with global variables
  let modified = 
    map ((line) => 
      line.replace (/^let/, 'var')
          .replace (/^const/, 'var')
          .replace (/@view/, 
                   'document.querySelector (\'[data-uuid="' + host.uuid + '"] .view\')')) 
        (code)

  let strcode = modified.join('\n')

  let result = window.eval (strcode)

  // TODO: Pretty print has problems with functions as result
  // (only can be seen in the console)

  hostEvent (host, 'scrolltoend')

  host.result = 
    result === undefined ?
    `<div class="undefined-block"></div>`
    : pretty_print (result)
}

const isBeginningOfBlock = (view) => {
  let selection = view.state.selection
  let range = selection.ranges [selection.primaryIndex]
  return range.from === 0 && range.to === 0
}

const isEndOfBlock = (view) => {
  let docLength = view.state.doc.length
  let selection = view.state.selection
  let range = selection.ranges [selection.primaryIndex]
  return range.from === docLength && range.to === docLength
}

export const Block = {
  index: 0,
  uuid: '',
  doc: '',
  result: {
    get: ({ render }) => render ().querySelector ('.result'),
    set: (host, value, lastValue) => {
      host.result.innerHTML = value
    }
  },
  editor: {
    get: ({ render }, lastValue) =>
      lastValue !== undefined ?
        lastValue
        : render ().querySelector ('.editor'),
    set: (host, value, lastValue) => value,
    connect: (host, key, invalidate) => {
      let editor = new EditorView ({
        state: EditorState.create ({ 
          doc: host.doc,
          extensions: [
            javascript (),
            //autocomplete (),
            bracketMatching (),
            history (),
            lineNumbers ({
              formatNumber: (lineNo) =>
                lineNo === 1 ? '' + host.index : '…'
            }),
            foldGutter (),
            specialChars (),
            highlightActiveLine (),
            highlightSelectionMatches (),
            oneDark,
            keymap([
              ...customKeymap,
              //...defaultKeymap,
              // Autocomplete
              //{ key: "Ctrl-Space", run: startCompletion },
              //{ key: "Escape", run: closeCompletion },
              //...searchKeymap,
              //...historyKeymap,
              //...foldKeymap,
              //...commentKeymap,
              //...lintKeymap,
              // TODO: Change enter and
              // analyze block of code to see if it has not
              // syntax errors (it can be evaluated) to
              // do newline or evaluate. Maintain shift+enter
              // and ctrl-enter as they are now.
              { key: "Backspace",
                run: (view) => 
                  isBeginningOfBlock (view) && isEndOfBlock (view) ?
                    hostEvent (host, 'deleteblock')
                    : deleteCharBackward (view)
                },
              { key: "Delete",
                run: (view) =>
                  isBeginningOfBlock (view) && isEndOfBlock (view) ?
                    hostEvent (host, 'deleteblock')
                    : deleteCharForward (view)
                },
              { key: "Shift-Enter", 
                run: (view) => hostEvent (host, 'createblock') },
              { key: "Ctrl-Enter", 
                run: (view) => {
                  let txt = view.state.doc.text
                  evaluate_code (host, txt)
                  hostEvent (host, 'createblockiflast')
                  return true
                }},
              { key: "PageUp", 
                run: (view) => 
                  isBeginningOfBlock (view) ?
                    hostEvent (host, 'prevblock')
                    : cursorPageUp (view)
                },
              { key: "PageDown", 
                run: (view) => 
                  isEndOfBlock (view) ?
                    hostEvent (host, 'nextblock')
                    : cursorPageDown (view)
                }
            ])
          ]
        })
      })

      host.editor.appendChild (editor.dom)
      host.editor = editor
      host.editor.focus ()
    }
  },
  render: render (
    () => html`
      <div class="editor"></div>
      <div class="result"></div>
      <div class="view"></div>
    `,
    { shadowRoot: false })
}

define ('e-block', Block)
