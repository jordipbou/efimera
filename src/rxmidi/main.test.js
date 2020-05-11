import { test } from '../testing.js'
import * as m from './main.js'
import * as rx from 'rxjs'

export let run = () => {
	test('send array to MIDI output', t => {
		m.send({ 
			send: x => t.result = x 
		})([144, 64, 96])
		t.assert(t.result).equals([144, 64, 96])
	})

	test('send midimessage to MIDI output', t => {
		m.send({ 
			send: x => t.result = x 
		})(m.on(64))
		t.assert(t.result).equals([144, 64, 96])
	})

	test('send observable to MIDI output', t => {
		m.send({
			send: x => t.result = x
		})(rx.of(m.on(64)))
		t.assert(t.result).equals([144, 64, 96])
	})

}
