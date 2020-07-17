import { html, define, render } from 'hybrids'
import { filter, last, map, startsWith } from 'ramda'

import { customKeymap } from './Keymap.js'

import { EditorView } from '@codemirror/next/view'
import { EditorState } from '@codemirror/next/state'
import { javascript } from '@codemirror/next/lang-javascript'
import { bracketMatching } from '@codemirror/next/matchbrackets'
import { history, historyKeymap } from '@codemirror/next/history'
import { foldGutter, foldKeymap } from "@codemirror/next/fold"
import { lineNumbers } from "@codemirror/next/gutter"
import { keymap } from "@codemirror/next/keymap"
import { specialChars } from "@codemirror/next/special-chars"
import { 
  highlightActiveLine, highlightSelectionMatches
  } from "@codemirror/next/highlight-selection"
import { oneDark } from '@codemirror/next/theme-one-dark'

import { tokenizer } from 'acorn'

import { searchKeymap } from "@codemirror/next/search"
import { commentKeymap } from "@codemirror/next/comment"
import { gotoLine } from "@codemirror/next/goto-line"
import { lintKeymap } from "@codemirror/next/lint"
import {
  autocomplete, startCompletion
  } from "@codemirror/next/autocomplete"

const getCompletions = (host) => (state, pos, context) => {
  console.log ('on getCompletions')
  let text = state.doc.text.join ('\n')

  // getToken
  let tokens
  try {
    tokens = [...tokenizer (text)]
  } catch (e) {
    // On some situations tokenizer is not
    // able to parse string. Its not a problem,
    // as just there are no completions then.
    return []
  }

  let last_token = last (tokens)

  if (last_token !== undefined
   && last_token.type.label === 'name'
   && last_token.value.length === 1) {
    // Add new elements to context
  }

  //if (last_token !== undefined 
  // && (last_token.type.label === '.' 
  // || (last_token.type.label === 'name'
  //  && last_token.value.length === 1))) {
  //  // Update completion context
  //  if (last_token.type.label === '.') {
  //    // Add one level of completion to context
  //  }
  //  console.log ('updating completion context')
  //}

  return []
  //if (last_token.type.label === 'name') {
  //  // TODO: Check if previous token is '.'
  //  return map ((v) => ({ label: v, start: pos - last_token.value.length, end: pos }), filter (startsWith (last_token.value)) (keys (window)))
  //} else if (last_token.type.label === '.') {
  //  let pre_last_token = last (init (tokens))

  //  return map ((v) => ({ label: v, start: pos - last_token.value.length, end: pos }), filter (startsWith (pre_last_token.value)) (keys (window)))
  //} 
}

export const Block = {
  index: 0,
  uuid: '',
  doc: {
    get: (host) => 
      host.editor.state !== undefined ?
        host.editor.state.doc.text
        : '',
    set: (host, value, lastValue) => value
  },
  multiline: false,
  result: {
    get: ({ render }) => render ().querySelector ('.result'),
    set: (host, value, lastValue) => {
      host.result.innerHTML = value
    }
  },
  completion_context: [],
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
            autocomplete ({ override: getCompletions (host) }),
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
            keymap(customKeymap (host))
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
