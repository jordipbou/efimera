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
//export let addTrack/s = (midiFile, tracks) => 

// TODO
//export let changeTimeDivision = (midiFile, newTimeDivision) =>

// TODO
// export let commonTimeDivision = (midiFile1, midiFile2, ...) => 

export let createMidiFile =
	(track, timeDivision = 24) => {
		return {
			tracks: 1,
			timeDivision: timeDivision,
			track: [{ event: track }]}}

export let createLoop =	(midiFile) => R.assoc('loop', true, midiFile)

// TODO: Implement nextOn on getCurrectTickEvents and getNextTick to
// retrieve next events until a note on appears (to implement something
// like TouchPiano with any midi file)
let getCurrentTickEvents = (status, track, timeStamp, tick, maxTick, loop) => {
	if (status === 'paused' || status === 'stopped') {
		return []
	} else {
		return R.pipe(
			R.filter(e => e.absoluteDeltaTime === tick || (loop ? (e.absoluteDeltaTime === (tick % maxTick)) : false)),
			R.map(e => { e.timeStamp = timeStamp; return e; })
		)(track)
	}
}

let getNextTick = (status, track, tick, maxTick, loop) => {
	switch (status) {
	case 'stopped': return 0
	case 'paused': return tick = tick + 1
	case 'started': 
		return (loop && (tick + 1 > maxTick)) ? (tick + 1) % maxTick : tick + 1
	case 'next':
	case 'nextOn':
		let next_events = R.filter(e => e.absoluteDeltaTime > tick)(track)
		if (loop && next_events.length === 0) {
			next_events = R.filter(e => e.absoluteDeltaTime > 0)(track)
		}
		return next_events.length > 0 ? R.head(next_events).absoluteDeltaTime : (maxTick + 1)
	case 'prev':
		let prev_events = R.filter(e => e.absoluteDeltaTime < tick)(track)
		if (loop && prev_events.length === 0) {
			prev_events = R.filter(e => e.absoluteDeltaTime < maxTick)(track)
		}
		return prev_events.length > 0 ? R.last(prev_events).absoluteDeltaTime : -1
	default: return tick
	}
}

let updateSoundingNotes = (status, events, soundingNotes) => {
	if (status === 'paused' || status === 'stopped') {
		let off_events = R.map(e => off(getNote(e), getVelocity(e), getChannel(e)), soundingNotes)

	} else {
		return events
	}
}

export let MIDIPlayer = (midiFile) => {
	let playable = R.pipe(
		withAbsoluteDeltaTimes,
		mergeTracks,
		sortEvents)(midiFile)

	let track = playable.track[0].event
	let loop = playable.loop
	let maxTick = R.last(track).absoluteDeltaTime

	let soundingNotes = []

	return rx.pipe(
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
						let events = []
						do {
							events = R.concat(
								events,
								getCurrentTickEvents(mc.status, track, mc.timeStamp, tick, maxTick, loop))
							//soundingNotes = updateSoundingNotes(mc.status, events, soundingNotes)
							tick = getNextTick(mc.status, track, tick, maxTick, loop)
						} while(mc.status === 'nextOn' && R.length(R.filter(e => actsAsNoteOn(e), events)) === 0)

						return events
					},
					midi_clock)
				)

			return [tick, rx.from(events)]
		}, [0, null]),
		rxo.switchMap(([t, events]) => events)
	)
}

export let tempoChangeListener = (transport$) =>
	rxo.tap(v => { if (v.type === 'metaevent' && v.metaType === 81) { transport$.bpm(60000000 / v.data) } })

export let createPlayer =
	(midiFile) => {
		let clock$ = createClock(midiFile.timeDivision)

		let player$ = clock$.pipe(
			MIDIPlayer(midiFile),
			tempoChangeListener(clock$)
		)

		player$.start = clock$.start
		player$.pause = clock$.pause
		player$.stop = clock$.stop
		player$.next = clock$.next
		player$.nextOn = clock$.nextOn
		player$.prev = clock$.prev
		player$.bpm = clock$.bpm

		return player$
	}
