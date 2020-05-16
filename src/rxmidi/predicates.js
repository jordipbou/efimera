import * as R from 'ramda'

// =========== MIDI Messages predicates ==============
let isMidiMessage = R.propEq('type', 'midimessage')

export { isMidiMessage }

// ---- Channel Voice Messages ----
let isMessageType = t => d => isMidiMessage(d)
							  && d.data[0] >> 4 === t
let isNoteOn = isMessageType(9)
let actsAsNoteOn = v => isNoteOn(v) && getVelocity(v) !== 0
let isNoteOff = isMessageType(8)
let actsAsNoteOff = v => isNoteOff(v) || (isNoteOn(v) && getVelocity(v) === 0)
let isNote = v => isNoteOn(v) || isNoteOff(v)
let isPolyPressure = isMessageType(10)
let hasNote = v => isNote(v) || isPolyPressure(v)
// --- TODO: This are not predicates !!
let getNote = d => hasNote(d) ? d.data[1] : undefined
let getVelocity = d => hasNote(d) ? d.data[2] : undefined
// ---
let isControlChange = isMessageType(11)
let isProgramChange = isMessageType(12)
let isChannelPressure = isMessageType(13)
let isPitchBend = isMessageType(14)

export { 
	isNoteOn, actsAsNoteOn,
	isNoteOff, actsAsNoteOff, 
	isNote, 
	isPolyPressure, hasNote,
	isControlChange, isProgramChange,
	isChannelPressure, isPitchBend
}

// ------------ Channel Mode Messages ----------------
let isChannelMode1 = 
	d1 => m => isControlChange(d)
		    && d.data[1] === d1
let isChannelMode2 = 
	(d1, d2) => m => isControlChange(d)
				  && d.data[1] === d1
				  && d.data[2] === d2
let isAllSoundOff = d => isChannelMode2(120, 0)
let isResetAll = d => isChannelMode1(121)
let isLocalControlOff = d => isChannelMode2(122, 0)
let isLocalControlOn = d => isChannelMode2(122, 127)
let isAllNotesOff = d => isChannelMode2(123, 0)
let isOmniModeOff = d => isChannelMode2(124, 0)
let isOmniModeOn = d => isChannelMode2(125, 0)
let isMonoModeOn = d => isChannelMode1(126)
let isPolyModeOn = d => isChannelMode2(127, 0)
let isChannelMode =
	d => isAllSoundOff(d)
		|| isResetAll(d)
		|| isLocalControlOff(d)
		|| isLocalControlOn(d)
		|| isAllNotesOff(d)
		|| isOmniModeOff(d)
		|| isOmniModeOn(d)
		|| isMonoModeOn(d)
		|| isPolyModeOn(d)
let isChannelVoice =
	d => isNote(d)
		|| isPolyPressure(d)
		|| (isControlChange(d) && !isChannelMode(d))
		|| isProgramChange(d)
		|| isChannelPressure(d)
		|| isPitchBend(d)
let isChannelMessage =
	d => isChannelMode(d) || isChannelVoice(d)
// ---- TODO: This is not a predicate
let getChannel = 
	(d) => isMidiMessage(d) ? d.data[0] & 0xF : 0
let isOnChannel = 
	(d, ch) => isChannelMessage(d) 
			&& getChannel(d) === ch
let isOnChannels = 
	(d, chs) => isChannelMessage(d) 
			 && chs.includes(getChannel(d))

// =========== MIDI Meta Events predicates ==============
let isMetaEvent = R.propEq('type', 'metaevent')
let isTempoChange = 
	msg => isMetaEvent(msg) && msg.metaType === 81

export {
	isAllSoundOff, isResetAll, 
	isLocalControlOff, isLocalControlOn,
	isAllNotesOff,
	isOmniModeOff, isOmniModeOn,
	isMonoModeOn, isPolyModeOn,
	isChannelMode, isChannelVoice,
	isChannelMessage, 
	getChannel,
	isOnChannel, isOnChannels,
	isMetaEvent,
	isTempoChange
}

// TODO: System Common Messages and System Real-Time Messages


