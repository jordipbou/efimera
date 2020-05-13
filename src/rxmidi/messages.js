import * as rx from 'rxjs'
import * as R from 'ramda'

// ============ MIDI Messages creation ===============
// Converts a byte array to a MIDIMessageEvent 
// compatible object.
export let msg = 
	(data) => { return { 
		type: 'midimessage', 
		timeStamp: performance.now(),
		deltaTime: 0, 
		data: [ ...data ],
	}}

// Functions for MIDI Message property modification
export let timeStamp = (t, msg) =>
	R.evolve({
		timeStamp: R.always(t)
	}, msg)

export let deltaTime = (d, msg) =>
	R.evolve({
		deltaTime: R.always(d)
	}, msg)

export let delay = (t, msg) =>
	R.evolve({
		timeStamp: R.add(t)
	}, msg)

export let copy = (mm, timeStamp = null) => 
	R.evolve({ 
		timeStamp: v => timeStamp || v 
	}, R.clone(mm))

// =========== MIDI Messages definition ==============
// ------- Channel Voice messages generation ---------
let on = (n, v = 96, ch = 0) => msg([144 + ch, n, v])
let off = (n, v = 96, ch = 0) => msg([128 + ch, n, v])
let pp = (n, v = 96, ch = 0) => msg([160 + ch, n, v])
let cc = (c, v, ch = 0) => msg([176 + ch, c, v])
let pc = (p, ch = 0) => msg([192 + ch, p])
let cp = (v, ch = 0) => msg([208 + ch, v])
let pb = (v, ch = 0) => msg([224 + ch, v % 128, v >> 7])
let rpn = (n, v, ch = 0) => rx.from([
	cc(101, n >> 7, ch),
	cc(100, n % 128, ch), 
	cc(6, v >> 7, ch),
	cc(38, v % 128, ch),
	cc(101, 127, ch),
	cc(100, 127, ch)
])
let nrpn = (n, v, ch = 0) => rx.from([
	cc(99, n >> 7, ch),
	cc(98, n % 128, ch),
	cc(6, v >> 7, ch),
	cc(38, v % 128, ch),
	cc(101, 127, ch),
	cc(100, 127, ch)
])

export { on, off, pp, cc, pc, cp, pb, rpn, nrpn }

// ------- System common messages generation ---------
let syx = (b) => msg([240, ...b, 247])
let tc = (t, v) => msg([241, (t << 4) + v])
let spp = (b) => msg([242, b % 128, b >> 7])
let s = (s) => msg([243, s])
let tun = () => msg([246])

export { syx, tc, spp, s, tun }

// ---- System real time messages generation ----
let mc = () => msg([248])
let start = () => msg([250])
let cont = () => msg([251])
let stop = () => msg([252])
let as = () => msg([254])
let rst = () => msg([255])
let panic = () => {
	let panic_msgs = []
	for (let ch = 0; ch < 16; ch++) {
		panic_msgs.push(cc(64, 0, ch))
		panic_msgs.push(cc(120, 0, ch))
		panic_msgs.push(cc(123, 0, ch))
		for (let n = 0; n < 128; n++) {
			panic_msgs.push(off(n, 0, ch))
		}
	}

		return rx.from(panic_msgs)
	}

export { mc, start, cont, stop, as, rst, panic }


