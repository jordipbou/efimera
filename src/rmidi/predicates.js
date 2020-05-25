import { 
  allPass, anyPass, both, cond, complement, curry, 
  either, eqBy, F, has, includes, is, isNil, hasPath, last, length,
  pathEq, pathSatisfies, propEq, propIs,
  propSatisfies, T, type, when
} from 'ramda'

// ================= MIDI Messages predicates ======================

export let seemsMIDIMessage = 
  allPass ([is (Object),
            propEq ('type', 'midimessage'),
            propIs (Array, 'data')])
   
// ------------------ Channel Voice Messages -----------------------

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
  both (isNoteOn) (complement (pathEq (['data', 2], 0)))

export let asNoteOff =
  either (isNoteOff) (both (isNoteOn) (pathEq (['data', 2], 0)))

export let isNote = 
  either (isNoteOff) (isNoteOn)

export let hasVelocity = 
  isNote

export let velocityEq = (v) =>
  both (hasVelocity)
       (pathEq (['data', 2]) (v))

export let isPolyPressure = 
  isChannelVoiceMessageOfType (10)

export let hasNote = 
  either (isNote) (isPolyPressure)

export let noteEq = (n) => 
  both (hasNote)
       (pathEq (['data', 1]) (n))

export let isControlChange = 
  isChannelVoiceMessageOfType (11)

export let controlEq = (c) =>
  both (isControlChange)
       (pathEq (['data', 1]) (c))

export let valueEq = (v) =>
  both (isControlChange)
       (pathEq (['data', 2]) (v))

export let isProgramChange = 
  isChannelVoiceMessageOfType (12)

export let programEq = (p) =>
  both (isProgramChange)
       (pathEq (['data', 1]) (p))

export let isChannelPressure = 
  isChannelVoiceMessageOfType (13)

export let pressureEq = (p) =>
  cond ([
    [isPolyPressure, pathEq (['data', 2]) (p)],
    [isChannelPressure, pathEq (['data', 1]) (p)],
    [T, F]])

export let isPitchBend = 
  isChannelVoiceMessageOfType (14)

export let pitchBendEq = (pb) =>
  allPass ([isPitchBend,
            pathEq (['data', 1], pb & 0x7F),
            pathEq (['data', 2], pb >> 7)])


// ------------ Channel Mode Messages ----------------

export let isChannelModeMessage = (d1, d2) =>
  d2 === undefined ?
    both (isControlChange) (pathEq (['data', 1], d1))
    : allPass ([isControlChange,
                pathEq (['data', 1], d1),
                pathEq (['data', 2], d2)])

export let isAllSoundOff = 
  isChannelModeMessage (120, 0)

export let isResetAll = 
  isChannelModeMessage (121)

export let isLocalControlOff = 
  isChannelModeMessage (122, 0)

export let isLocalControlOn = 
  isChannelModeMessage (122, 127)

export let isAllNotesOff = 
  isChannelModeMessage (123, 0)

export let isOmniModeOff =  
  isChannelModeMessage (124, 0)

export let isOmniModeOn = 
  isChannelModeMessage (125, 0)

export let isMonoModeOn = 
  isChannelModeMessage (126)

export let isPolyModeOn = 
  isChannelModeMessage (127, 0)

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

export let isOnChannel = (ch) =>
  both (isChannelMessage)
       (propSatisfies (v => (v[0] & 0xF) === ch, 'data'))

export let isOnChannels = (chs) =>
  both (isChannelMessage)
       (propSatisfies (v => includes (v[0] & 0xF, chs), 'data'))

// =============== System Common message predicates ================

export let isSystemExclusive = 
  allPass ([seemsMIDIMessage,
            propSatisfies (v => v[0] === 240, 'data'),
            propSatisfies (v => last(v) === 247, 'data')])

export let isMIDITimeCodeQuarterFrame =
  both (seemsMIDIMessage) (propSatisfies (v => v[0] === 241, 'data'))

export let isSongPositionPointer =
  both (seemsMIDIMessage) (propSatisfies (v => v[0] === 242, 'data'))

export let isSongSelect =
  both (seemsMIDIMessage) (propSatisfies (v => v[0] === 243, 'data'))

export let isTuneRequest =
  both (seemsMIDIMessage) (propEq ('data', [246]))

export let isEndOfExclusive =
  both (seemsMIDIMessage) (propEq ('data', [247]))

// ============= System Real Time message predicates ===============

export let isMIDIClock =
  both (seemsMIDIMessage) (propEq ('data', [248]))

export let isStart =
  both (seemsMIDIMessage) (propEq ('data', [250]))

export let isContinue =
  both (seemsMIDIMessage) (propEq ('data', [251]))

export let isStop =
  both (seemsMIDIMessage) (propEq ('data', [252]))

export let isActiveSensing =
  both (seemsMIDIMessage) (propEq ('data', [254]))

export let isReset =
  both (seemsMIDIMessage) (propEq ('data', [255]))

// ============== MIDI File Meta Events predicates =================

export let seemsMIDIMetaEvent =
  allPass ([is (Object),
            propEq ('type', 'metaevent'),
            has ('metaType'),
            propIs (Array, 'data')])

export let isTempoChange = 
  both (seemsMIDIMetaEvent) (propEq ('metaType', 81))
