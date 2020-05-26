const test = require ('ava')
const M = require ('../../src/rmidi/messages.js')
const P = require ('../../src/rmidi/predicates.js')
const { allPass, both } = require ('ramda')

// =================== MIDI Message creation =======================

test ('MIDI Message creation', t => {
  t.deepEqual (
    M.msg ([145, 64, 96]), 
    { type: 'midimessage',
      timeStamp: 0,
      deltaTime: 0,
      data: [145, 64, 96]})

  t.deepEqual (
    M.msg ([145, 64, 96], 25), 
    { type: 'midimessage',
      timeStamp: 25,
      deltaTime: 0,
      data: [145, 64, 96]})

  t.deepEqual (
    M.msg ([145, 64, 96], 25, 100), 
    { type: 'midimessage',
      timeStamp: 25,
      deltaTime: 100,
      data: [145, 64, 96]})
})

test ('MIDI Message cloning', t => {
  let msgs = [ M.msg ([248]), M.msg ([144, 64, 96])]
  let combine = M.from (msgs)

  t.is (combine.timeStamp, msgs[0].timeStamp)
  t.is (combine.deltaTime, msgs[0].deltaTime)
  t.deepEqual (combine.data, [248, 144, 64, 96])
})

// --------------- MIDI Message Modification Helpers ---------------

test ('MIDI Message TimeStamp manipulation', t => {
  let msg = M.msg ([145, 64, 96])
  let modified = M.timeStamp (100) (msg)

  t.deepEqual (
    modified, 
    { type: 'midimessage',
      timeStamp: 100,
      deltaTime: 0,
      data: [145, 64, 96]})

  t.not (msg.data, modified.data)
})

test ('MIDI Message DeltaTime manipulation', t => {
  let msg = M.msg ([145, 64, 96])
  let modified = M.deltaTime (100) (msg)

  t.deepEqual (
    modified, 
    { type: 'midimessage',
      timeStamp: 0,
      deltaTime: 100,
      data: [145, 64, 96]})

  t.not (msg.data, modified.data)
})

test ('MIDI Message add a delay to timeStamp manipulation', t => {
  let msg = M.msg ([145, 64, 96], 25)
  let modified = M.delay (100) (msg)

  t.deepEqual (
    modified, 
    { type: 'midimessage',
      timeStamp: 125,
      deltaTime: 0,
      data: [145, 64, 96]})

  t.not (msg.data, modified.data)
})

// =================== MIDI Messages definition ====================

// -------------- Channel Voice messages generation ----------------

test ('Note Off message creation', t => {
  let preds = (n, v, ch) => 
    [P.isNoteOff, P.noteEq (n), P.velocityEq (v), P.isOnChannel (ch)]

  t.true (allPass (preds (77, 96, 0)) (M.off (77)))
  t.true (allPass (preds (77, 127, 0)) (M.off (77, 127)))
  t.true (allPass (preds (77, 127, 10)) (M.off (77, 127, 10)))
})

test ('Note On message creation', t => {
  let preds = (n, v, ch) => 
    [P.isNoteOn, P.noteEq (n), P.velocityEq (v), P.isOnChannel (ch)]

  t.true (allPass (preds (77, 96, 0)) (M.on (77)))
  t.true (allPass (preds (77, 127, 0)) (M.on (77, 127)))
  t.true (allPass (preds (77, 127, 10)) (M.on (77, 127, 10)))
})

test ('Poly Pressure message creation', t => {
  let preds = (n, v, ch) => 
    [P.isPolyPressure, P.noteEq (n), 
     P.pressureEq (v), P.isOnChannel (ch)]

  t.true (allPass (preds (77, 96, 0)) (M.pp (77)))
  t.true (allPass (preds (77, 127, 0)) (M.pp (77, 127)))
  t.true (allPass (preds (77, 127, 10)) (M.pp (77, 127, 10)))
})

test ('Control Change message creation', t => {
  let preds = (n, v, ch) => 
    [P.isControlChange, P.controlEq (n), 
     P.valueEq (v), P.isOnChannel (ch)]

  t.true (allPass (preds (32, 127, 0)) (M.cc (32, 127)))
  t.true (allPass (preds (32, 127, 10)) (M.cc (32, 127, 10)))
})

test ('Program Change message creation', t => {
  let preds = (p, ch) => 
    [P.isProgramChange, P.programEq (p), P.isOnChannel (ch)]

  t.true (allPass (preds (18, 0)) (M.pc (18)))
  t.true (allPass (preds (18, 10)) (M.pc (18, 10)))
})

test ('Channel Pressure message creation', t => {
  let preds = (p, ch) =>
    [P.isChannelPressure, P.pressureEq (p), P.isOnChannel (ch)]

  t.true (allPass (preds (96, 0)) (M.cp (96)))
  t.true (allPass (preds (96, 10)) (M.cp (96, 10)))
})

test ('Pitch Bend message creation', t => {
  let preds = (pb, ch) =>
    [P.isPitchBend, P.pitchBendEq (pb), P.isOnChannel (ch)]

  t.true (allPass (preds (8192, 0)) (M.pb (8192)))
  t.true (allPass (preds (8192, 10)) (M.pb (8192, 10)))
})

test ('RPN message creation', t => {
  let preds = (n, v, ch) =>
    [P.isRPN, P.isOnChannel (ch)]

  t.true (allPass (preds (245, 1, 0)) (M.rpn (245, 1)))
  t.true (allPass (preds (245, 1, 3)) (M.rpn (245, 1, 3)))
})

test ('NRPN message creation', t => {
  let preds = (n, v, ch) =>
    [P.isNRPN, P.isOnChannel (ch)]

  t.true (allPass (preds (245, 1, 0)) (M.nrpn (245, 1)))
  t.true (allPass (preds (245, 1, 3)) (M.nrpn (245, 1, 3)))
})
