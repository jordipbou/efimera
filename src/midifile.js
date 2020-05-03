import { 
	__, always, append, concat, drop, evolve, filter, findIndex, flatten, head, init, 
	last, length, map, mergeLeft, objOf, pipe, prop, reduce, repeat,
	scan, sort, tail, take, takeWhile 
} from 'ramda'
import * as rx from 'rxjs'
import * as rxo from 'rxjs/operators'

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

// TODO: First, calculate absolute delta times...
// ...then, merge tracks (adding track:n to each event?)...
// ...then, sort by absolute delta times...
// ...then, recalculate delta times (for consistency)
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

// TODO: Add argument to select what tracks should be played ?
// TODO: What if I want to add filters or something after being played ? (like not program change)
export let playMidi =
	(midiFile, out, bpm = 120, resolution = 25, look_ahead = 100) => {
		let playable = pipe(
			withAbsoluteDeltaTimes,
			mergeTracks,
			sortEvents)(midiFile)
			
		let track = playable.track[0].event
		let time_division = playable.timeDivision

		let bpm$ = new rx.BehaviorSubject(bpm).pipe(rxo.observeOn(rx.asyncScheduler))
		let player = rx.combineLatest(
			rx.interval(resolution),
			bpm$
		).pipe(
			rxo.map( ([_, bpm]) => bpm),
			rxo.scan( ([last_tick_time, last_tick, last_event, _], bpm) => {
				let ms_per_tick = 60000 / (bpm * time_division)
				let look_ahead_end = performance.now() + look_ahead
				let new_last_tick_time = last_tick_time
				let new_last_tick = last_tick
				while (new_last_tick_time < look_ahead_end) {
					new_last_tick_time = new_last_tick_time + ms_per_tick
					new_last_tick = new_last_tick + 1
				}

				// Now, we need all the events with an absoluteDeltaTime between
				// [last_tick_time, new_last_tick_time] both included as there
				// could be some events not sent on last_tick_time because
				// of a tempo change.
				// In any case, last_event will ensure no repeated events will
				// be sent.
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
					bpm$.next(60000000 / tempo_change.data)
					new_last_tick = tempo_change.absoluteDeltaTime
					new_last_tick_time = last_tick_time + (new_last_tick - last_tick)*ms_per_tick
					new_last_event = last_event + length(look_ahead_events) + 1
				} 

				return [new_last_tick_time, new_last_tick, new_last_event, from(look_ahead_events)]
			}, [performance.now(), 0, 0, null]),
			rxo.mergeMap(([a, b, c, events]) => events),
		)

		return player
	}
