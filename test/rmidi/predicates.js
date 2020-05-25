const test = require('ava')
const P = require('../../src/rmidi/predicates.js')

let msg = (data) => 
  ({ type: 'midimessage', data: data })

let meta = (t, data = []) => 
  ({ type: 'metaevent', metaType: t, data: data })

test ('seemsMIDIMessage', t => {
  t.false (P.seemsMIDIMessage (null))
  t.false (P.seemsMIDIMessage (undefined))
  t.false (P.seemsMIDIMessage ({}))
  t.false (P.seemsMIDIMessage ({ type: 'midimessage' }))
  t.false (P.seemsMIDIMessage ({ data: [144, 64, 96] }))
  t.true (P.seemsMIDIMessage (msg ([])))
})

// ---------------- Channel Voice Messages ------------------------

test ('isChannelVoiceMessageOfType', t => {
  t.false (P.isChannelVoiceMessageOfType (null) (null))
  t.false (P.isChannelVoiceMessageOfType (null) (undefined))
  t.false (P.isChannelVoiceMessageOfType (undefined) (null))
  t.false (P.isChannelVoiceMessageOfType (undefined) (undefined))
  t.false (P.isChannelVoiceMessageOfType (8) (null))
  t.false (P.isChannelVoiceMessageOfType (8) (undefined))
  t.false (P.isChannelVoiceMessageOfType (8) (msg ([128])))
  t.false (P.isChannelVoiceMessageOfType (8) (msg ([128, 64])))
  t.true (P.isChannelVoiceMessageOfType (8) (msg ([128, 64, 96])))
  t.true (P.isChannelVoiceMessageOfType (12) (msg ([192, 13])))
  t.false (P.isChannelVoiceMessageOfType (12) (msg ([192, 13, 88])))
})

test ('isNoteOff', t => {
  t.false (P.isNoteOff (msg ([127, 64, 96])))
  t.true (P.isNoteOff (msg ([128, 64, 96])))
  t.true (P.isNoteOff (msg ([143, 64, 96])))
  t.false (P.isNoteOff (msg ([144, 64, 0])))
})

test ('isNoteOn', t => {
  t.false (P.isNoteOn (msg ([143, 64, 96])))
  t.true (P.isNoteOn (msg ([144, 64, 96])))
  t.true (P.isNoteOn (msg ([159, 64, 0])))
  t.false (P.isNoteOn (msg ([160, 64, 96])))
})

test ('asNoteOn', t => {
  t.false (P.asNoteOn (msg ([143, 64, 96])))
  t.true (P.asNoteOn (msg ([144, 64, 96])))
  t.true (P.asNoteOn (msg ([159, 64, 96])))
  t.false (P.asNoteOn (msg ([160, 64, 96])))
  t.false (P.asNoteOn (msg ([144, 64, 0])))
})

test ('asNoteOff', t => {
  t.false (P.asNoteOff (msg ([127, 64, 96])))
  t.true (P.asNoteOff (msg ([128, 64, 96])))
  t.true (P.asNoteOff (msg ([143, 64, 96])))
  t.true (P.asNoteOff (msg ([144, 64, 0])))
  t.false (P.asNoteOff (msg ([144, 64, 96])))
})

test ('isNote', t => {
  t.false (P.isNote (msg ([127, 64, 96])))
  t.true (P.isNote (msg ([128, 64, 96])))
  t.true (P.isNote (msg ([144, 64, 96])))
  t.false (P.isNote (msg ([160, 64, 96])))
})

test ('hasVelocity', t => {
  t.false (P.isNote (msg ([127, 64, 96])))
  t.true (P.isNote (msg ([128, 64, 96])))
  t.true (P.isNote (msg ([144, 64, 96])))
  t.false (P.isNote (msg ([160, 64, 96])))
})

test ('isPolyPressure', t => {
  t.false (P.isPolyPressure (msg ([159, 64, 96])))
  t.true (P.isPolyPressure (msg ([160, 64, 96])))
  t.true (P.isPolyPressure (msg ([175, 64, 96])))
  t.false (P.isPolyPressure (msg ([176, 64, 96])))
})

test ('hasNote', t => {
  t.false (P.hasNote (msg ([127, 64, 96])))
  t.true (P.hasNote (msg ([128, 64, 96])))
  t.true (P.hasNote (msg ([143, 64, 96])))
  t.true (P.hasNote (msg ([144, 64, 96])))
  t.true (P.hasNote (msg ([159, 64, 96])))
  t.true (P.hasNote (msg ([160, 64, 96])))
  t.true (P.hasNote (msg ([175, 64, 96])))
  t.false (P.hasNote (msg ([176, 64, 96])))
})

test ('isControlChange', t => {
  t.false (P.isControlChange (msg ([175, 32, 16])))
  t.true (P.isControlChange (msg ([176, 32, 16])))
  t.true (P.isControlChange (msg ([191, 32, 16])))
  t.false (P.isControlChange (msg ([192, 32, 16])))
})

