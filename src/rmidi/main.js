import * as rx from 'rxjs'
import * as rxo from 'rxjs/operators'
import * as R from 'ramda'

export * from './messages.js'
export * from './predicates.js'
export * from './operators.js'
import { asMIDIMessage } from './operators.js'
export * from './getters.js'

let midiAccess

// ============ WebMidi initialization ===============
export let init = 
	(sysex = false, 
	 custom_navigator = window.navigator) =>
		custom_navigator
			.requestMIDIAccess({ sysex: sysex })
			.then(m => { 
				midiAccess = m; 
				return midiAccess; 
			})

export let logPorts = () => {
	R.forEach(
		i => console.log(i[1].name + '  -in->'), 
		[...midiAccess.inputs.entries()])
	R.forEach(
		o => console.log('-out->  ' + o[1].name), 
		[...midiAccess.outputs.entries()])
}

// ================= MIDI Input ======================
export let input = n => 
	R.head(
		R.pipe(
			R.filter(i => i[1].name.includes(n)),
			R.map(v => {
				let input = rx.fromEvent(
								v[1], 'midimessage'
							).pipe(asMIDIMessage())
				input.name = v[1].name
				input.id = v[1].id
				input.manufacturer = v[1].manufacturer
				input.version = v[1].version
				return input
			})
		)([...midiAccess.inputs.entries()]))

// ================ MIDI Output ======================
export let send = out => msg => 
	R.cond([[R.is(Array), l => out.send(l)],
	  	    [R.propEq('type', 'midimessage'), 
				v => out.send(v.data, v.timestamp)],
		    [R.is(rx.Observable), 
				o => o.subscribe(send(out))]
		   ])(msg)

export let output = n => 
	R.head(
		R.pipe(
			R.map( ([k, v]) => v ),
			R.filter( ({ name }) => name.includes(n) ),
			R.map( v => { v.open(); return v; } ),
			R.map( v => {
				let output = send(v)
				Object.defineProperty(
					output, 
					'name', 
					{ value: v.name })
				output.id = v.id
				output.manufacturer = v.manufacturer
				output.version = v.version
				return output
			}) 
		)([...midiAccess.outputs.entries()]))

//// ==== Other utilities ====
export let QNPM2BPM = (qnpm) => 60 * 1000000 / qnpm

export let midiToHzs = (n, tuning = 440) => 
	((tuning / 32) * (Math.pow(((n - 9) / 12), 2)))
