import App from './App.svelte';
import './main.css';

export * as Utils from './utils.js'
//export * as JSorth from './jsorth.js'
export * as RxMidi from './rxmidi.js'
//export * as RxMidi from './reactivemidi.js'
export * as LinnStrumentJS from './linnstrument.js'
export * as RxSequencer from './rxsequencer.js'
export * as Effector from 'effector'

export const efimera = new App({
	target: document.body,
	props: {
	}
});
