import { 
  allPass, anyPass, both, complement, curry, 
  either, eqBy, includes, is, isNil, hasPath, length,
  pathEq, pathSatisfies, propEq, propIs,
  propSatisfies, type, when
} from 'ramda'

import { 
  getData0, getData1, getData2 
} from './internal/getters.js'


// =========== MIDI Messages predicates ==============
export let seemsMIDIMessage = 
  allPass ([is (Object),
            propEq ('type', 'midimessage'),
            propIs (Array, 'data')])
   
// ------------ Channel Voice Messages ---------------
export let isChannelVoiceMessageOfType = (t) =>
  both (seemsMIDIMessage)
       (propSatisfies 
         (p => includes (t, [8, 9, 10, 11, 14]) ?
                 length(p) === 3 && p[0] >> 4 === t
                 : length(p) === 2 && p[0] >> 4 === t)
         ('data'))

export let isNoteOff = 
  isChannelVoiceMessageOfType (8)

export let isNoteOn = 
  isChannelVoiceMessageOfType (9)

export let asNoteOn = 
  both (isNoteOn) (pathEq (['data', 2], 0))

export let isNote = 
  both (isNoteOff) (isNoteOn)

export let hasVelocity = 
  either (isNoteOff) (isNoteOn)

export let isPolyPressure = 
  isChannelVoiceMessageOfType (10)

export let hasNote = 
  either (isNote) (isPolyPressure)


export let isControlChange = 
  isChannelVoiceMessageOfType (11)

export let isProgramChange = 
  isChannelVoiceMessageOfType (12)

export let isChannelPressure = 
  isChannelVoiceMessageOfType (13)

export let isPitchBend = 
  isChannelVoiceMessageOfType (14)


// ------------ Channel Mode Messages ----------------
export let isChannelModeMessage = (d1, d2) =>
  d2 === undefined ?
    both (isControlChange) (pathEq (['data', 1], d1))
    : allPass ([isControlChange,
                pathEq (['data', 1], d1),
                pathEq (['data', 2], d2)])

export let isAllSoundOff = 
  isChannelModeMessage (120, 0)
export let isResetAll = isChannelModeMessage (121)
export let isLocalControlOff = 
  isChannelModeMessage (122, 0)
export let isLocalControlOn = 
  isChannelModeMessage (122, 127)
export let isAllNotesOff = 
  isChannelModeMessage (123, 0)
export let isOmniModeOff =  
  isChannelModeMessage (124, 0)
export let isOmniModeOn = isChannelModeMessage (125, 0)
export let isMonoModeOn = isChannelModeMessage (126)
export let isPolyModeOn = isChannelModeMessage (127, 0)
export let isChannelMode =
  anyPass ([isAllSoundOff,
            isResetAll,
            isLocalControlOff,
            isLocalControlOn,
            isAllNotesOff,
            isOmniModeOff,
            isOmniModeOn,
            isMonoModeOn,
            isPolyModeOn])
export let isChannelVoice =
  anyPass ([isNote,
            isPolyPressure,
            both (isControlChange) 
                 (complement (isChannelMode)),
            isProgramChange,
            isChannelPressure,
            isPitchBend])
export let isChannelMessage =
  either (isChannelMode) (isChannelVoice)

export let isOnChannel = (d, ch) => isChannelMessage(d) && getChannel(d) === ch
export let isOnChannels = (d, chs) => isChannelMessage(d) && includes(getChannel(d), chs)

//// ====== System Real Time message predicates ========
//export let isMidiClock = (d) => isMidiMessage(d) && getData0(d) === 248
//export let isStart = (d) => isMidiMessage(d) && getData0(d) === 250
//export let isContinue = (d) => isMidiMessage(d) && getData0(d) === 251
//export let isStop = (d) => isMidiMessage(d) && getData0(d) === 254
//export let isReset = (d) => isMidiMessage(d) && getData0(d) === 255
//
////// ========== MIDI Meta Events predicates ============
////let isMetaEvent = R.propEq('type', 'metaevent')
////let isTempoChange = 
////	msg => isMetaEvent(msg) && msg.metaType === 81
////
////export {
////	isAllSoundOff, isResetAll, 
////	isLocalControlOff, isLocalControlOn,
////	isAllNotesOff,
////	isOmniModeOff, isOmniModeOn,
////	isMonoModeOn, isPolyModeOn,
////	isChannelMode, isChannelVoice,
////	isChannelMessage, 
////	getChannel,
////	isOnChannel, isOnChannels,
////	isMidiClock, isStart, isContinue, isStop,
////	isReset,
////	isMetaEvent,
////	isTempoChange
////}
////
////// TODO: System Common Messages and System Real-Time Messages
////
////
