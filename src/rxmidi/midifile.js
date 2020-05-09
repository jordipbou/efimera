import * as R from 'ramda'
import * as rx from 'rxjs'
import * as rxo from 'rxjs/operators'

import { tag } from 'rxjs-spy/operators/tag'

export let loadMidiFile =
	(sel = '#preview') => {
		let id = 'local-midi-file-browser'
		var e = document.querySelector(sel)
		e.innerHTML = e.innerHTML + '<input type="file" id="' + id + '" style="display: none">'
		let promise = 
			new Promise((s, r) => 
				MidiParser.parse(document.querySelector('#' + id), o => { 
					document.querySelector('#' + id).remove()
					// Convert data from each event to a format compatible
					// with rest of library
					for (let t of o.track) {
						for (let e of t.event) {
							e.timeStamp = 0
							if (e.type > 7 && e.type < 14) {
								if (e.data instanceof Array) {
									e.data = [(e.type << 4) + e.channel, ...e.data]
								} else {
									e.data = [(e.type << 4) + e.channel, e.data]
								}
								e.type = 'midimessage'
							} else if (e.type === 255) {
								e.type = 'metaevent'
							}
						}
					}

					return s(o)
				}))
		document.querySelector('#' + id).click()
		return promise
	}

export let withAbsoluteDeltaTimes =
	R.evolve({
		track: R.map(
			R.evolve({
				event: R.pipe(
					R.scan(([current_tick, _], v) => [current_tick + v.deltaTime, v], [0, null]),
					R.map(([tick, v]) => R.mergeLeft({ absoluteDeltaTime: tick }, v)),
					R.tail)}))})

export let mergeTracks =
	R.evolve({
		tracks: R.always(1),
		track: R.pipe(
			R.reduce((acc, v) => R.concat(acc, v.event), []),
			R.objOf('event'),
			R.append(R.__, []))})

export let sortEvents = 
    R.evolve({
		track: R.pipe(
			R.map(v => R.sort((a, b) => a.absoluteDeltaTime - b.absoluteDeltaTime, v.event)),
			R.head,
			R.objOf('event'),
			R.append(R.__, []))})

let filterIndexed = R.addIndex(R.filter)

export let filterTracks =
	(tracks, midiFile) => 
		R.evolve({
			tracks: () => tracks.length,
			track: filterIndexed((v, k) => tracks.includes(k))
		}, midiFile)

// TODO
//export let addTrack/s =

// TODO
//export let changeTimeDivision =

export let createMidiFile =
	(track, timeDivision = 24) => {
		return {
			tracks: 1,
			timeDivision: timeDivision,
			track: [{ event: track }]}}

export let createLoop =	(midiFile) => R.assoc('loop', true, midiFile)

export let createPlayer =
	(midiFile) => {
		let playable = R.pipe(
			withAbsoluteDeltaTimes,
			mergeTracks,
			sortEvents)(midiFile)

		let clock$ = createClock(playable.timeDivision)

		let player$ = clock$.pipe(
			rxo.scan(([tick, _], o) => {
				let midi_clock = []
				if (R.is(rx.Observable, o)) {
					o.subscribe(mc => midi_clock.push(mc))
				} else {
					midi_clock.push[o]
				}

				let events = R.flatten(
					R.map(
						mc => {
							let events
							switch (mc.status) {
								case 'started':
									events = R.pipe(
										R.filter(e => e.absoluteDeltaTime === tick),
										R.map(e => { e.timeStamp = mc.timeStamp; return e })
									)(playable.track[0].event)

									tick = playable.loop ? ((tick + 1) % playable.track[0].event.length) : (tick + 1)
									break;
								case 'next':
									events = R.pipe(
										R.filter(e => e.absoluteDeltaTime === tick),
										R.map(e => { e.timeStamp = mc.timeStamp; return e })
									)(playable.track[0].event)

									tick = R.head(
										R.filter(
											e => e.absoluteDeltaTime > tick, 
											playable.track[0].event)).absoluteDeltaTime

									break;
								case 'prev':
									events = R.pipe(
										R.filter(e => e.absoluteDeltaTime === tick),
										R.map(e => { e.timeStamp = mc.timeStamp; return e })
									)(playable.track[0].event)

									tick = R.last(
										R.filter(
											e => e.absoluteDeltaTime < tick, 
											playable.track[0].event)).absoluteDeltaTime

									events = []
									break
								case 'paused':
									events = panic()	// TODO: Change this to instrument state

									tick = tick + 1

									break
								default:
									events = panic()	// TODO: Change this to instrument state

									tick = 0

									break
							}

							return events
						},
						midi_clock)
					)

				return [tick, rx.from(events)]
			}, [0, null]),
			tag('player-out'),
			rxo.switchMap(([t, events]) => events)
		)

		player$.start = clock$.start
		player$.pause = clock$.pause
		player$.stop = clock$.stop
		player$.next = clock$.next
		player$.prev = clock$.prev

		return player$
	}
