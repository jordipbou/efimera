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

export let MIDIPlayer = midiFile => {
  let midiFileSubject = new rx.BehaviorSubject(midiFile)
  
  let operator = rx.pipe(
    rxo.withLatestFrom(
      midiFileSubject.pipe(
        rxo.map(mf => R.pipe(
          withAbsoluteDeltaTimes,
          mergeTracks,
          sortEvents)(mf)))),
    rxo.scan(([tick, _], [o, playable]) => {
      let track = playable.track[0].event
      let loop = playable.loop
      let maxTick = R.last(track).absoluteDeltaTime
      
      let midi_clocks = []
      if (R.is(rx.Observable, o)) {
        o.subscribe(mc => midi_clocks.push(mc))
      } else if (isMidiClock(o)) {
        midi_clocks.push(o)
      } else if (isStart(o)) {
        return [0, rx.empty()]
      } else if (isContinue(o)) {
        return [tick, rx.empty()]
      } else if (isStop(o)) {
        return [tick, rx.empty()]
      } else if (isMidiMessage(o)) {
        return rx.of(o)
      }
      
      let events = R.head(
        R.reduce(
          ([events, found_tempo_change], mc) => {
            if (!found_tempo_change) {
              let tick_events = R.pipe(
                R.filter(e => 
                  e.absoluteDeltaTime === tick 
                  || (loop ? 
                      (e.absoluteDeltaTime === (tick % maxTick)) 
                      : false)),
                R.map(e => { e.timeStamp = mc.timeStamp; return e; })
              )(track)
              tick = (loop && (tick + 1 > maxTick)) ? (tick + 1) % maxTick : tick + 1

              return [R.concat(events, tick_events), R.length(R.filter(isTempoChange, tick_events)) > 0]
            } else {
              return [events, found_tempo_change]
            }
      	  }, [[], false], midi_clocks))
      
      return [tick, rx.from(events)]
    }, [0, null]),
    rxo.switchMap(([_, events]) => events)
  )
  
  operator.changeMidiFile = mf => midiFileSubject.next(mf)
  
  return operator
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
