// TODO: How to ensure rxjs is imported? Should it just be loaded before?

// MIDI Events coming from MIDI parser or from Web Midi will have a data field
// that mimics real MIDI communication (MIDI parser has to be postprocessed to have this).

// MIDI Event = {
//		timeStamp: ms/us,
//		deltaTime: ticks?,
//		data: [status, data1, data2]	// or other options, could be streamed
// }

// Time in MIDI
// Realtime input event -> timeStamp --> equivalent to performance.now() ms/5us accurate, from beginning of document
// MIDI File event -> deltaTime -->

// Sequences:
// - a sequence is an ordered collection of MIDI events
// - the order is given by a deltaTime? 

// For MIDI file structure we will use MIDI Parse structure:
// MIDI File {
//		formatType: number,
//		tracks: number,
//		track: [
//			{ event: [] }
//		],
//		timeDivison: number		
import { Subject, pipe, from } from 'rxjs'
import { filter, map, mergeMap } from 'rxjs/operators'

let midiAccess

// ============= WebMidi initialization ================
// Must be called from a user generated event to be able
// to use sysex functionality.
export let init = 
	(sysex = false) => 
		navigator
			.requestMIDIAccess({ sysex: sysex })
			.then(m => {
				midiAccess = m
				for (let [k, v] of m.inputs) {
					v.subject = new Subject()
					v.onmidimessage = 
						d => v.subject.next(d)
					}
				})

// ============= Input/Output ports =====================
export let logPorts =
	() => {
		console.log('--- Input ports ---')
		for (let [k, v] of midiAccess.inputs) 
			console.log(v.name)
		console.log('--- Output ports ---')
		for (let [k, v] of midiAccess.outputs) 
			console.log(v.name)
	}

export let input =
	n => {
		for (let [k, v] of midiAccess.inputs) {
			if (v.name.includes(n)) {
				return v
			}
		}
	}

export let outputByName =
	n => { for (let [k, v] of midiAccess.outputs) if (v.name.includes(n)) return v }

export let output = 
	n => {
		let o = outputByName(n)
		if (o !== undefined) o.open()
		return o
	}

export let send = (o, msg) => output(o).send(msg)

export let createKeyboard =
	(sel) => {
		let s = new Subject()
		let k = document.createElement('all-around-keyboard')
		document.querySelector(sel).appendChild(k)
		k.addEventListener('keypress', function (e) { 
			s.next({ timeStamp: performance.now(), data: on(e.index) })})
		k.addEventListener('keyrelease', function (e) { 
			s.next({ timeStamp: performance.now(), data: off(e.index) })})
		return [s, k]	
	}

// ==== MIDI Message Helpers ====
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
// TODO: System Common Messages and System Real-Time Messages
// ==== MIDI Message Utilities ====
// ---- Filtering ----
export let filterNoteOn = () => pipe(filter(isNoteOn))
export let filterNoteOff = () => pipe(filter(isNoteOff))
export let filterNote = () => pipe(filter(isNote))
export let filterPolyPressure =	() => pipe(filter(isPolyPressure))
export let filterControlChange = () => pipe(filter(isControlChange))
export let filterProgramChange = () => pipe(filter(isProgramChange))
export let filterChannelPressure = () => pipe(filter(isChannelPressure))
export let filterPitchBend = () => pipe(filter(isPitchBend))
export let filterChannelMode = () => pipe(filter(isChannelMode))
export let filterChannelVoice =	() => pipe(filter(isChannelVoice))
export let filterChannelMessage = () => pipe(filter(isChannelMessage))
// ---- Channel transformation ----
export let forceChannel =
	ch => pipe(map(d => isChannelMessage(d) ? [(d.data[0] & 0xF0) + ch, d.data[1], d.data[2]] : d))
export let mapChannel =
	(chin, chout) => pipe(map(d => {
		if (isChannelMessage(d) && (d.data[0] & 0xF) === chin) d.data[0] = (d.data[0] & 0xF0) + chout;
		return d; }))
export let mapChannels =
	(chsin, chsout) => pipe(mergeMap(d => {
		if (isChannelMessage(d) && chsin.includes(d.data[0] & 0xF)) {
			let m = []
			for (let ch of chsout) {
				let t = {
					deltaTime: d.deltaTime,
					timeStamp: d.timeStamp,
					data: [...d.data]
				}
				t.data[0] = (t.data[0] & 0xF0) + ch
				m = m.concat(t)
			}
	
			return m
		} else {
			return from([d])
		}}))
// ---- Controller mapping ----
export let mapController =
	(ccin, ccout) => pipe(map(d => {
		if (isControlChange(d) && d.data[1] === ccin) d.data[1] = ccout;
		return d; }))
// ---- Note mapping ----
export let transpose =
	i => pipe(map(d => { 
		if (hasNote(d)) d.data[1] = d.data[1] + i;
		return d; }))
// ---- MIDI Message creation ----
export let on =	(n, v = 96, ch = 0) => [144 + ch, n, v]
export let off = (n, v = 96, ch = 0) => [128 + ch, n, v]
export let pp = (n, v = 96, ch = 0) => [160 + ch, n, v]
export let cc =	(c, v, ch = 0) => [176 + ch, c, v]
export let pc = (p, ch = 0) => [192 + ch, p]
export let cp = (v, ch = 0) => [208 + ch, v]
export let pb =	(v, ch = 0) => [224 + ch, v % 128, v >> 7]
export let rpn = 
	(n, v, ch = 0) => [
		176 + ch, 101, n >> 7,
		176 + ch, 100, n % 128, 
		176 + ch, 6, v >> 7,
		176 + ch, 38, v % 128, 
		176 + ch, 101, 127,
		176 + ch, 100, 127 
	]
export let nrpn =
	(n, v, ch = 0) => [
		176 + ch, 99, n >> 7, 
		176 + ch, 98, n % 128, 
		176 + ch, 6, v >> 7, 
		176 + ch, 38, v % 128, 
		176 + ch, 101, 127,
		176 + ch, 100, 127 
	]
// ---- System common messages generation ----
export let syx = (b) => [240, ...b, ...syxend()]
export let tc = (t, v) => [241, (t << 4) + v]
export let spp = (b) => [242, b % 128, b >> 7]
export let s = (s) => [243, s]
export let tun = () => [246]
export let syxend = () => [247]
// ---- System real time messages generation ----
export let clock =
	// TODO: Send 2 beats of MIDI Timing Clock for indicated BPM (1-999)
	bpm => []
export let mc = () => [248]
export let start = () => [250]
export let cont = () => [251]
export let stop = () => [252]
export let as = () => [254]
export let rst = () => [255]
export let panic = 
	() => {
		let panic_msgs = []
		for (let ch = 0; ch < 16; ch++) {
			panic_msgs = panic_msgs.concat(cc(64, 0, ch))
			panic_msgs = panic_msgs.concat(cc(120, 0, ch))
			panic_msgs = panic_msgs.concat(cc(123, 0, ch))
			for (let n = 0; n < 128; n++) {
				panic_msgs = panic_msgs.concat(off(n, 0, ch))
			}
		}

		return panic_msgs
	}
// ==== State management ====
export let combineState = s => pipe(map(d => { d.state = { ...s }; return d }))
export let saveState =
	s => pipe(map(d => { 
		// TODO: Do this recursively	
		for (let p in s) {
			s[p] = d.state[p]
		}

		return d
	}))
// ==== Other utilities ====
export let midiToHzs =
	(n, tuning = 440) => ((tuning / 32) * (Math.pow(((n - 9) / 12), 2)))
