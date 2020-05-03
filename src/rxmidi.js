import { from, fromEvent, interval, merge, Observable, of, pipe } from 'rxjs'
import { concatMap, map, mapTo, mergeMap, share, take } from 'rxjs/operators'

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
											  .map( v => fromEvent(v, 'midimessage').pipe(asMIDIMessage()) )[0]

// Returns a function that receives MIDI events and sends them
// to first output that includes the argument in its name.
// That function can be subscribed directly to an observable or
// used for sending data directly to that output.
export let output = n => [...midiAccess.outputs].map( ([k, v]) => v )
												.filter( ({ name }) => name.includes(n) )
												.map( v => { v.open(); return v; } )
												.map( v => (x) => {
																if (x.type === 'midimessage') {
																	v.send(x.data, x.timeStamp)
																} else if (x.type === 'metaevent') {
																	// Do nothing with that message
																} else if ('_subscribe' in x) {
																	// An observable, subscribe to it
																	x.subscribe(y => {
																		if (y.type === 'midimessage') {
																			v.send(y.data, y.timeStamp)
																		}
																	})
																} else {
																	// Just an array of data
																	v.send(x)
																}
															})[0]

// ==== MIDI Messages creation ====
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
export let copy = 
	(mm, timeStamp = null) => { 
		return { 
			type: mm.type,
			metaType: mm.metaType,
			timeStamp: timeStamp === null ? mm.timeStamp : timeStamp, 
			deltaTime: mm.deltaTime, 
			data: mm.data instanceof Object ? [ ...mm.data ] : [ mm.data ]
		}
	}
// ---- MIDI Messages definition ----
// --- Channel Voice messages generation ---
export let on =	(n, v = 96, ch = 0, delay = 0, delta = 0) => msg([144 + ch, n, v], delay, delta)
export let off = (n, v = 96, ch = 0, delay = 0, delta = 0) => msg([128 + ch, n, v], delay, delta)
export let pp = (n, v = 96, ch = 0, delay = 0, delta = 0) => msg([160 + ch, n, v], delay, delta)
export let cc =	(c, v, ch = 0, delay = 0, delta = 0) => msg([176 + ch, c, v], delay, delta)
export let pc = (p, ch = 0, delay = 0, delta = 0) => msg([192 + ch, p], delay, delta)
export let cp = (v, ch = 0, delay = 0, delta = 0) => msg([208 + ch, v], delay, delta)
export let pb =	(v, ch = 0, delay = 0, delta = 0) => msg([224 + ch, v % 128, v >> 7], delay, delta)
export let rpn = 
	(n, v, ch = 0, delay = 0, delta = 0) => from([
		cc(101, n >> 7, ch, delay, delta),
		cc(100, n % 128, ch, delay, delta), 
		cc(6, v >> 7, ch, delay, delta),
		cc(38, v % 128, ch, delay, delta),
		cc(101, 127, ch, delay, delta),
		cc(100, 127, ch, delay, delta)
	])
export let nrpn =
	(n, v, ch = 0, delay = 0, delta = 0) => from([
		cc(99, n >> 7, ch, delay, delta),
		cc(98, n % 128, ch, delay, delta),
		cc(6, v >> 7, ch, delay, delta),
		cc(38, v % 128, ch, delay, delta),
		cc(101, 127, ch, delay, delta),
		cc(100, 127, ch, delay)
	])
