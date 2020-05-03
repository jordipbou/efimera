import App from './App.svelte';
import './main.css';

export * as RxMidi from './rxmidi.js'
export * as MidiFile from './midifile.js'
//export * as RxMusic from './rxmusic.js'
//export * as RxMusic_Defs from './rxmusic_defs.js'
//export * as LinnStrumentJS from './linnstrument.js'

export const efimera = new App({
	target: document.body,
	props: {
	}
});