test ('isProgramChange', t => {
  t.false (P.isProgramChange (msg ([191, 48])))
  t.true (P.isProgramChange (msg ([192, 48])))
  t.true (P.isProgramChange (msg ([207, 48])))
  t.false (P.isProgramChange (msg ([208, 48])))
})

test ('isChannelPressure', t => {
  t.false (P.isChannelPressure (msg ([207, 96])))
  t.true (P.isChannelPressure (msg ([208, 96])))
  t.true (P.isChannelPressure (msg ([223, 96])))
  t.false (P.isChannelPressure (msg ([224, 96])))
})

test ('isPitchBend', t => {
  t.false (P.isPitchBend (msg ([223, 64, 0])))
  t.true (P.isPitchBend (msg ([224, 64, 0])))
  t.true (P.isPitchBend (msg ([239, 64, 0])))
  t.false (P.isPitchBend (msg ([240, 64, 0])))
})

// ------------------- Channel Mode Messages ----------------------

test ('isChannelModeMessage', t => {
  t.false (P.isChannelModeMessage (null) (msg ([176, 120, 0])))
  t.false (P.isChannelModeMessage (undefined) (msg ([176, 120, 0])))
  t.false (P.isChannelModeMessage (120) (msg ([175, 120, 0])))
  t.false (P.isChannelModeMessage (120, 0) (msg ([176, 119, 0])))
  t.true (P.isChannelModeMessage (120, 0) (msg ([176, 120, 0])))
  t.false (P.isChannelModeMessage (120, 0) (msg ([176, 120, 1])))
})

test ('channel mode message predicates', t => {
  t.true (P.isAllSoundOff (msg ([176, 120, 0])))
  t.true (P.isResetAll (msg ([176, 121, 54])))
  t.true (P.isLocalControlOff (msg ([176, 122, 0])))
  t.true (P.isLocalControlOn (msg ([176, 122, 127])))
  t.true (P.isAllNotesOff (msg ([176, 123, 0])))
  t.true (P.isOmniModeOff (msg ([176, 124, 0])))
  t.true (P.isOmniModeOn (msg ([176, 125, 0])))
  t.true (P.isMonoModeOn (msg ([176, 126, 54])))
  t.true (P.isPolyModeOn (msg ([176, 127, 0])))
})

// --------------------- Channel Messages --------------------------

test ('isChannelMode', t => {
  t.false (P.isChannelMode (msg ([176, 119, 0])))
  t.true (P.isChannelMode (msg ([176, 120, 0])))
  t.true (P.isChannelMode (msg ([176, 127, 0])))
})

test ('isChannelVoice', t => {
  t.true (P.isChannelVoice (msg ([129, 64, 96])))
  t.true (P.isChannelVoice (msg ([176, 32, 16])))
  t.false (P.isChannelVoice (msg ([176, 120, 0])))
})

test ('isChannelMessage', t => {
  t.true (P.isChannelMessage (msg ([144, 64, 96])))
  t.false (P.isChannelMessage (msg ([248])))
})

test ('isOnChannel', t => {
  t.false (P.isOnChannel (2) (msg ([128, 64, 96])))
  t.true (P.isOnChannel (2) (msg ([130, 64, 96])))
})

test ('isOnChannels', t => {
  t.false (P.isOnChannels ([2, 5]) (msg ([128, 64, 96])))
  t.true (P.isOnChannels ([2, 5]) (msg ([130, 64, 96])))
  t.true (P.isOnChannels ([2, 5]) (msg ([133, 64, 96])))
})

// ----------------- System Common Messages ------------------------

test ('isSystemExclusive', t => {
  t.true (P.isSystemExclusive (msg ([240, 65, 16, 66, 18, 64, 0, 127, 0, 65, 247])))
})

test ('isMIDITimeCodeQuarterFrame', t => {
  t.true (P.isMIDITimeCodeQuarterFrame (msg ([241, 50])))
})

test ('isSongPositionPointer', t => {
  t.true (P.isSongPositionPointer (msg ([242, 0, 8])))
})

test ('isSongSelect', t => {
  t.true (P.isSongSelect (msg ([243, 15])))
})

test ('isTuneRequest', t => {
  t.true (P.isTuneRequest (msg ([246])))
})

test ('isEndOfExclusive', t => {
  t.true (P.isEndOfExclusive (msg ([247])))
})

// ---------------- System Real Time Messages ----------------------

test ('system real time midi messages predicates', t => {
  t.true (P.isMIDIClock (msg ([248])))
  t.true (P.isStart (msg ([250])))
  t.true (P.isContinue (msg ([251])))
  t.true (P.isStop (msg ([252])))
  t.true (P.isActiveSensing (msg ([254])))
  t.true (P.isReset (msg ([255])))
})

// ------------------ MIDI File Meta Events ------------------------

test ('isTempoChange', t => {
  t.true (P.isTempoChange (meta (81)))
})