// ---- System common messages generation ----
export let syx = (b, delay = 0, delta = 0) => msg([240, ...b, 247], delay, delta)
export let tc = (t, v, delay = 0, delta = 0) => msg([241, (t << 4) + v], delay, delta)
export let spp = (b, delay = 0, delta = 0) => msg([242, b % 128, b >> 7], delay, delta)
export let s = (s, delay = 0, delta = 0) => msg([243, s], delay, delta)
export let tun = (delay = 0, delta = 0) => msg([246], delay, delta)
// ---- System real time messages generation ----
// Implements a MIDI clock based on the technique explained on:
// https://www.html5rocks.com/en/tutorials/audio/scheduling/
// but, as we're working with midi, all the beats (ticks) of a
// window are sent as an observable with their correct timings.
//export let clock = 
//	(bpm, time_division = 24, resolution = 25, window = 100) => 
//		interval(resolution).pipe(
//			scan(([last_tick_time, bpm, time_division, window, observable], v) => {
//				let ms_per_tick = 60000 / (bpm * time_division)
//				let next_tick_time = last_tick_time + ms_per_tick
//				let start = performance.now()
//				let end = start + window
//				let beats = []
//				while (next_tick_time < end) {
//					beats.push(mc(0, 0, next_tick_time))
//					next_tick_time = next_tick_time + ms_per_tick
//				}
//				
//				return [next_tick_time - ms_per_tick, bpm, time_division, window, beats] //from(beats)]
//			}, [performance.now(), bpm, time_division, window, []]), //rx.never()]),
//			map(([_, __, ___, ____, b]) => b),
//			share() // Make this a HOT observable
//			//switchMap(([l, b, t, w, o]) => o)
//		)
export let clock = 
	(bpm, time_division = 24, resolution = 25, window = 100) => 
		interval(resolution).pipe(
			scan(([last_tick_time, bpm, time_division, window, observable], v) => {
				let ms_per_tick = 60000 / (bpm * time_division)
				let next_tick_time = last_tick_time + ms_per_tick
				let start = performance.now()
				let end = start + window
				let beats = []
				while (next_tick_time < end) {
					beats.push(mc(0, 0, next_tick_time))
					next_tick_time = next_tick_time + ms_per_tick
				}
				
				return [next_tick_time - ms_per_tick, bpm, time_division, window, from(beats)]
			}, [performance.now(), bpm, time_division, window, null]),
			switchMap(([l, b, t, w, o]) => o),
			share(), // Make this a HOT observable
		)


export let mc = (delay = 0, delta = 0, timeStamp = performance.now()) => msg([248], delay, delta, timeStamp)
export let start = (delay = 0, delta = 0) => msg([250], delay, delta)
export let cont = (delay = 0, delta = 0) => msg([251], delay, delta)
export let stop = (delay = 0, delta = 0) => msg([252], delay, delta)
export let as = (delay = 0, delta = 0) => msg([254], delay, delta)
export let rst = (delay = 0, delta = 0) => msg([255], delay, delta)
export let panic = 
	(delay = 0, delta = 0) => {
		let panic_msgs = []
		for (let ch = 0; ch < 16; ch++) {
			panic_msgs.push(cc(64, 0, ch, delay, delta))
			panic_msgs.push(cc(120, 0, ch, delay, delta))
			panic_msgs.push(cc(123, 0, ch, delay, delta))
			for (let n = 0; n < 128; n++) {
				panic_msgs.push(off(n, 0, ch, delay, delta))
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

export let isMetaEvent = (d) => d.type === 'metaevent'

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
export let now = () => performance.now()
export let at = (t) => map(d => { d.timeStamp = t; return d; })
export let delay = (delay) => map(d => { d.timeStamp = d.timeStamp + delay; return d; })
export let asMIDIMessage = () => map(d => copy(d))
// ---- Controller mapping ----
// TODO: Add transformation curves to values
export let mapController =
	(ccin, ccout) => map(d => {	if (isControlChange(d) && d.data[1] === ccin) d.data[1] = ccout; return d; })
// ---- Note mapping ----
export let transpose = i => map(d => { if (hasNote(d)) d.data[1] = d.data[1] + i; return d; })

//// ==== Other utilities ====
export let inject = (mm) => mergeMap(d => of(d, mm))

export let QNPM2BPM = (qnpm) => 60 * 1000000 / qnpm

export let midiToHzs =
	(n, tuning = 440) => ((tuning / 32) * (Math.pow(((n - 9) / 12), 2)))
