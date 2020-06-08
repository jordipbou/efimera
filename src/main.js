import App from './App.svelte';
import './main.css';
import { create } from 'rxjs-spy'

export * as RMidi from './frMIDI/main.js'
//export * as RMusic from './rmusic.js'
//export * as RMusic_Defs from './rmusic_defs.js'
//export * as LinnStrumentJS from './linnstrument.js'

export * as ramda from 'ramda'

export * as tone from 'tone'

export * as rxjs from 'rxjs'
export * as rxjs_operators from 'rxjs/operators'


//export const spy = create()
//export * as rxjs_spy from 'rxjs-spy'

export const efimera = new App({
	target: document.body,
	props: {
	}
});

// Unit tests
//import main_tests from './rxmidi/main.test.js'
//import messages_tests from './rxmidi/messages.test.js'
//import predicates_tests from './rxmidi/predicates.test.js'
//main_tests()
//messages_tests()
//predicates_tests()
