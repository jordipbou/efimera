import * as rxo from 'rxjs/operators'

// =========== MIDI Message transformers =============
// ------ Channel transformation (Rx Operators) ------
// Every channel message will change its channel to ch
let changeToChannel = (d, ch) => { 
	d.data[0] = (d.data[0] & 0xF0) + ch 
	return d
}
let toChannel = ch =>
	rxo.map(d => isChannelMessage(d) ? 
					changeToChannel(d, ch) 
					: d)
// Maps every channel message on chin channel to 
// chout channel
let mapChannel = (chin, chout) => 
	rxo.map(d => isOnChannel(d, chin) ?		
					changeToChannel(d, chout) 
					: d)
// Maps every channel message in chin array of 
// channels to chout array of channels
let mapChannels = (chsin, chsout) => 
	rxo.mergeMap(d => 
		isOnChannels(d, chsin) ? 
			rx.from(chsout.map(ch => 
				changeToChannel(copy(d), ch)))
			: rx.of(d))
let asMIDIMessage = () => rxo.map(d => copy(d))
// ---- Controller mapping ----
// TODO: Add transformation curves to values
let mapController =	(ccin, ccout) => 
	rxo.map(d => {
		if (isControlChange(d) && d.data[1] === ccin) {
			d.data[1] = ccout
		}
		return d
	})
// ---- Note mapping ----
let transpose = i => 
	rxo.map(d => { 
		if (hasNote(d)) {
			d.data[1] = d.data[1] + i
		}
		return d
	})

export {
	toChannel,
	mapChannel,
	mapChannels,
	asMIDIMessage,
	mapController,
	transpose
}
