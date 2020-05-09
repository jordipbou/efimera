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
	transport$.prev = () => control$.next('prev')
	transport$.bpm = v => { bpm = v; control$.next(status); }
	
	return transport$
}

export let MIDIClock = (time_division = 24) => 
	rx.pipe(
		rxo.scan(([last_tick_time, _], [now, st, bpm, resolution, look_ahead]) => {
			switch (st) {
				case 'started':
					last_tick_time = last_tick_time || now

					let ms_per_tick = 60000 / (bpm * time_division)
					let look_ahead_end = now + look_ahead

					let events = []
					while (last_tick_time < look_ahead_end) {
						last_tick_time = last_tick_time + ms_per_tick
						if (last_tick_time > now) {
							events.push(R.assoc('status', 'started', mc(0, 0, last_tick_time)))
						}
					}

					return [last_tick_time, rx.from(events)]
				default:
					return [null, rx.of(R.assoc('status', st, mc(0, 0, now)))]
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
	clock$.bpm = transport$.bpm

	return clock$
}


