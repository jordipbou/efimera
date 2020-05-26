import { curry, flatten, head, is, map, prop } from 'ramda'

// =================== MIDI Message creation =======================

// Converts a byte array to a MIDIMessageEvent compatible object.

export let msg = (data, timeStamp = 0, deltaTime = 0) => 
({ 
	type: 'midimessage', 
	timeStamp: timeStamp,
	deltaTime: deltaTime,
	data: [ ...data ],
})

export let from = (msg) =>
  is (Array, msg) ?
    { 
      type: 'midimessage',
      timeStamp: head (msg).timeStamp,
      deltaTime: head (msg).deltaTime,
      data: flatten (map (prop ('data'), msg)) 
    }
    : {
        type: 'midimessage',
        timeStamp: msg.timeStamp,
        deltaTime: msg.deltaTime,
        data: [ ...msg.data ]
      }

// --------------- MIDI Message Modification Helpers ---------------

// Messages are treated as immutable, so they are cloned and
// modified later.

export let now = Symbol()

export let timeStamp = curry((t, msg) =>
({
  type: 'midimessage',
  timeStamp: t === now ? performance.now() : t,
  deltaTime: msg.deltaTime,
  data: [ ...msg.data ]
}))

export let deltaTime = curry((d, msg) =>
({
  type: 'midimessage',
  timeStamp: msg.timeStamp,
  deltaTime: d,
  data: [ ...msg.data ]
}))

export let delay = curry((t, msg) =>
({
  type: 'midimessage',
  timeStamp: msg.timeStamp + t,
  deltaTime: msg.deltaTime,
  data: [ ...msg.data ]
}))

// =================== MIDI Messages definition ====================

// -------------- Channel Voice messages generation ----------------

export let off = (n, v = 96, ch = 0) => 
  msg([128 + ch, n, v])

export let on = (n, v = 96, ch = 0) => 
  msg([144 + ch, n, v])

export let pp = (n, v = 96, ch = 0) => 
  msg([160 + ch, n, v])

export let cc = (c, v, ch = 0) => 
  msg([176 + ch, c, v])

export let pc = (p, ch = 0) => 
  msg([192 + ch, p])

export let cp = (v, ch = 0) => 
  msg([208 + ch, v])

export let pb = (v, ch = 0) => 
  msg([224 + ch, v & 0x7F, v >> 7])

export let rpn = (n, v, ch = 0) => 
  from ([
  	cc (101, n >> 7, ch),
  	cc (100, n % 128, ch), 
  	cc (6, v >> 7, ch),
  	cc (38, v % 128, ch),
  	cc (101, 127, ch),
  	cc (100, 127, ch)
  ])

export let nrpn = (n, v, ch = 0) => 
from([
	cc(99, n >> 7, ch),
	cc(98, n % 128, ch),
	cc(6, v >> 7, ch),
	cc(38, v % 128, ch),
	cc(101, 127, ch),
	cc(100, 127, ch)
])

//// ------- System common messages generation ---------

//let syx = (b) => msg([240, ...b, 247])
//let tc = (t, v) => msg([241, (t << 4) + v])
//let spp = (b) => msg([242, b % 128, b >> 7])
//let ss = (s) => msg([243, s])
//let tun = () => msg([246])
//
//export { syx, tc, spp, ss, tun }
//
//// ---- System real time messages generation ----
//let mc = () => msg([248])
//let start = () => msg([250])
//let cont = () => msg([251])
//let stop = () => msg([252])
//let as = () => msg([254])
//let rst = () => msg([255])
//let panic = () => {
//	let panic_msgs = []
//	for (let ch = 0; ch < 16; ch++) {
//		panic_msgs.push(cc(64, 0, ch))
//		panic_msgs.push(cc(120, 0, ch))
//		panic_msgs.push(cc(123, 0, ch))
//		for (let n = 0; n < 128; n++) {
//			panic_msgs.push(off(n, 0, ch))
//		}
//	}
//
//		return rx.from(panic_msgs)
//	}
//
//export { mc, start, cont, stop, as, rst, panic }
//
//
