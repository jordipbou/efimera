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
     _hasExpanded: false,
     prefix: '' })

const ContainerClasses = (full_line) => (expanded) =>
  ({ 'pp-container': true,
     'condensed': !full_line,
     'collapsed': full_line && !expanded,
     'expanded': full_line && expanded })

// Undefined

const HTMLUndefinedTag = (full_line) => (prefix) =>
  html`<e-undefined class="result pp-undefined"
                    full_line="${ full_line }"
                    prefix="${ prefix }">
       </e-undefined>`

const HTMLUndefined = {
  ...HTMLBaseElement (undefined),
  render: noShadow(({ full_line, _expanded, prefix }) => html`
    <span class="${ ContainerClasses (full_line) (_expanded) }">
      ${ !full_line && html`
        <span class="condensed">
          ${ (prefix !== '') && html`
            <span class="pp-key">
              ${ prefix }:
            </span>`}
          undefined
        </span>`}
      ${ full_line && html`
        <span class="collapsed" onclick="${ noClick }">
          ${ (prefix !== '') && html`
            <span class="pp-key">
              ${ prefix }:
            </span>`}
          undefined
        </span>`}
    </span>
  `)}

// Boolean

const HTMLBooleanTag = (full_line) => (prefix) => (value) =>
  html`<e-boolean class="result pp-boolean" 
                  full_line="${ full_line }"
                  value="${ value }"
                  prefix="${ prefix }">
       </e-boolean>`

const HTMLBoolean = {
  ...HTMLBaseElement (true),
  render: noShadow(({ value, full_line, _expanded, prefix }) => html`
    <span class="${ ContainerClasses (full_line) (_expanded) }">
      ${ !full_line && html`
        <span class="condensed">
          ${ (prefix !== '') && html`
            <span class="pp-key">
              ${ prefix }:
            </span>`}
          ${ value ? 'true' : 'false' }
        </span>`}
      ${ full_line && html`
        <span class="collapsed" onclick="${ noClick }">
          ${ (prefix !== '') && html`
            <span class="pp-key">
              ${ prefix }:
            </span>`}
          ${ value ? 'true' : 'false' }
        </span>`}
      </span>
    </span>
  `)}

// Number

const HTMLNumberTag = (full_line) => (prefix) => (value) =>
  html`<e-number class="result pp-number" 
                 full_line="${ full_line }"
                 value="${ value }"
                 prefix="${ prefix }">
       </e-number`

