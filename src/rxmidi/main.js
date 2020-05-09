import * as rx from 'rxjs'
import * as rxo from 'rxjs/operators'
import * as R from 'ramda'

let midiAccess

// =========================== WebMidi initialization =========================
export let init = (sysex = false) => 
	navigator
		.requestMIDIAccess({ sysex: sysex })
		.then(m => midiAccess = m)

export let logPorts = () => {
	R.forEach(i => console.log(i[1].name + '  -in->'), [...midiAccess.inputs])
	R.forEach(o => console.log('-out->  ' + o[1].name), [...midiAccess.outputs])
}

// ================================ MIDI Input ================================
export let input = n => 
	R.head(
		R.pipe(
			R.filter(i => i[1].name.includes(n)),
			R.map(v => rx.fromEvent(v[1], 'midimessage').pipe(asMIDIMessage()))
		)([...midiAccess.inputs]))

// ================================ MIDI Output ===============================
let send = out => msg => 
	R.cond([[R.is(Array), l => out.send(l)],
	  	    [R.propEq('type', 'midimessage'), v => out.send(v.data, v.timestamp)],
		    [R.is(rx.Observable), o => o.subscribe(send(out))]
		   ])(msg)

export let output = n => 
	R.head(
		R.pipe(
			R.map( ([k, v]) => v ),
			R.filter( ({ name }) => name.includes(n) ),
			R.map( v => { v.open(); return v; } ),
			R.map( v => send(v) ) 
		)([...midiAccess.outputs]))

// =========================== MIDI Messages creation =========================
// Converts one MIDI Message byte array to a MIDIMessageEvent
// Delay indicates the amount of time we will to wait until
// send it (in ms).
export let msg = 
	(data, delay = 0, deltaTime = 0.0, timeStamp = performance.now()) => { 
		return { 
			type: 'midimessage', 
			timeStamp: timeStamp + delay,
			deltaTime: deltaTime, 
			data: [ ...data ]
		}}

export let copy = (mm, timeStamp = null) => 
	R.evolve({ timeStamp: v => timeStamp || v }, R.clone(mm))

// ---- MIDI Messages definition ----
// --- Channel Voice messages generation ---
export let on =	(n, v = 96, ch = 0, ...args) => msg([144 + ch, n, v], ...args)
export let off = (n, v = 96, ch = 0, ...args) => msg([128 + ch, n, v], ...args)
export let pp = (n, v = 96, ch = 0, ...args) => msg([160 + ch, n, v], ...args)
export let cc =	(c, v, ch = 0, ...args) => msg([176 + ch, c, v], ...args)
export let pc = (p, ch = 0, ...args) => msg([192 + ch, p], ...args)
export let cp = (v, ch = 0, ...args) => msg([208 + ch, v], ...args)
export let pb =	(v, ch = 0, ...args) => msg([224 + ch, v % 128, v >> 7], ...args)
export let rpn = (n, v, ...args) => rx.from([
	cc(101, n >> 7, ...args),
	cc(100, n % 128, ...args), 
	cc(6, v >> 7, ...args),
	cc(38, v % 128, ...args),
	cc(101, 127, ...args),
	cc(100, 127, ...args)
])
export let nrpn = (n, v, ...args) => rx.from([
	cc(99, n >> 7, ...args),
	cc(98, n % 128, ...args),
	cc(6, v >> 7, ...args),
	cc(38, v % 128, ...args),
	cc(101, 127, ...args),
	cc(100, 127, ...args)
])

// ---- System common messages generation ----
export let syx = (b, ...args) => msg([240, ...b, 247], ...args)
export let tc = (t, v, ...args) => msg([241, (t << 4) + v], ...args)
export let spp = (b, ...args) => msg([242, b % 128, b >> 7], ...args)
export let s = (s, delay = 0, delta = 0) => msg([243, s], ...args)
export let tun = (delay = 0, delta = 0) => msg([246], ...args)

// ---- System real time messages generation ----
export let mc = (...args) => msg([248], ...args)
export let start = (...args) => msg([250], ...args)
export let cont = (...args) => msg([251], ...args)
export let stop = (...args) => msg([252], ...args)
export let as = (...args) => msg([254], ...args)
export let rst = (...args) => msg([255], ...args)
export let panic = (...args) => {
	let panic_msgs = []
	for (let ch = 0; ch < 16; ch++) {
		panic_msgs.push(cc(64, 0, ch, ...args))
		panic_msgs.push(cc(120, 0, ch, ...args))
		panic_msgs.push(cc(123, 0, ch, ...args))
		for (let n = 0; n < 128; n++) {
			panic_msgs.push(off(n, 0, ch, ...args))
		}
	}

		return rx.from(panic_msgs)
	}

