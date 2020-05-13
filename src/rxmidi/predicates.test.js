import { suite } from '../testing.js'
import * as m from './main.js'

export default () => {
	suite('RxMIDI Predicates', s => {
		s.test('isNoteOn', ctx => t => {
			t.assert(m.isNoteOn(m.off(64))).isFalse()
			t.assert(m.isNoteOn(m.on(64))).isTrue()
		})

		s.test('isNoteOff', ctx => t => {
			t.assert(m.isNoteOff(m.on(64))).isFalse()
			t.assert(m.isNoteOff(m.off(64))).isTrue()
		})

		s.test('isNote', ctx => t => {
			t.assert(m.isNote(m.cc(32, 12))).isFalse()
			t.assert(m.isNote(m.on(64))).isTrue()
			t.assert(m.isNote(m.off(64))).isTrue()
		})

		s.test('isPolyPressure', ctx => t => {
			t.assert(m.isPolyPressure(m.on(64)))
				.isFalse()
			t.assert(m.isPolyPressure(m.pp(64)))
				.isTrue()
		})

		s.test('hasNote', ctx => t => {
			t.assert(m.hasNote(m.cc(32, 14))).isFalse()
			t.assert(m.hasNote(m.on(64))).isTrue()
			t.assert(m.hasNote(m.off(64))).isTrue()
			t.assert(m.hasNote(m.pp(64))).isTrue()
		})

		s.test('isControlChange', ctx => t => {
			t.assert(m.isControlChange(m.on(64)))
				.isFalse()
			t.assert(m.isControlChange(m.cc(32, 18)))
				.isTrue()
		})

		s.test('isProgramChange', ctx => t => {
			t.assert(m.isProgramChange(m.on(64)))
				.isFalse()
			t.assert(m.isProgramChange(m.pc(18)))
				.isTrue()
		})

		s.test('isChannelPressure', ctx => t => {
			t.assert(m.isChannelPressure(m.on(64)))
				.isFalse()
			t.assert(m.isChannelPressure(m.cp(64)))
				.isTrue()
		})

		s.test('isPitchBend', ctx => t => {
			t.assert(m.isPitchBend(m.on(64))).isFalse()
			t.assert(m.isPitchBend(m.pb(64))).isTrue()
		})
	})
}
