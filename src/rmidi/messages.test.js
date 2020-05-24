import { suite, toArray } from '../testing.js'
import * as m from './main.js'
import * as rx from 'rxjs'
import * as R from 'ramda'

export default () => {
	suite('MIDI message creation', s => {
		s.test('message creation', ctx => t => {
			t.assert(m.msg([1, 2, 3]))
				.propEq('type', 'midimessage')
				.propEq('deltaTime', 0)
				.propEq('data', [1, 2, 3])
		})

		s.test(
			'message properties modification', 
			ctx => t => {
				t.assert(m.timeStamp(53, m.on(64)))
					.propEq('timeStamp', 53)
				t.assert(m.deltaTime(12, m.on(64)))
					.propEq('deltaTime', 12)
				t.assert(m.delay(1, m.timeStamp(3, m.on(64))))
					.propEq('timeStamp', 4)
			})

		s.test('message copying', ctx => t => {
			let msg = m.on(64)
			t.assert(m.copy(msg))
				.isNotIdentical(msg)
			t.assert(m.copy(msg, 50))
				.propEq('timeStamp', 50)
		})
	})

	suite('Channel Voice Message generation', s => {
		s.test('note on', ctx => t => {
			t.assert(m.on(64))
				.propEq('type', 'midimessage')
				.propEq('data', [144, 64, 96])
			t.assert(m.on(64, 125))
				.propEq('data', [144, 64, 125])
			t.assert(m.on(64, 125, 3))
				.propEq('data', [147, 64, 125])
		})

		s.test('note off', ctx => t => {
			t.assert(m.off(64))
				.propEq('type', 'midimessage')
				.propEq('data', [128, 64, 96])
			t.assert(m.off(64, 125))
				.propEq('data', [128, 64, 125])
			t.assert(m.off(64, 125, 3))
				.propEq('data', [131, 64, 125])
		})

		s.test('poly pressure', ctx => t => {
			t.assert(m.pp(64))
				.propEq('type', 'midimessage')
				.propEq('data', [160, 64, 96])
			t.assert(m.pp(64, 125))
				.propEq('data', [160, 64, 125])
			t.assert(m.pp(64, 125, 3))
				.propEq('data', [163, 64, 125])
		})

		s.test('control change', ctx => t => {
			t.assert(m.cc(64, 32))
				.propEq('type', 'midimessage')
				.propEq('data', [176, 64, 32])
			t.assert(m.cc(64, 32, 3))
				.propEq('data', [179, 64, 32])
		})

		s.test('program change', ctx => t => {
			t.assert(m.pc(18))
				.propEq('type', 'midimessage')
				.propEq('data', [192, 18])
			t.assert(m.pc(18, 3))
				.propEq('data', [195, 18])
		})

		s.test('channel pressure', ctx => t => {
			t.assert(m.cp(96))
				.propEq('type', 'midimessage')
				.propEq('data', [208, 96])
			t.assert(m.cp(96, 3))
				.propEq('data', [211, 96])
		})

		s.test('pitch bend', ctx => t => {
			t.assert(m.pb(2327))
				.propEq('data', [224, 23, 18])
			t.assert(m.pb(2327, 3))
				.propEq('data', [227, 23, 18])
		})

		s.test('rpn', ctx => t => {
			t.assert(
				R.flatten(
					R.pluck(
						'data', 
						toArray(m.rpn(245, 1)))))
				.isEqual([
					176, 101, 1, 
					176, 100, 117, 
					176, 6, 0, 
					176, 38, 1, 
					176, 101, 127, 
					176, 100, 127])
			t.assert(
				R.flatten(
					R.pluck(
						'data', 
						toArray(m.rpn(245, 1, 3)))))
				.isEqual([
					179, 101, 1, 
					179, 100, 117, 
					179, 6, 0, 
					179, 38, 1, 
					179, 101, 127, 
					179, 100, 127])
		})

		s.test('nrpn', ctx => t => {
			t.assert(
				R.flatten(
					R.pluck(
						'data', 
						toArray(m.nrpn(245, 1)))))
				.isEqual([
					176, 99, 1, 
					176, 98, 117, 
					176, 6, 0, 
					176, 38, 1, 
					176, 101, 127, 
					176, 100, 127])
			t.assert(
				R.flatten(
					R.pluck(
						'data', 
						toArray(m.nrpn(245, 1, 3)))))
				.isEqual([
					179, 99, 1, 
					179, 98, 117, 
					179, 6, 0, 
					179, 38, 1, 
					179, 101, 127, 
					179, 100, 127])
		})
	})

	suite('System Common Message generation', s => {
		s.test('System common messages', ctx => t => {
			t.assert(m.syx([12, 48]))
				.propEq('data', [240, 12, 48, 247])
		})

		s.test('MIDI Time Code Quarter Frame', 
			ctx => t => {
				t.assert(m.tc(2, 3))
					.propEq('data', [241, 35])
			})

		s.test('Song Position Pointer', ctx => t => {
			t.assert(m.spp(12354))
				.propEq('data', [242, 66, 96])
		})

		s.test('Song Select', ctx => t => {
			t.assert(m.ss(45))
				.propEq('data', [243, 45])
		})

		s.test('Tune Request', ctx => t => {
			t.assert(m.tun()).propEq('data', [246])
		})
	})

	suite('System Real Time Message generation', s => {
		s.test('Midi Clock', ctx => t => {
			t.assert(m.mc()).propEq('data', [248])
		})

		s.test('Start', ctx => t => {
			t.assert(m.start()).propEq('data', [250])
		})

		s.test('Continue', ctx => t => {
			t.assert(m.cont()).propEq('data', [251])
		})

		s.test('Stop', ctx => t => {
			t.assert(m.stop()).propEq('data', [252])
		})

		s.test('Active Sensing', ctx => t => {
			t.assert(m.as()).propEq('data', [254])
		})

		s.test('Reset', ctx => t => {
			t.assert(m.rst()).propEq('data', [255])
		})

		s.test('Panic', ctx => t => {
			// TODO: !!
		})
	})
}
