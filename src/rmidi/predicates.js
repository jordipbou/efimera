import { curry, propEq, propIs } from 'ramda'
import * as R from 'ramda'
import { fAnd, fEquals, fOr } from './utils.js'
import { getNote, getVelocity } from './getters.js'

// =========== MIDI Messages predicates ==============
export let isMidiMessage = (x) =>
  x !== null &&
  x !== undefined &&
  typeof x === 'object' &&
  x.type === 'midimessage' &&
  x.data instanceof Array
   
// ------------ Channel Voice Messages ---------------
export let isChannelVoiceMessage = curry((t, x) =>
  isMidiMessage(x) &&
  x.data[0] !== undefined &&
  x.data[0] >> 4 === t &&
  (includes(t, [8, 9, 10, 11, 14]) ?
    x.data.length === 3
    : x.data.length === 2)
)

export let isNoteOff = isChannelVoiceMessage (8)
export let isNoteOn = isChannelVoiceMessage (9)
export let asNoteOn = 
  fAnd (isNoteOn) (fEquals(0, getVelocity))
export let asNoteOff =
  fOr (isNoteOff) 
      (fAnd (isNoteOn) (fEquals(0, getVelocity)))
export let isNote = fAnd (isNoteOff) (isNoteOn)
export let isPolyPressure = isChannelVoiceMessage (10)
export let hasNote = fOr (isNote) (isPolyPressure)

export let isControlChange = isChannelVoiceMessage (11)
export let isProgramChange = isChannelVoiceMessage (12)
export let isChannelPressure = isChannelVoiceMessage (13)
export let isPitchBend = isChannelVoiceMessage (14)

// ------------ Channel Mode Messages ----------------
export let isChannelModeMessage = (d1, d2) =>
  d2 === undefined ?
    (v) => isControlChange(v) && v.data[1] === d1
    : (v) => isControlChange(v) &&
             v.data[1] === d1 &&
             v.data[2] === d2

//let isChannelMode1 = 
//	d1 => m => isControlChange(d)
//		    && d.data[1] === d1
//let isChannelMode2 = 
//	(d1, d2) => m => isControlChange(d)
//				  && d.data[1] === d1
//				  && d.data[2] === d2
//let isAllSoundOff = d => isChannelMode2(120, 0)
//let isResetAll = d => isChannelMode1(121)
//let isLocalControlOff = d => isChannelMode2(122, 0)
//let isLocalControlOn = d => isChannelMode2(122, 127)
//let isAllNotesOff = d => isChannelMode2(123, 0)
//let isOmniModeOff = d => isChannelMode2(124, 0)
//let isOmniModeOn = d => isChannelMode2(125, 0)
//let isMonoModeOn = d => isChannelMode1(126)
//let isPolyModeOn = d => isChannelMode2(127, 0)
//let isChannelMode =
//	d => isAllSoundOff(d)
//		|| isResetAll(d)
//		|| isLocalControlOff(d)
//		|| isLocalControlOn(d)
//		|| isAllNotesOff(d)
//		|| isOmniModeOff(d)
//		|| isOmniModeOn(d)
//		|| isMonoModeOn(d)
//		|| isPolyModeOn(d)
//let isChannelVoice =
//	d => isNote(d)
//		|| isPolyPressure(d)
//		|| (isControlChange(d) && !isChannelMode(d))
//		|| isProgramChange(d)
//		|| isChannelPressure(d)
//		|| isPitchBend(d)
//let isChannelMessage =
//	d => isChannelMode(d) || isChannelVoice(d)
//// ---- TODO: This is not a predicate
//let getChannel = 
//	(d) => isMidiMessage(d) ? d.data[0] & 0xF : 0
//let isOnChannel = 
//	(d, ch) => isChannelMessage(d) 
//			&& getChannel(d) === ch
//let isOnChannels = 
//	(d, chs) => isChannelMessage(d) 
//			 && chs.includes(getChannel(d))
//
//// ====== System Real Time message predicates ========
//let isMidiClock = d => isMidiMessage(d) && d.data[0] === 248
//let isStart = d => isMidiMessage(d) && d.data[0] === 250
//let isContinue = d => isMidiMessage(d) && d.data[0] === 251
//let isStop = d => isMidiMessage(d) && d.data[0] === 254
//let isReset = d => isMidiMessage(d) && d.data[0] === 255
//
//// ========== MIDI Meta Events predicates ============
//let isMetaEvent = R.propEq('type', 'metaevent')
//let isTempoChange = 
//	msg => isMetaEvent(msg) && msg.metaType === 81
//
//export {
//	isAllSoundOff, isResetAll, 
//	isLocalControlOff, isLocalControlOn,
//	isAllNotesOff,
//	isOmniModeOff, isOmniModeOn,
//	isMonoModeOn, isPolyModeOn,
//	isChannelMode, isChannelVoice,
//	isChannelMessage, 
//	getChannel,
//	isOnChannel, isOnChannels,
//	isMidiClock, isStart, isContinue, isStop,
//	isReset,
//	isMetaEvent,
//	isTempoChange
//}
//
//// TODO: System Common Messages and System Real-Time Messages
//
//
