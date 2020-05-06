import { 
	__, addIndex, always, append, assoc, concat, drop, evolve, filter, findIndex, flatten, groupWith,
	head, init, indexOf, last, length, map, mergeLeft, objOf, pipe, prop, reduce, repeat,
	scan, sort, tail, take, takeWhile 
} from 'ramda'
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
	evolve({
		track: map(
			evolve({
				event: pipe(
					scan(([current_tick, _], v) => [current_tick + v.deltaTime, v], [0, null]),
					map(([tick, v]) => mergeLeft({ absoluteDeltaTime: tick }, v)),
					tail)}))})

export let mergeTracks =
	evolve({
		tracks: always(1),
		track: pipe(
			reduce((acc, v) => concat(acc, v.event), []),
			objOf('event'),
			append(__, []))})

export let sortEvents = 
    evolve({
		track: pipe(
			map(v => sort((a, b) => a.absoluteDeltaTime - b.absoluteDeltaTime, v.event)),
			head,
			objOf('event'),
			append(__, []))})

let filterIndexed = addIndex(filter)

export let filterTracks =
	(tracks, midiFile) => 
		evolve({
			tracks: () => tracks.length,
			track: filterIndexed((v, k) => tracks.includes(k))
		}, midiFile)

// TODO
//export let addTrack/s =

export let createMidiFile =
	(track, timeDivision = 24) => {
		return {
			tracks: 1,
			timeDivision: timeDivision,
			track: [{ event: track }]}}

export let createLoop =	(midiFile) => assoc('loop', true, midiFile)

export let createTransport = (resolution = 25, look_ahead = 100) => {
	let bpm$ = new rx.BehaviorSubject(120).pipe(rxo.observeOn(rx.asyncScheduler))
	
	let start$ = new rx.Subject()
	let pause$ = new rx.Subject()
	let stop$ = new rx.Subject()
	let status$ = new rx.BehaviorSubject('stopped')
	
	let clock$ = start$.pipe(
		tag('clock'),
		rxo.switchMap( () => rx.timer(0, resolution) ),
		rxo.takeUntil(pause$),
		rxo.startWith(-1),
		rxo.repeat(),
		rxo.scan( (a, v) => a + 1, -1 ),
		rxo.takeUntil(stop$),
		rxo.repeat(),
	)
	
	let transport$ = rx.combineLatest(
		clock$,
		bpm$,
		status$
	).pipe(
		tag('transport'),
		rxo.map( ([n, bpm, status]) => [n, resolution, look_ahead, bpm, status] )
	)
	
	transport$.start = () => { status$.next('playing'); start$.next(); }
	transport$.pause = () => { status$.next('paused'); pause$.next(); }
	transport$.stop = () => { status$.next('stopped'); stop$.next(); }
	transport$.next = () => { status$.next('next'); }
	transport$.prev = () => { status$.next('prev'); }
	transport$.bpm = v => bpm$.next(v)
	
	return transport$
}

// TODO: Add the option of sending "just advance" to the player
// to be able of jumping from deltaTime to deltaTime without having
// a transport, that way, I will have a sequencer (for organ combinations)
// directly accessible!!
export let createPlayer =
	(midiFile, transport$) => {
		let playable = pipe(
			withAbsoluteDeltaTimes,
			mergeTracks,
			sortEvents)(midiFile)
			
		let track = playable.track[0].event
		let time_division = playable.timeDivision

		let loop = playable.loop !== undefined && playable.loop === true
		let loop$ = new rx.BehaviorSubject(true).pipe(rxo.observeOn(rx.asyncScheduler))

		let player = rx.combineLatest(
			transport$,
			loop$
		).pipe(
			tag('player-merge'),
			rxo.map( ([[n, resolution, look_ahead, bpm, status], loop]) => [n, look_ahead, bpm, status] ),
			rxo.scan ( ([last_tick_time, last_tick, last_event, _], [n, look_ahead, bpm, status]) => {
				if (status === 'next' && last_event !== last(track)) {
					return head(map(
						l => [
							performance.now(), 
							head(l) ? head(l).absoluteDeltaTime : 0, 
							indexOf(last(l)), 
							rx.from(l)
						],
						pipe(
							filter(e => e.absoluteDeltaTime > last_tick),
							groupWith((a, b) => a.absoluteDeltaTime === b.absoluteDeltaTime),
							take(1)
						)(track)))
				}

				if (status === 'prev' && last_event !== 0) {
					return head(map(
						l => [
							performance.now(),
							head(l) ? head(l).absoluteDeltaTime : 0,
							indexOf(last(l)),
							rx.from(l)
						],
						pipe(
							filter(e => e.absoluteDeltaTime < last_tick),
							groupWith((a, b) => a.absoluteDeltaTime === b.absoluteDeltaTime),
							take(1)
						)(track)))
				}

				if (status === 'stopped' || status === 'paused') {
					// TODO: Note Off to previously started notes (or panic?)
					return [last_tick_time, last_tick, last_event, panic()]
				}

				if (n === 0) {
					// Restart if transport restarts
					last_tick_time = performance.now()
					last_tick = 0
					last_event = 0
				} else {
					last_tick_time = last_tick_time === null ? performance.now() : last_tick_time
				}

				let ms_per_tick = 60000 / (bpm * time_division)
				let look_ahead_end = performance.now() + look_ahead
				let new_last_tick_time = last_tick_time
				let new_last_tick = last_tick
				while (new_last_tick_time < look_ahead_end) {
					new_last_tick_time = new_last_tick_time + ms_per_tick
					new_last_tick = new_last_tick + 1
				}
			
				let look_ahead_events = pipe(
					drop(last_event),
					filter(e => e.absoluteDeltaTime >= last_tick
							 && e.absoluteDeltaTime <= new_last_tick),
					map(e => {
						e.timeStamp = last_tick_time + (e.absoluteDeltaTime - last_tick)*ms_per_tick
						return e
					})
				)(track)

				let new_last_event = last_event + length(look_ahead_events)

				let tempo_change_idx = findIndex(e => e.metaType !== undefined && e.metaType === 81, look_ahead_events)
				if (tempo_change_idx !== -1) {
					let tempo_change = look_ahead_events[tempo_change_idx]
					look_ahead_events = take(tempo_change_idx, look_ahead_events)
					transport$.bpm(60000000 / tempo_change.data)
					new_last_tick = tempo_change.absoluteDeltaTime
					new_last_tick_time = last_tick_time + (new_last_tick - last_tick)*ms_per_tick
					new_last_event = last_event + length(look_ahead_events) + 1
				} 

				if (loop && last(look_ahead_events) === last(track)) {
					loop$.next(true)
					new_last_tick = 0
					new_last_tick_time = last_tick_time + (last(look_ahead_events).absoluteDeltaTime - last_tick)*ms_per_tick
					new_last_event = 0
				}

				return [new_last_tick_time, new_last_tick, new_last_event, rx.from(look_ahead_events)]
			}, [null, 0, 0, null] ),
			tag('aft-player'),
			rxo.switchMap( ([a, b, c, events]) => events ),
		)

		return player
	}

