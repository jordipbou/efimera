import { always, cond, is, T, type } from 'ramda'

const HTMLNumber = (n) =>
  `<span class="pp-number">
    <span class="label decimal">DEC</span>
    <span class="decimal">${n}</span>
    <span class="label hexadecimal">HEX</span>
    <span class="hexadecimal">${n.toString (16)}</span>
    <span class="label binary">BIN</span>
    <span class="binary">${n.toString (2)}</span>
  </span>`

const HTMLString = (s) =>
  `<span class="pp-string">"${s}"</span>`

export const toHTML = 
  cond ([
    [is (Number), HTMLNumber],
    [is (String), HTMLString],
    [T,           always]])