// ==== MIDI Messages predicates ====
export let isMidiMessage = d => d.type !== undefined && d.type === 'midimessage'
// ---- Channel Voice Messages ----
export let isNoteOn = d => isMidiMessage(d) && d.data[0] >> 4 === 9
export let isNoteOff = d => isMidiMessage(d) && d.data[0] >> 4 === 8
export let isNote = d => isNoteOn(d) || isNoteOff(d)
export let isPolyPressure =	d => isMidiMessage(d) && d.data[0] >> 4 === 10
export let hasNote = d => isNote(d) || isPolyPressure(d)
export let isControlChange = d => isMidiMessage(d) && d.data[0] >> 4 === 11
export let isProgramChange = d => isMidiMessage(d) && d.data[0] >> 4 === 12
export let isChannelPressure = d => isMidiMessage(d) && d.data[0] >> 4 === 13
export let isPitchBend = d => isMidiMessage(d) && d.data[0] >> 4 === 14
// ---- Channel Mode Messages ----
export let isAllSoundOff = d => isControlChange(d) && d.data[1] === 120 && d.data[2] === 0
export let isResetAll = d => isControlChange(d) && d.data[1] === 121
export let isLocalControlOff = d => isControlChange(d) && d.data[1] === 122 && d.data[2] === 0
export let isLocalControlOn = d => isControlChange(d) && d.data[1] === 122 && d.data[2] === 127
export let isAllNotesOff = d => isControlChange(d) && d.data[1] === 123 && d.data[2] === 0
export let isOmniModeOff = d => isControlChange(d) && d.data[1] === 124 && d.data[2] === 0
export let isOmniModeOn = d => isControlChange(d) && d.data[1] === 125 &&	d.data[2] === 0
export let isMonoModeOn = d => isControlChange(d) && d.data[1] === 126
export let isPolyModeOn = d => isControlChange(d) && d.data[1] === 127 && d.data[2] === 0
export let isChannelMode =
	d => isAllSoundOff(d)
		|| isResetAll(d)
		|| isLocalControlOff(d)
		|| isLocalControlOn(d)
		|| isAllNotesOff(d)
		|| isOmniModeOff(d)
		|| isOmniModeOn(d)
		|| isMonoModeOn(d)
		|| isPolyModeOn(d)
export let isChannelVoice =
	d => isNote(d)
		|| isPolyPressure(d)
		|| (isControlChange(d) && !isChannelMode(d))
		|| isProgramChange(d)
		|| isChannelPressure(d)
		|| isPitchBend(d)
export let isChannelMessage = d => isChannelMode(d) || isChannelVoice(d)
export let getChannel = (d) => isMidiMessage(d) ? d.data[0] & 0xF : 0
export let isOnChannel = (d, ch) => isChannelMessage(d) && getChannel(d) === ch
export let isOnChannels = (d, chs) => isChannelMessage(d) && chs.includes(getChannel(d))

export let isMetaEvent = (d) => d.type !== undefined && d.type === 'metaevent'

// TODO: System Common Messages and System Real-Time Messages
// ==== MIDI Message transformers ====
// ---- Channel transformation (Rx Operators) ----
// Every channel message will change its channel to ch
export let changeToChannel = (d, ch) => { d.data[0] = (d.data[0] & 0xF0) + ch; return d; }
export let toChannel = ch => rxo.map(d => isChannelMessage(d) ? changeToChannel(d, ch) : d)
// Maps every channel message with chin channel to chout channel
export let mapChannel =	(chin, chout) => rxo.map(d => isOnChannel(d, chin) ? changeToChannel(d, chout) : d)
// Maps every channel message in chin array of channels to chout array of channels
export let mapChannels = (chsin, chsout) => rxo.mergeMap(d => isOnChannels(d, chsin) ? 
														  rx.from(chsout.map(ch => changeToChannel(copy(d), ch)))
														  : rx.of(d))
export let at = (t) => rxo.map(d => { d.timeStamp = t; return d; })
export let delay = (delay) => rxo.map(d => { d.timeStamp = d.timeStamp + delay; return d; })
export let asMIDIMessage = () => rxo.map(d => copy(d))
// ---- Controller mapping ----
// TODO: Add transformation curves to values
export let mapController =
	(ccin, ccout) => rxo.map(d => {	if (isControlChange(d) && d.data[1] === ccin) d.data[1] = ccout; return d; })
// ---- Note mapping ----
export let transpose = i => rxo.map(d => { if (hasNote(d)) d.data[1] = d.data[1] + i; return d; })

//// ==== Other utilities ====
export let QNPM2BPM = (qnpm) => 60 * 1000000 / qnpm

export let midiToHzs =
	(n, tuning = 440) => ((tuning / 32) * (Math.pow(((n - 9) / 12), 2)))
