// TODO: MidiParserJs adds type and metaType properties
// to a MIDI Message object, maybe they're interesting
// for debugging purposes?

import { from, fromEvent, Observable, of } from 'rxjs'
import { map, mergeMap } from 'rxjs/operators'

let midiAccess

// ============= WebMidi initialization ================
export let init = 
	(sysex = false) => 
		navigator
			.requestMIDIAccess({ sysex: sysex })
			.then(m => midiAccess = m)

// ============= Input/Output ports =====================
export let logPorts =
	() => {
		console.log('--- Input ports ---')
		midiAccess.inputs.forEach(v => console.log(v.name))
		console.log('--- Output ports ---')
		midiAccess.outputs.forEach(v => console.log(v.name))
	}

// Returns an observable that receives MIDI events from first
// input that includes the argument in its name
export let input = n => [...midiAccess.inputs].map( ([k, v]) => v )
											  .filter( ({ name }) => name.includes(n) )
											  .map( v => fromEvent(v, 'midimessage') )[0]

// Returns a function that receives MIDI events and sends them
// to first output that includes the argument in its name.
// That function can be subscribed directly to an observable or
// used for sending data directly to that output.
export let output = n => [...midiAccess.outputs].map( ([k, v]) => v )
												.filter( ({ name }) => name.includes(n) )
												.map( v => { v.open(); return v; } )
												.map( v => (x) => {
																if (x.type === 'midimessage') {
																	v.send(x.data)
																} else if (x instanceof Observable) {
																	x.subscribe(y => v.send(y.data))
																} else {
																	// Just an array of data
																	v.send(x)
																}
															})[0]

// ==== MIDI Messages creation ====
// Converts one MIDI Message byte array to a MIDIMessageEvent
export let msg = 
	data => { return { type: 'midimessage', timeStamp: performance.now(), deltaTime: 0.0, data: [ ...data ]}}
export let copy = 
	mm => { return { type: 'midimessage', timeStamp: mm.timeStamp, deltaTime: mm.deltaTime, data: [ ...mm.data ]}}
// ---- MIDI Messages definition ----
// --- Channel Voice messages generation ---
export let on =	(n, v = 96, ch = 0) => msg([144 + ch, n, v])
export let off = (n, v = 96, ch = 0) => msg([128 + ch, n, v])
export let pp = (n, v = 96, ch = 0) => msg([160 + ch, n, v])
export let cc =	(c, v, ch = 0) => msg([176 + ch, c, v])
export let pc = (p, ch = 0) => msg([192 + ch, p])
export let cp = (v, ch = 0) => msg([208 + ch, v])
export let pb =	(v, ch = 0) => msg([224 + ch, v % 128, v >> 7])
export let rpn = 
	(n, v, ch = 0) => from([
		cc(101, n >> 7, ch),
		cc(100, n % 128, ch), 
		cc(6, v >> 7, ch),
		cc(38, v % 128, ch),
		cc(101, 127, ch),
		cc(100, 127, ch)
	])
export let nrpn =
	(n, v, ch = 0) => from([
		cc(99, n >> 7, ch),
		cc(98, n % 128, ch),
		cc(6, v >> 7, ch),
		cc(38, v % 128, ch),
		cc(101, 127, ch),
		cc(100, 127, ch)
	])
// ---- System common messages generation ----
export let syx = (b) => msg([240, ...b, 247])
export let tc = (t, v) => msg([241, (t << 4) + v])
export let spp = (b) => msg([242, b % 128, b >> 7])
export let s = (s) => msg([243, s])
export let tun = () => msg([246])
// ---- System real time messages generation ----
export let clock =
	// TODO: Send 2 beats of MIDI Timing Clock for indicated BPM (1-999)
	bpm => []
export let mc = () => msg([248])
export let start = () => msg([250])
export let cont = () => msg([251])
export let stop = () => msg([252])
export let as = () => msg([254])
export let rst = () => msg([255])
export let panic = 
	() => {
		let panic_msgs = []
		for (let ch = 0; ch < 16; ch++) {
			panic_msgs.push(cc(64, 0, ch))
			panic_msgs.push(cc(120, 0, ch))
			panic_msgs.push(cc(123, 0, ch))
			for (let n = 0; n < 128; n++) {
				panic_msgs.push(off(n, 0, ch))
			}
		}

		return from(panic_msgs)
	}

// ==== MIDI Messages predicates ====
// ---- Channel Voice Messages ----
export let isNoteOn = d => d.data[0] >> 4 === 9
export let isNoteOff = d => d.data[0] >> 4 === 8
export let isNote = d => isNoteOn(d) || isNoteOff(d)
export let isPolyPressure =	d => d.data[0] >> 4 === 10
export let hasNote = d => isNote(d) || isPolyPressure(d)
export let isControlChange = d => d.data[0] >> 4 === 11
export let isProgramChange = d => d.data[0] >> 4 === 12
export let isChannelPressure = d => d.data[0] >> 4 === 13
export let isPitchBend = d => d.data[0] >> 4 === 14
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
export let getChannel = (d) => d.data[0] & 0xF
export let isOnChannel = (d, ch) => isChannelMessage(d) && getChannel(d) === ch
export let isOnChannels = (d, chs) => isChannelMessage(d) && chs.includes(getChannel(d))
// TODO: System Common Messages and System Real-Time Messages
// ==== MIDI Message transformers ====
// ---- Channel transformation (Rx Operators) ----
// Every channel message will change its channel to ch
export let changeToChannel = (d, ch) => { d.data[0] = (d.data[0] & 0xF0) + ch; return d; }
export let toChannel = ch => map(d => isChannelMessage(d) ? changeToChannel(d, ch) : d)
// Maps every channel message with chin channel to chout channel
export let mapChannel =	(chin, chout) => map(d => isOnChannel(d, chin) ? changeToChannel(d, chout) : d)
// Maps every channel message in chin array of channels to chout array of channels
export let mapChannels = (chsin, chsout) => mergeMap(d => isOnChannels(d, chsin) ? 
														  from(chsout.map(ch => changeToChannel(copy(d), ch)))
														  : of(d))
// ---- Controller mapping ----
// TODO: Add transformation curves to values
export let mapController =
	(ccin, ccout) => map(d => {	if (isControlChange(d) && d.data[1] === ccin) d.data[1] = ccout; return d; })
// ---- Note mapping ----
export let transpose = i => map(d => { if (hasNote(d)) d.data[1] = d.data[1] + i; return d; })

//// ==== Other utilities ====
export let midiToHzs =
	(n, tuning = 440) => ((tuning / 32) * (Math.pow(((n - 9) / 12), 2)))

export let loadMidiFile =
	(sel = '#preview') => {
		let id = 'local-midi-file-browser'
		var e = document.querySelector(sel)
		e.innerHTML = e.innerHTML + '<input type="file" id="' + id + '" style="display: none">'
		let promise = 
			new Promise((s, r) => 
				MidiParser.parse(document.querySelector('#' + id), o => { 
					document.querySelector('#' + id).remove()
					return s(o)
				}))
		document.querySelector('#' + id).click()
		return promise
	}
