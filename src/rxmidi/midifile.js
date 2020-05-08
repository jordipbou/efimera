import * as R from 'ramda'
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

export let createMidiFile =
	(track, timeDivision = 24) => {
		return {
			tracks: 1,
			timeDivision: timeDivision,
			track: [{ event: track }]}}

export let createLoop =	(midiFile) => R.assoc('loop', true, midiFile)

export let createPlayer =
	(midiFile, transport$) => {
		let playable = R.pipe(
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
			rxo.map( ([[n, resolution, look_ahead, bpm, status], loop]) => [n, look_ahead, bpm, status] ),
			rxo.scan ( ([last_tick_time, last_tick, last_event, _], [n, look_ahead, bpm, status]) => {
				// TODO:
				// last event podría eliminarse si se tiene en cuenta que se envían
				// todos los eventos para un tick de golpe.
				// Lo introduje por si aparecía un cambio de tempo -entre- un grupo
				// de eventos del mismo delta time, pero básicamente lo que hay que
				// hacer es enviarlos todos y en último lugar el cambio de tempo.
				// Nunca se dará el caso que se envíe solo un grupo de mismo 
				// absoluteDeltaTime a medias !!
				// TODO:
				// Más o menos igual pasa con loop, ya que si se han acabado los
				// eventos, el inicio está a un tick de distancia (o en el tick 0), no hace falta
				// enviar ninguna señal, simplemente el acumulador last_tick se pone a 0 ó
				// si last_tick es igual al mayor absoluteDeltaTime y loop es true
				// entonces se vuelve a empezar. Joder que sencillo !!!
				// TODO:
				// Entiendo que todo esto pasaba por el uso de las ventanas, pero
				// si lo paso a utilizar con MIDI Clock (vienen con sus timestamps)
				// entonces puedo trabajar el fichero midi a nivel de ticks, no de
				// ventanas, y será mucho más sencillo.
				// El problema del MIDI clock es que pierdo el status (tal como lo he
				// hecho ahora), aunque lo podría añadir como propiedad en el evento
				// mc (MIDI Clock), boníssim !!!
				if (status === 'next' && last_event !== last(track)) {
					return R.head(R.map(
						l => [
							performance.now(), 
							R.head(l) ? R.head(l).absoluteDeltaTime : 0, 
							R.indexOf(R.last(l)), 
							rx.from(l)
						],
						R.pipe(
							R.filter(e => e.absoluteDeltaTime > last_tick),
							R.groupWith((a, b) => a.absoluteDeltaTime === b.absoluteDeltaTime),
							R.take(1)
						)(track)))
				}

				if (status === 'prev' && last_event !== 0) {
					return R.head(R.map(
						l => [
							performance.now(),
							R.head(l) ? R.head(l).absoluteDeltaTime : 0,
							R.indexOf(R.last(l)),
							rx.from(l)
						],
						R.pipe(
							R.filter(e => e.absoluteDeltaTime < last_tick),
							R.groupWith((a, b) => a.absoluteDeltaTime === b.absoluteDeltaTime),
							R.take(1)
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
			
				let look_ahead_events = R.pipe(
					R.drop(last_event),
					R.filter(e => e.absoluteDeltaTime >= last_tick
							 && e.absoluteDeltaTime <= new_last_tick),
					R.map(e => {
						e.timeStamp = last_tick_time + (e.absoluteDeltaTime - last_tick)*ms_per_tick
						return e
					})
				)(track)

				let new_last_event = last_event + R.length(look_ahead_events)

				let tempo_change_idx = R.findIndex(e => e.metaType !== undefined && e.metaType === 81, look_ahead_events)
				if (tempo_change_idx !== -1) {
					let tempo_change = look_ahead_events[tempo_change_idx]
					look_ahead_events = R.take(tempo_change_idx, look_ahead_events)
					transport$.bpm(60000000 / tempo_change.data)
					new_last_tick = tempo_change.absoluteDeltaTime
					new_last_tick_time = last_tick_time + (new_last_tick - last_tick)*ms_per_tick
					new_last_event = last_event + R.length(look_ahead_events) + 1
				} 

				if (loop && last(look_ahead_events) === last(track)) {
					loop$.next(true)
					new_last_tick = 0
					new_last_tick_time = last_tick_time + (last(look_ahead_events).absoluteDeltaTime - last_tick)*ms_per_tick
					new_last_event = 0
				}

				return [new_last_tick_time, new_last_tick, new_last_event, rx.from(look_ahead_events)]
			}, [null, 0, 0, null] ),
			rxo.switchMap( ([a, b, c, events]) => events ),
		)

		return player
	}

