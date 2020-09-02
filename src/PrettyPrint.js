import { 
  always, append, cond, equals, filter, head, includes, init, is, isNil, 
  join, keys, last, length, map, T, type, without
  } from 'ramda'
import { html } from 'hybrids'

export const styles = `
.collapsed .expanded { display: none; }
.expanded .collapsed { display: none; }
.pp-undefined { background: var(--result-background); }
.pp-number { color: var(--result-number-color); 
             background: var(--result-background); }
.pp-string { color: var(--result-string-color);
             background: var(--result-background); }
.pp-boolean { color: var(--result-boolean-color);
              background: var(--result-background); }
`

export const toggle = (host, evt) => {
  let e = 
    head 
      (filter 
        ((e) => e.classList ? 
                  includes ('expandable') (e.classList) 
                  : false)
        (evt.path))

  e.classList = 
    join (' ')
      (includes ('collapsed') (e.classList) ?
        append ('expanded') 
               (without ('collapsed') (e.classList))
        : append ('collapsed')  
                 (without ('expanded') (e.classList)))
}

const HTMLUndefined = () => html`
  <div class="pp-undefined"></div>`.style (styles)

const HTMLNumber = (n) => html`
  <span class="pp-number expandable collapsed" 
        onclick=${ toggle }>
    <span class="collapsed">
      <span class="decimal">${n}</span>
    </span>
    <span class="expanded">
      <span class="label decimal">DEC</span>
      <span class="decimal">${n}</span>
      <span class="label hexadecimal">HEX</span>
      <span class="hexadecimal">${n.toString (16)}</span>
      <span class="label binary">BIN</span>
      <span class="binary">${n.toString (2)}</span>
    </span>
  </span>`.style (styles)

const HTMLString = (s) => html`
  <span class="pp-string expandable collapsed" 
        onclick=${ toggle }>
    <span class="collapsed">"${s}"</span>
    <span class="expanded">"${s}"</span>
  </span>`.style (styles)

const HTMLArrayElement = (last) => (e) => html`
  <span>${ toHTML (e) }${ !last ? `,` : `` }</span>`

const HTMLArray = (a) => html`
  <span class="pp-array">
    <span class="">[Array]</span>
    <span class="">[</span>
    ${ map (HTMLArrayElement (false)) (init (a)) }
    ${ HTMLArrayElement (true) (last (a)) }
    <span class="">]</span>
  </span>`.style (styles)

const HTMLPromise = (p) =>
  html.resolve(
    p.then ((value) => html`
              <span class="pp-promise">
                <span class="resolved">[[Resolved]]</span>
                <span class="value">${ toHTML (value) }</span>
              </span>`.style (styles))
     .catch ((error) => html`
               <span class="pp-promise">
                 <span class="rejected">[[Rejected]]</span>
                 <span class="error">${ toHTML (error) }</span>
               </span>`.style (styles)),
    html`<span class="pp-promise">
           <span class="pending">[[Pending]]</span>
         </span>`.style (styles))


const HTMLObjectProperty = (last) => (p) => (v) => html`
  <span class="pp-object-property">
    <span class="pp-object-property-name">${ p }</span>
    <span>:</span>
    <span class="pp-object-property-value">${ toHTML (v) }</span>
    ${ !last ? `,` : `` }
  </span>`

const HTMLObject = (o) => html`
  <span class="pp-object">
    <span class="">
      <span class="">[Object]</span>
      <span class="">{</span>
    </span>
    <span class="">
      ${ map ((k) => HTMLObjectProperty (false) (k) (o[k])) 
             (init (keys (o))) }
      ${ HTMLObjectProperty (true) (last (keys (o))) (o[last (keys (o))]) }
    </span>
    <span class="">}</span>
  </span>`.style (styles)

const HTMLBoolean = (b) => html`
  <span class="pp-boolean">${b ? 'true' : 'false' }</span>`.style (styles)

export const toHTML = 
  cond ([
    [isNil,           HTMLUndefined],
    [is (Number),     HTMLNumber],
    [is (String),     HTMLString],
    [is (Array),      HTMLArray],
    [is (Promise),    HTMLPromise],
    [is (Object),     HTMLObject],
    [equals (true),   HTMLBoolean],
    [equals (false),  HTMLBoolean],
    [T,               always]])
