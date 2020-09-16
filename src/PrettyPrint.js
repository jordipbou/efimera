// Objects have three possible states:
// - condensed : it's inside a collapsed collection
// - collapsed : occupies full line (only on root or expanded collection)
// - expanded  : can use more than one line (on root or expanded coll)

// An object always has:
// <object-tag>
//   <container>
//     <condensed>
//     <collapsed>
//     <expanded>
//   </container>
// <object-tag>

// Condensed/Collapsed/Expanded blocks are only rendered if needed
// but then they're are always rendered to maintain internal state
// even if they are hidden.

// As condensed/collapsed/expanded are classes assigned to blocks,
// same block can be used for the three states if needed.

import { 
  addIndex, always, append, cond, equals, filter, 
  head, includes, init, is, isNil, 
  join, keys, last, length, map, T, type, without
  } from 'ramda'
import { dispatch, html } from 'hybrids'
import { noShadow } from './Utils.js'

// ----------------------------------------------------- On click callback

const noClick = (host, evt) => {
  if (evt.cancelBubble !== null) evt.cancelBubble = true
  dispatch (host, 'refocus', { bubbles: true, composed: true })
  evt.preventDefault ()
  return false
}

const expandTag = (host, evt) => {
  host._expanded = true
  host._hasExpanded = true
  if (evt.cancelBubble !== null) evt.cancelBubble = true
  dispatch (host, 'refocus', { bubbles: true, composed: true })
  evt.preventDefault ()
  return false
}

const collapseTag = (host, evt) => {
  host._expanded = false
  if (evt.cancelBubble !== null) evt.cancelBubble = true
  dispatch (host, 'refocus', { bubbles: true, composed: true })
  evt.preventDefault ()
  return false
}

// --------------------------------------------------------- HTML Elements

const HTMLBaseElement = (value) =>
  ({ value: value,
     full_line: true,
     _expanded: false,
     _hasExpanded: false })

const ContainerClasses = (full_line) => (expanded) =>
  ({ 'pp-container': true,
     'condensed': !full_line,
     'collapsed': full_line && !expanded,
     'expanded': full_line && expanded })

// Undefined

const HTMLUndefinedTag = (full_line) =>
  html`<e-undefined class="result pp-undefined"
                    full_line="${ full_line }">
       </e-undefined>`

const HTMLUndefined = {
  ...HTMLBaseElement (undefined),
  render: noShadow(({ full_line, _expanded }) => html`
    <span class="${ ContainerClasses (full_line) (_expanded) }">
      ${ !full_line && html`
        <span class="condensed">undefined</span>`}
      ${ full_line && html`
        <span class="collapsed" onclick="${ noClick }">undefined</span>`}
    </span>
  `)}

// Boolean

const HTMLBooleanTag = (full_line) => (value) =>
  html`<e-boolean class="result pp-boolean" 
                  full_line="${ full_line }"
                  value="${ value }">
       </e-boolean>`

const HTMLBoolean = {
  ...HTMLBaseElement (true),
  render: noShadow(({ value, full_line, _expanded }) => html`
    <span class="${ ContainerClasses (full_line) (_expanded) }">
      ${ !full_line && html`
        <span class="condensed">
          ${ value ? 'true' : 'false' }
        </span>`}
      ${ full_line && html`
        <span class="collapsed" onclick="${ noClick }">
          ${ value ? 'true' : 'false' }
        </span>`}
      </span>
    </span>
  `)}

// Number

const HTMLNumberTag = (full_line) => (value) =>
  html`<e-number class="result pp-number" 
                 full_line="${ full_line }"
                 value="${ value }">
       </e-number`

const HTMLNumber = {
  ...HTMLBaseElement (0),
  render: noShadow (({value, full_line, _expanded, _hasExpanded}) => html`
    <span class="${ ContainerClasses (full_line) (_expanded) }">
      ${ !full_line && html`
        <span class="condensed">
          ${ value }
        </span>`}
      ${ (full_line && !_expanded) && html`
        <span class="collapsed" onclick="${ expandTag }">
          ${ value }
        </span>`}
      ${ (full_line && _expanded) && html`
      <span class="expanded" onclick="${ collapseTag }">
        <span class="label decimal">DEC</span>
        <span class="decimal">${ value }</span>
        <span class="label hexadecimal">HEX</span>
        <span class="hexadecimal">${ value.toString (16) }</span>
        <span class="label binary">BIN</span>
        <span class="binary">${ value.toString (2) }</span>
      </span>`}
    </span>
  `)}

// String

const HTMLStringTag = (full_line) => (value) =>
  html`<e-string class="result pp-string"
                 full_line="${ full_line }"
                 value="${ value }">
       </e-string>`

const HTMLString = {
  ...HTMLBaseElement (''),
  render: noShadow (({value, full_line, _expanded, _hasExpanded }) => html`
    <span class="${ ContainerClasses (full_line) (_expanded) }">
      ${ !full_line && html`
        <span class="condensed">
          '${ value }'
        </span>`}
      ${ full_line && !_expanded && html`
        <span class="collapsed" onclick="${ expandTag }">
          '${ value }'
        </span>`}
      ${ full_line && _expanded && html`
        <span class="expanded" onclick="${ collapseTag }">
          '${ value }'
        </span>`}
    </span>
  `)}

// Array

const HTMLArrayTag = (full_line) => (value) =>
  html`<e-array class="result pp-array"
                full_line="${ full_line }"
                value="${ value }">
       </e-array>`

