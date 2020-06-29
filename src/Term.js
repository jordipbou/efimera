import { html, define, dispatch, render } from 'hybrids'
import { map } from 'ramda'

const styles = html`
  <style>
    e-term { width: 100%;
            height: 100%;
            display: block; }

    div { height: 1em; }

    .block { width: 100%; }

    .system { color: var(--base0); }
    .input { color: var(--base3); }

    .line { display: flex; }

    .editable { position: relative; 
                display: flex; }

    .line.input .prompt { width: 1em; }
    .editable .content { min-width: 0.5em;
                         outline-width: 0px;
                         caret-color: transparent; }
    .editable .completion { color: var(--base01); }

    .focused .caret { display: block;
                      position: absolute;
                      top: 0em;
                      left: 0em;
                      width: 0.5em;
                      height: 1em;
                      z-index: 10;
                      background-color: var(--base1);
                      animation: caret-pulse 
                                 1s 
                                 steps(1) 
                                 infinite; }

    @keyframes caret-pulse { from, to { opacity: 0.5; } 
                             50% { opacity: 0;} }
  </style>
`

const prompt_width = 2
const first_line_prompt = '> '
const next_lines_prompt = '..'

const asHTML = (onclick, onkeydown) => (l) =>
  l.type === 'input' ?
    html`<div class="line input ${l.focused ? 'focused' : ''}" 
              onclick=${onclick (l)}>
           <div class="prompt">${first_line_prompt}</div>
           <div class="editable">
             <div class="caret"></div>
             <div class="content"
                  contenteditable="true"
                  onkeydown=${onkeydown (l)}>
               ${l.value}
             </div>
             <div class="completion">${l.completion}</div>
           </div>
         </div>`
    : html`<div class="line ${l.type}">
             <div class="line">
               <div class="content">${l.value}</div>
             </div>
           </div>`

// Cambiar para que sea un focus !!!
const clickOnLine = (line) => (host, evt) => {
  // TODO: Find caret coordinate of click
  let fontSize = 
    window.getComputedStyle (evt.target, null)['font-size']
          .slice (0, -2)
  let caret_width = fontSize / 2
  let caret_height = fontSize
  let caret_x = Math.floor(evt.clientX / caret_width) - prompt_width
  let caret_y = Math.floor(evt.clientY / caret_height)
  // --
  dispatch (host, 
            'selectline', 
            { 
              detail: {
                line: line,
                caret: [caret_x, caret_y]
            }})
  evt.stopPropagation ()
}
clickOnLine.options = true

const keydown = (line) => (host, evt) => {
  console.log (evt.key)
  switch (evt.key) {
    case 'ArrowUp': dispatch (host, 'gotonextline'); break;
    case 'ArrowLeft': dispatch (host, 'movecaretleft'); break;
    default:
      evt.preventDefault ()
      evt.stopPropagation ()
      break
  }
  // key: ArrowUp
  // key: ArrowDown
  // key: PageUp
  // key: PageDown
  // key: ArrowLeft
  // key: ArrowRight
  // key: Escape 
  // key: Control / code: ControlLeft | ControlRight
  // key: Alt / code: AltLeft | AltRight
  // key: Shift / code: ShiftLeft | ShiftRight

  return false
}

export const Term = {
  buffer: [],
  startLine: 0,
  render: render (
    ({ buffer }) => html`
      ${map (asHTML (clickOnLine, keydown)) (buffer)}
      ${styles}
    `, { shadowRoot: false })
}

define ('e-term', Term)
