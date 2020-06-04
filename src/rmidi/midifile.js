import { isTempoChange } from './predicates.js'
import { from } from './messages.js'
import { timeStamp } from './lenses.js'

import {
  __, addIndex, always, allPass, append, assoc, both, concat, 
  either, evolve, filter, has, head, is, isEmpty, isNil, last,
  map, mergeLeft, objOf, pipe, prop, propIs, propEq, reduce, 
  reduceWhile, scan, set, slice, sort, tail, unless
} from 'ramda'

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

// ------------------------- Predicates ----------------------------

export let seemsMIDIFile = 
  allPass ([is (Object),
            has ('formatType'),
            has ('timeDivision'),
            has ('tracks'),
            has ('track'),
            propIs (Array, 'track')])

export let seemsMIDILoop =
  both (seemsMIDIFile)
       (propEq ('loop', true))

// -------------------------- Helpers ------------------------------

export let withAbsoluteDeltaTimes =
	evolve ({
		track: map (
			evolve ({
				event: pipe (
					scan 
            (([tick, _], msg) => [tick + msg.deltaTime, msg])
            ([0, null]),
					map
            (([tick, msg]) => 
              msg !== null ?
                from (mergeLeft ({ absoluteDeltaTime: tick }, msg))
                : null),
					tail)}))})

export let mergeTracks =
	evolve ({
		tracks: always (1),
		track: pipe (
			reduce ((acc, v) => concat(acc, v.event), []),
      map (v => from (v)),
			objOf ('event'),
			append (__, []))})

export let sortEvents = 
    evolve ({
		track: pipe (
			map (v => 
        pipe (
          sort ((a, b) => a.absoluteDeltaTime - b.absoluteDeltaTime),
          map (v => from (v))
        )(v.event)),
			head,
			objOf ('event'),
			append (__, []))})

let filterIndexed = 
  addIndex (filter)

export let filterTracks =	(tracks, midiFile) => 
		evolve ({
			tracks: () => tracks.length,
			track: pipe (
        filterIndexed ((v, k) => tracks.includes (k)),
        map (v => objOf ('event', map (from, v.event)))
      )
		}, midiFile)

// TODO
//export let addTrack/s = (midiFile, tracks) => 

// TODO
//export let changeTimeDivision = (midiFile, newTimeDivision) =>

// TODO
// export let commonTimeDivision = (midiFile1, midiFile2, ...) => 

export let createMIDIFile =	(track, timeDivision = 24) => ({
  formatType: 1,
	tracks: 1,
	timeDivision: timeDivision,
	track: [{ event: map (from, track) }]
})

export let createLoop =	(midifile) => ({
  ...midifile,
  loop: true,
  track: map (
    pipe (
      prop ('event'),
      map (from),
      objOf ('event')
    )
  ) (midifile.track)
})

export let MIDIPlayer = (midifile) => {
  let playable = pipe (
    withAbsoluteDeltaTimes,
    mergeTracks,
    sortEvents
  ) (midifile)

  let track = playable.track [0].event
  let loop = playable.loop
  let maxTick = last (track).absoluteDeltaTime

  return (tick, midi_clocks) => 
    slice 
      (0, 2)
      (reduceWhile 
        (([events, tick, bpm_not_found], midi_clock) => bpm_not_found)
        (([events, tick, bpm_not_found], midi_clock) => {
          let tick_events = pipe (
            filter (e => 
              e.absoluteDeltaTime === tick ||
              (loop &&  e.absoluteDeltaTime === (tick % maxTick))),
            map (set (timeStamp) (midi_clock.timeStamp)),
          ) (track)

          return [
            concat (events, tick_events), 
            loop ? (tick + 1) % maxTick : tick + 1,
            isEmpty (filter (isTempoChange) (tick_events))
          ]
        })
        ([[], tick, true])
        (midi_clocks))
}
