import { 
  always, append, cond, equals, includes, is, isNil, 
  keys, T, type 
  } from 'ramda'
import { v4 as uuidv4 } from 'uuid'

const toggle = (e) =>
  join (' ')
       (includes ('collapsed') (e.classList) ?
         append ('expanded') 
                (without ('collapsed') (e.classList))
         : append ('collapsed')  
                  (without ('expanded') (e.classList)))

const toggleOnClick = 
  `onclick="this.classList = (${ toggle })(this)"`

const HTMLUndefined = () => 
  `<div class="undefined-block"></div>`

const HTMLNumber = (n) =>
  `<span class="pp-number collapsed text-orange-700" ${toggleOnClick}>
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
  </span>`

const HTMLString = (s) =>
  `<span class="pp-string collapsed text-green-600"
         ${ toggleOnClick }>
    <span class="collapsed leading-tight h-4 w-11/12 truncate inline-block">"${s}"</span>
    <span class="expanded">"${s}"</span>
  </span>`

const HTMLArrayElement = (e) =>
  `<span>${ toHTML (e) }</span>`

const HTMLArrayElements = (a) =>
  join 
    (', ')
    (map (HTMLArrayElement) (a))

const HTMLArray = (a) =>
  `<span>
    <span class="text-blue-700">[Array]</span>
    <span class="text-red-700">[</span>
    ${ HTMLArrayElements (a) }
    <span class="text-red-700">]</span>
  </span>`

const HTMLPromise = (p) => {
  let uuid = 'U' + uuidv4()

  p.then ((value) => 
    document
      .querySelector ('#' + uuid)
      .innerHTML = `
        <span class="resolved">[[Resolved]]</span>
        <span class="value">${ toHTML (value) }</span>`
  ).catch ((error) =>
    document
      .querySelector ('#' + uuid)
      .innerHTML = `
        <span class="rejected">[[Rejected]]</span>
        <span class="error">${ toHTML (error) }</span>`
  )

  return `<span id="${ uuid }" class="pp-promise">
    <span class="pending">[[Pending]]</span>
  </span>`
}

const HTMLObjectProperty = (p, v) =>
  `<span class="block -mt-2">
    <span>${ p }</span>
    <span>:</span>
    <span>${ toHTML (v) }</span>
  </span>`

const HTMLObjectProperties = (o) =>
  join 
    ('')
    (map
      ((k) => HTMLObjectProperty (k, o[k]))
      (keys (o)))

const HTMLObject = (o) => 
  `<span class="">
    <span class="">
      <span class="text-blue-700">[Object]</span>
      <span class="test-red-700">{</span>
    </span>
    <span class="block pl-4">
      ${ HTMLObjectProperties (o) }
    </span>
    <span class="block test-red-700">}</span>
  </span>`

const HTMLBoolean = (b) =>
  `<span class="text-purple-600">${b}</span>`

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
