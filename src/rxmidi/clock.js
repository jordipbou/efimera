import * as rx from 'rxjs'
import * as rxo from 'rxjs/operators'
import * as R from 'ramda'

// =============================== Transport/Clock ============================
export let createTransport = (resolution = 25, look_ahead = 100) => {
	let control$ = new rx.Subject()
	let status = 'stopped'
	let bpm = 120

	let transport$ = control$.pipe(
		rxo.switchMap(msg => {
			status = msg
			if (msg === 'started') {
				return rx.timer(0, resolution).pipe(
							rxo.map(_ => [performance.now(), 'started', bpm, resolution, look_ahead])
						)
			} else {
				return rx.of([performance.now(), msg, bpm, resolution, look_ahead])
			}
		}),
		rxo.share(),
	)
	
	transport$.start = () => control$.next('started')
	transport$.pause = () => control$.next('paused')
	transport$.stop = () => control$.next('stopped')
	transport$.next = () => control$.next('next')
	transport$.nextOn = () => control$.next('nextOn')
	transport$.prev = () => control$.next('prev')
	transport$.bpm = v => { bpm = v; control$.next(status); }
	
	return transport$
}

export let MIDIClock = (time_division = 24) => 
	rx.pipe(
		rxo.scan(([last_tick_time, _], [now, st, bpm, resolution, look_ahead]) => {
			let ms_per_tick = 60000 / (bpm * time_division)
			switch (st) {
				case 'started':
					let look_ahead_end = now + look_ahead

					last_tick_time = last_tick_time || now

					let events = []
					while (last_tick_time < look_ahead_end) {
						if (last_tick_time >= now) {
							events.push(R.merge(mc(), {
								status: 'started',
								bpm: bpm,
								time_division: time_division,
								ms_per_tick: ms_per_tick,
								timeStamp: last_tick_time
							}))
						}
						last_tick_time = last_tick_time + ms_per_tick
					}

					return [last_tick_time, rx.from(events)]
				default:
					return [null, rx.of(R.merge({
											status: st,
											bpm: bpm,
											time_division: time_division,
											ms_per_tick: ms_per_tick,
											timeStamp: now
										}, mc()))]
			}
		}, [null, null]),
		rxo.map(([_, v]) => v),
		rxo.share()
	)

export let createClock = (time_division = 24, resolution = 25, look_ahead = 100) => {
	let transport$ = createTransport(resolution, look_ahead)

	let clock$ = transport$.pipe(MIDIClock(time_division))

	clock$.start = transport$.start
	clock$.pause = transport$.pause
	clock$.stop = transport$.stop
	clock$.next = transport$.next
	clock$.nextOn = transport$.nextOn
	clock$.prev = transport$.prev
	clock$.bpm = transport$.bpm

	return clock$
}

export let quantize = () => rxo.map(([e, o]) => {
	// o represents an observable from a clock
	// e should be the received event
	// MIDI Time Clock messages received from
	// clock represent the last sent clock 
	// message before receiving the event,
	// that means that, if look_ahead is big
	// enough, event timestamp will happen
	// between some ticks of received
	// MIDI Time Clock messages.
	let midi_clock = []
	o.subscribe(mc => midi_clock.push(mc))
	console.log('Event timestamp: ', e.timeStamp)
	console.log('Ticks:')
	for (let mc of midi_clock) {
		console.log(mc.timeStamp)
	}
})
