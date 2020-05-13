import { suite } from '../testing.js'
import * as m from './main.js'
import * as rx from 'rxjs'

export default () => {
	suite('initialize MIDI environment', s => {
		s.setup = ctx => {
			let inputs = new Map()
			inputs.set('INPUT1', { name: 'Port-10' })
			inputs.set('INPUT2', { name: 'Port-11' })
			let outputs = new Map()
			outputs.set('OUTPUT1', { name: 'Port-10', open: () => {} })
			outputs.set('OUTPUT2', { name: 'Port-11', open: () => {} })
			outputs.set('OUTPUT3', { name: 'Port-20', open: () => {} })

			ctx.navigator = {
				requestMIDIAccess: () => Promise.resolve({
					inputs: inputs,
					outputs: outputs
				})
			}

			ctx.midiAccess = null
		}

		s.test('init', ctx => t => {
			t.assert(m.init(false, ctx.navigator)).isPromise()
			m.init(false, ctx.navigator)
				.then(ma => ctx.midiAccess = ma)
				.then(() =>	t.assert(ctx.midiAccess).isNotNull())
		})

		s.test('input', ctx => t => {
			m.init(false, ctx.navigator)
				.then(() => {
					t.assert(m.input('Port-1'))
						.propEq('name', 'Port-10')
						.is(rx.Observable)
				})
		})

		s.test('output', ctx => t => {
			m.init(false, ctx.navigator)
				.then(() => {
					t.assert(m.output('Port-20'))
						.propEq('name', 'Port-20')
						.isFunc()
				})
		})
	})

	suite('receive from MIDI input', s => {
		// TODO
	})

	suite('send to MIDI output', s => {	
		s.setup = ctx => {
			ctx.msg = [144, 64, 96]
			ctx.output = { send: x => ctx.result = x }
		}

		s.test('send array to MIDI output', ctx => t => {
			m.send(ctx.output)(ctx.msg)
			t.assert(ctx.result).isEqual(ctx.msg)
		})

		s.test('send midimessage to MIDI output', ctx => t => {
			m.send(ctx.output)(m.on(64))
			t.assert(ctx.result).isEqual(ctx.msg)
		})

		s.test('send observable to MIDI output', ctx => t => {
			m.send(ctx.output)(rx.of(m.on(64)))
			t.assert(ctx.result).isEqual(ctx.msg)
		})
	})

	suite('MIDI output subscription', s => {
	})
}