const HTMLNumber = {
  ...HTMLBaseElement (0),
  render: noShadow (
    ({value, full_line, _expanded, _hasExpanded, prefix}) => html`
      <span class="${ ContainerClasses (full_line) (_expanded) }">
        ${ !full_line && html`
          <span class="condensed">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            ${ value }
          </span>`}
        ${ (full_line && !_expanded) && html`
          <span class="collapsed" onclick="${ expandTag }">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            ${ value }
          </span>`}
        ${ (full_line && _expanded) && html`
        <span class="expanded" onclick="${ collapseTag }">
          ${ (prefix !== '') && html`
            <span class="pp-key">
              ${ prefix }:
            </span>`}
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

const HTMLStringTag = (full_line) => (prefix) => (value) =>
  html`<e-string class="result pp-string"
                 full_line="${ full_line }"
                 value="${ value }"
                 prefix="${ prefix }">
       </e-string>`

const HTMLString = {
  ...HTMLBaseElement (''),
  render: noShadow (
    ({value, full_line, _expanded, _hasExpanded, prefix }) => html`
      <span class="${ ContainerClasses (full_line) (_expanded) }">
        ${ !full_line && html`
          <span class="condensed">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            '${ value }'
          </span>`}
        ${ full_line && !_expanded && html`
          <span class="collapsed" onclick="${ expandTag }">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            '${ value }'
          </span>`}
        ${ full_line && _expanded && html`
          <span class="expanded" onclick="${ collapseTag }">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            '${ value }'
          </span>`}
      </span>
    `)}

// Array

const HTMLArrayTag = (full_line) => (prefix) => (value) =>
  html`<e-array class="result pp-array"
                full_line="${ full_line }"
                value="${ value }"
                prefix="${ prefix }">
       </e-array>`

const HTMLArray = {
  ...HTMLBaseElement ([]),
  render: noShadow (
    ({value, full_line, _expanded, _hasExpanded, prefix}) => html`
      <span class="${ ContainerClasses (full_line) (_expanded) }">
        ${ !full_line && html`
          <span class="condensed">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            Array (${ length (value) })
          </span>`}
        ${ full_line && !_expanded && html`
          <span class="collapsed" onclick="${ expandTag }">
            <span class="pp-array-header">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
              Array (${ length (value) }) [
            </span>
            ${ addIndex 
                 (map) 
                 ((i, idx) => html`
                   ${ toBlocks (false) ('') (i) }
                   ${ idx !== (length (value) - 1) ? ',' : '' }
                 `) 
                 (value) }
            <span class="pp-array-footer">]</span>
          </span>`}
        ${ ((full_line && _expanded) || _hasExpanded) && html`
          <span class="expanded" onclick="${ collapseTag }">
            <span class="pp-array-header">
              <span class="pp-array-header">
              ${ (prefix !== '') && html`
                <span class="pp-key">
                  ${ prefix }:
                </span>`}
                Array (${ length (value) }) [
              </span>
            </span>
            ${ addIndex 
                 (map)
                 ((i, idx) => html`
                   <span class="pp-array-item">
                     ${ toBlocks (true) (idx) (i) }
                   </span>`)
                 (value) }
            <span class="pp-array-footer">]</span>
          </span>`}
      </span>
    `)}

// Promise

const HTMLPromiseTag = (full_line) => (prefix) => (value) =>
  html`<e-promise class="result pp-promise"
                  full_line="${ full_line }"
                  value="${ value }"
                  prefix="${ prefix }">
       </e-promise>`

const HTMLPromise = {
  ...HTMLBaseElement ({}),
  render: noShadow (
    ({value, full_line, _expanded, _hasExpanded, prefix}) => html`
      ${ html.resolve (
        value.then ((x) => html`
                <span class="${ ContainerClasses (full_line) (_expanded) }">
                  ${ !full_line && html`
                    <span class="condensed">
                    ${ (prefix !== '') && html`
                      <span class="pp-key">
                        ${ prefix }:
                      </span>`}
                      ${ toBlocks (false) ('[[Resolved]]') (x) }
                    </span>
                  `}
                  ${ full_line && !_expanded && html`
                    <span class="collapsed" onclick="${ expandTag }">
                      ${ (prefix !== '') && html`
                        <span class="pp-key">
                          ${ prefix }:
                        </span>`}
                      ${ toBlocks (true) ('[[Resolved]]') (x) }
                    </span>
                  `}
                  ${ full_line && _expanded && html`
                    <span class="expanded" onclick="${ collapseTag }">
                      ${ (prefix !== '') && html`
                        <span class="pp-key">
                          ${ prefix }:
                        </span>`}
                      ${ toBlocks (true) ('[[Resolved]]') (x) }
                    </span>
                  `}
                </span>`)
             .catch ((e) => html`
                <span class="${ ContainerClasses (full_line) (_expanded) }">
                  ${ !full_line && html`
                    <span class="condensed">
                      ${ (prefix !== '') && html`
                        <span class="pp-key">
                          ${ prefix }:
                        </span>`}
                      ${ toBlocks (false) ('[[Rejected]]') (e) }
                    </span>
                  `}
                  ${ full_line && !_expanded && html`
                    <span class="collapsed" onclick="${ expandTag }">
                      ${ (prefix !== '') && html`
                        <span class="pp-key">
                          ${ prefix }:
                        </span>`}
                      ${ toBlocks (true) ('[[Rejected]]') (e) }
                    </span>
                  `}
                  ${ full_line && _expanded && html`
                    <span class="expanded" onclick="${ collapseTag }">
                      ${ (prefix !== '') && html`
                        <span class="pp-key">
                          ${ prefix }:
                        </span>`}
                      ${ toBlocks (true) ('[[Rejected]]') (e) }
                    </span>
                  `}
                </span>`),
        html`
          <span class="${ ContainerClasses (full_line) (_expanded) }">
            ${ !full_line && html`
              <span class="condensed">
                ${ (prefix !== '') && html`
                  <span class="pp-key">
                    ${ prefix }:
                  </span>`}
                [[Pending]]
              </span>`}
            ${ full_line && !_expanded && html`
              <span class="condensed" onclick="${ expandTag }">
                ${ (prefix !== '') && html`
                  <span class="pp-key">
                    ${ prefix }:
                  </span>`}
                [[Pending]]
              </span>`}
            ${ full_line && _expanded && html`
              <span class="expanded" onclick="${ collapseTag }">
                ${ (prefix !== '') && html`
                  <span class="pp-key">
                    ${ prefix }:
                  </span>`}
                [[Pending]]
              </span>`}
        `)}`)}

// Object

const HTMLObjectTag = (full_line) => (prefix) => (value) =>
  html`<e-object class="result pp-object"
                 full_line="${ full_line }"
                 value="${ value }"
                 prefix="${ prefix }">
       </e-object>`

const HTMLObject = {
  ...HTMLBaseElement ({}),
  render: noShadow (
    ({value, full_line, _expanded, _hasExpanded, prefix}) => html`
      <span class="${ ContainerClasses (full_line) (_expanded) }">
        ${ !full_line && html`
          <span class="condensed">
            ${ (prefix !== '') && html`
              <span class="pp-key">
                ${ prefix }:
              </span>`}
            Object {…}
          </span>
        `}
        ${ full_line && !_expanded && html`
          <span class="collapsed" onclick="${ expandTag }">
            <span class="pp-object-header">
              ${ (prefix !== '') && html`
                <span class="pp-key">
                  ${ prefix }:
                </span>`}
              Object {
            </span>
            ${ addIndex 
                 (map) 
                 ((k, idx) => html`
                   <span class="pp-object-property">
                     ${ toBlocks (false) (k) (value[k]) }
                     ${ idx !== (length (keys (value)) - 1) ? ',' : '' }
                   </span>`)
                 (keys (value)) }
            <span class="pp-object-footer">}</span>
          </span>
        `}
        ${ full_line && _expanded && html`
          <span class="expanded" onclick="${ collapseTag }">
            <span class="pp-object-header">
              ${ (prefix !== '') && html`
                <span class="pp-key">
                  ${ prefix }:
                </span>`}
              Object {
            </span>
            ${ map
                 ((k) => html`
                   <span class="pp-object-property">
                     ${ toBlocks (true) (k) (value[k]) }
                   </span>`)
                 (keys (value)) }
            <span class="pp-object-footer">}</span>
          </span>
        `}
      </span>
    `)}
 
export const toBlocks = (full_line) => (prefix) => (value) => 
  cond ([
    [isNil, always (HTMLUndefinedTag (full_line) (prefix))],
    [equals (true), always (HTMLBooleanTag (full_line) (prefix) (true))],
    [equals (false), always (HTMLBooleanTag (full_line) (prefix) (false))],
    [is (Number), always (HTMLNumberTag (full_line) (prefix) (value))],
    [is (String), always (HTMLStringTag (full_line) (prefix) (value))],
    [is (Array), always (HTMLArrayTag (full_line) (prefix) (value))],
    [is (Promise), always (HTMLPromiseTag (full_line) (prefix) (value))],
    // Function
    [is (Object), always (HTMLObjectTag (full_line) (prefix) (value))],
    // Regular Expression
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
