import { Transformer } from './utils.js'

let midiAccess

export let init = 
	(sysex = false) => 
		navigator
			.requestMIDIAccess({ sysex: sysex })
			.then(m => midiAccess = m)

export let logPorts =
	() => {
		console.log('--- Input ports ---')
		midiAccess.inputs.forEach(v => console.log(v.name))
		console.log('--- Output ports ---')
		midiAccess.outputs.forEach(v => console.log(v.name))
	}

export let input =
	n => { for (let [k, v] of midiAccess.inputs) if (v.name.includes(n)) return v }

export let outputByName =
	n => { for (let [k, v] of midiAccess.outputs) if (v.name.includes(n)) return v }

export let output = 
	n => { let o = outputByName(n); if (o !== undefined) o.open(); return o }

// GUI Keyboard for testing purposes
export let createKeyboard =
	(sel) => {
		let k = document.createElement('all-around-keyboard')
		document.querySelector(sel).appendChild(k)

		let s = new Transformer()
		k.addEventListener('keypress', (e) => s.next(msg(on(e.index))))
		k.addEventListener('keyrelease', (e) => s.next(msg(off(e.index))))

		return [s, k]	
	}

// MIDI Message Events
export let msg = (d) => new MIDIMessageEvent('midimessage', { data: Uint8Array.from(d) })

export let on =	(n, v = 96, ch = 0) => [144 + ch, n, v]
export let off = (n, v = 96, ch = 0) => [128 + ch, n, v]

