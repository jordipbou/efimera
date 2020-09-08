import { html, render } from 'hybrids'
import { ref, setOnCloseListener } from './Utils.js'
import dialogPolyfill from 'dialog-polyfill'

export const showHelpDialog = (host) => {
  setOnCloseListener (host) (host.dialog)
  host.dialog.showModal ()
}

export const HelpView = {
  init: {
    connect: (host, key, invalidate) => {
      dialogPolyfill.registerDialog (host.dialog)
    },
  },
  dialog: ref ('dialog'),
  render: render(() => html`
    <dialog>
      <section>
        <header>Introduction</header>
        <p>
          Efimera is a Javascript repl/live coding environment.
        </p>
      </section>
      <section>
        <header>Import packages from npm</header>
        <p>
          Importing ES6 packages directly from npm by using standard
          import statements inside efimera is allowed.
        </p>
        <p>
          Examples:
        </p>
        <pre>
          > import * as R from 'ramda'
          > R.head ([1, 2, 3])
          1
        </pre>
        <pre>
          > import { head, tail } from 'ramda'
          > head ([1, 2, 3])
          1
          > tail ([1, 2, 3])
          [Array] [2, 3]
        </pre>
      </section>
    </dialog>
  `, { shadowRoot: false })}