const HTMLArray = {
  ...HTMLBaseElement ([]),
  render: noShadow (({value, full_line, _expanded, _hasExpanded}) => html`
    <span class="${ ContainerClasses (full_line) (_expanded) }">
      ${ !full_line && html`
        <span class="condensed">
          Array (${ length (value) })
        </span>`}
      ${ full_line && !_expanded && html`
        <span class="collapsed" onclick="${ expandTag }">
          Array (${ length (value) }) [
          ${ addIndex 
               (map) 
               ((i, idx) => html`
                 ${ toBlocks (false) (i) }
                 ${ idx !== (length (value) - 1) ? ',' : '' }
               `) 
               (value) }
          ]
        </span>`}
      ${ ((full_line && _expanded) || _hasExpanded) && html`
        <span class="expanded" onclick="${ collapseTag }">
          <span class="pp-array-header">
            Array (${ length (value) }) [
          </span>
          ${ addIndex 
               (map)
               ((i, idx) => html`
                 <span class="pp-array-item">
                   ${ idx }:${ toBlocks (true) (i) }
                 </span>`)
               (value) }
          <span class="pp-array-footer">]</span>
        </span>`}
    </span>
  `)}

// Promise

const HTMLPromiseTag = (full_line) => (value) =>
  html`<e-promise class="result pp-promise"
                  full_line="${ full_line }"
                  value="${ value }">
       </e-promise>`

const HTMLPromise = {
  ...HTMLBaseElement ({}),
  render: noShadow (({value, full_line, _expanded, _hasExpanded}) => html`
    ${ html.resolve (
      value.then ((x) => html`
              <span class="${ ContainerClasses (full_line) (_expanded) }">
                ${ !full_line && html`
                  <span class="condensed">
                    [[Resolved]] ${ toBlocks (false) (x) }
                  </span>
                `}
                ${ full_line && !_expanded && html`
                  <span class="collapsed" onclick="${ expandTag }">
                    [[Resolved]] ${ toBlocks (false) (x) }
                  </span>
                `}
                ${ full_line && _expanded && html`
                  <span class="expanded" onclick="${ collapseTag }">
                    [[Resolved]] ${ toBlocks (true) (x) }
                  </span>
                `}
              </span>`)
           .catch ((e) => html`
              <span class="${ ContainerClasses (full_line) (_expanded) }">
                ${ !full_line && html`
                  <span class="condensed">
                    [[Rejected]] ${ toBlocks (false) (e) }
                  </span>
                `}
                ${ full_line && !_expanded && html`
                  <span class="collapsed" onclick="${ expandTag }">
                    [[Rejected]] ${ toBlocks (false) (e) }
                  </span>
                `}
                ${ full_line && _expanded && html`
                  <span class="expanded" onclick="${ collapseTag }">
                    [[Rejected]] ${ toBlocks (true) (e) }
                  </span>
                `}
              </span>`),
      html`
        <span class="${ ContainerClasses (full_line) (_expanded) }">
          ${ !full_line && html`
            <span class="condensed">
              [[Pending]]
            </span>`}
          ${ full_line && !_expanded && html`
            <span class="condensed" onclick="${ expandTag }">
              [[Pending]]
            </span>`}
          ${ full_line && _expanded && html`
            <span class="expanded" onclick="${ collapseTag }">
              [[Pending]]
            </span>`}
      `)}`)}

// Object

const HTMLObjectTag = (full_line) => (value) =>
  html`<e-object class="result pp-object"
                 full_line="${ full_line }"
                 value="${ value }">
       </e-object>`

const HTMLObject = {
  ...HTMLBaseElement ({}),
  render: noShadow (({value, full_line, _expanded, _hasExpanded}) => html`
    <span class="${ ContainerClasses (full_line) (_expanded) }">
      ${ !full_line && html`
        <span class="condensed">{…}</span>
      `}
      ${ full_line && !_expanded && html`
        <span class="collapsed" onclick="${ expandTag }">
          {
          ${ addIndex 
               (map) 
               ((k, idx) => html`
                 <span class="pp-object-property">
                   ${ k }:${ toBlocks (false) (value[k]) }
                   ${ idx !== (length (keys (value)) - 1) ? ',' : '' }
                 </span>`)
               (keys (value)) }
          }
        </span>
      `}
      ${ full_line && _expanded && html`
        <span class="expanded" onclick="${ collapseTag }">
          ${ map
               ((k) => html`
                 <span class="pp-object-property">
                   ${ k }:${ toBlocks (true) (value[k]) }
                 </span>`)
               (keys (value)) }
        </span>
      `}
    </span>
  `)}
 
export const toBlocks = (full_line) => (value) => 
  cond ([
    [isNil, always (HTMLUndefinedTag (full_line))],
    [equals (true), always (HTMLBooleanTag (full_line) (true))],
    [equals (false), always (HTMLBooleanTag (full_line) (false))],
    [is (Number), always (HTMLNumberTag (full_line) (value))],
    [is (String), always (HTMLStringTag (full_line) (value))],
    [is (Array), always (HTMLArrayTag (full_line) (value))],
    [is (Promise), always (HTMLPromiseTag (full_line) (value))],
    [is (Object), always (HTMLObjectTag (full_line) (value))],
  ]) (value)

export const ResultDefines = {
  EUndefined: HTMLUndefined,
  EBoolean: HTMLBoolean,
  ENumber: HTMLNumber,
  EString: HTMLString,
  EArray: HTMLArray,
  EPromise: HTMLPromise,
  EObject: HTMLObject,
}
