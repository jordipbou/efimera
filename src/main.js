import App from './App.svelte';
import './main.css';
import { create } from 'rxjs-spy'

export * as RxMidi from './rxmidi/main.js'
export * as RxMidiClock from './rxmidi/clock.js'
export * as RxMidiFile from './rxmidi/midifile.js'
export * as RxMusic from './rxmusic.js'
export * as RxMusic_Defs from './rxmusic_defs.js'
//export * as LinnStrumentJS from './linnstrument.js'

export * as ramda from 'ramda'
export * as rxjs from 'rxjs'
export * as rxjs_operators from 'rxjs/operators'

export const spy = create()
export * as rxjs_spy from 'rxjs-spy'

export const efimera = new App({
	target: document.body,
	props: {
	}
});

// Unit tests
import { run } from './rxmidi/main.test.js'
run()
