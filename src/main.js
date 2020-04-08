import App from './App.svelte';
import './main.css';

export * as RxMidi from './rxmidi.js'
export * as LinnStrumentJS from './linnstrument.js'
export * as RxSequencer from './rxsequencer.js'

export const efimera = new App({
	target: document.body,
	props: {
	}
});
