import * as rx from 'rxjs'
import * as rxo from 'rxjs/operators'
import * as T from './transformers.js'

// ------------------ Channel transformation  ----------------------

export let toChannel = (ch) =>
  rxo.map (T.channel (ch))

export let mapToChannel = (chin, chout) => 
  rxo.map (T.mapChannel (chin, chout))

export let mapToChannels = (chsin, chsout) => 
  rxo.mergeMap (v => rx.from (T.mapChannels (chsin) (chsout) (v)))

export let asMIDIMessage = () => rxo.map(d => copy(d))

// ---- Controller mapping ----
// TODO: Add transformation curves to values
export let mapController =	(ccin, ccout) => 
	rxo.map(d => {
		if (isControlChange(d) && d.data[1] === ccin) {
			d.data[1] = ccout
		}
		return d
	})
// ---- Note mapping ----
export let transpose = i => 
	rxo.map(d => { 
		if (hasNote(d)) {
			d.data[1] = d.data[1] + i
		}
		return d
	})
