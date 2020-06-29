import { html, define, render } from 'hybrids'
import { Term } from './Term.js'
import { evolve, filter, has, map, pipe } from 'ramda'

const styles = html`
  <style>
    e-app { width: 100%;
            height: 100%;
            display: block; }
  </style>
`

const moveCaretTo = (host, line, x, y) => {
  if (x !== undefined) {
    if (x >= line.value.length) {
      line.x = line.value.length - 1
    } else if (x < 0) {
      line.x = 0
    } else {
      line.x = x
    }

    // TODO: Modify line !!!
  }

  // TODO: Modify x position depending on y (for lines spanning
  // multiple lines)

  let line_selector = '.line:nth-child(' + (line.n + 1) + ')'
  let caret_selector = line_selector + ' .caret'
  let editable_selector = line_selector + ' .editable .content'

  // TODO: This fails if content is bigger than screen width 
  // and wraps to next line on div !!!
  // It's needed to check div width and adapt y of caret.
  let caret_element = host.querySelector (caret_selector)

  caret_element.style.left = (line.x * 0.5) + 'em'

  let editable_element = host.querySelector (editable_selector)

  editable_element.focus ()
}

const selectLine = (host, evt) => {
  let line = evt.detail.line
  let caret = evt.detail.caret

  host.doc = 
    map ((l) => evolve ({ focused: (v) => l.n === line.n}) (l)) 
        (host.doc)

  if (line.n !== -1) moveCaretTo (host, line, caret[0], caret[1])
}

const deselectLines = (host) => {
  selectLine (host, { detail: { line: { n: -1 }}})
}

const goToNextLine = (host, evt) => {
  console.log ('jumping to next line')
}

const moveCaretLeft = (host, evt) => {
  host.doc = 
    map ((l) => {
            if (l.focused && l.x > 0) {
              l.x = l.x - 1
              moveCaretTo (host, l)
            }
            return l
          })
        (host.doc)
}

// Types:
//  system -> system messages
//  input -> input from user
//  output -> div accessible to user as @view (@1, @50, ...)
//  result -> result of evaluating user input

export const App = {
  doc: [
    { n: 0, type: 'system', value: 'Welcome to Efimera.js v0.0.1.' },
    { n: 1, type: 'input', value: 'Arr', focused: false, x: 0, completion: 'ay' }
  ],
  render: render (
    ({ doc }) => html`
      <e-term buffer=${doc}
              onclick=${deselectLines}
              onselectline=${selectLine}
              ongotonextline=${goToNextLine}
              onmovecaretleft=${moveCaretLeft}>
      </e-term>
      ${styles}
    `, { shadowRoot: false })
}

define ('e-app', App)
