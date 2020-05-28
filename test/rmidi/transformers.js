const test = require ('ava')
const M = require ('../../src/rmidi/messages.js')
const P = require ('../../src/rmidi/predicates.js')
const T = require ('../../src/rmidi/transformers.js')
const { add, equals, length, set, view } = require ('ramda')

// --------------- MIDI Message Modification Helpers ---------------

test ('MIDI Message TimeStamp manipulation', t => {
  let msg = M.msg ([145, 64, 96])
  let modified = T.setTimeStamp (100) (msg)

  t.deepEqual (
    modified, 
    { type: 'midimessage',
      timeStamp: 100,
      deltaTime: 0,
      data: [145, 64, 96]})

  t.not (msg.data, modified.data)
  t.is (T.getTimeStamp (msg), 0)
  t.is (T.getTimeStamp (modified), 100)
})

test ('MIDI Message DeltaTime manipulation', t => {
  let msg = M.msg ([145, 64, 96])
  let modified = T.setDeltaTime (100) (msg)

  t.deepEqual (
    modified, 
    { type: 'midimessage',
      timeStamp: 0,
      deltaTime: 100,
      data: [145, 64, 96]})

  t.not (msg.data, modified.data)
  t.is (T.getDeltaTime (msg), 0)
  t.is (T.getDeltaTime (modified), 100)
})

test ('MIDI Message add a delay to timeStamp manipulation', t => {
  let msg = M.msg ([145, 64, 96], 25)
  let modified = T.delay (100) (msg)

  t.deepEqual (
    modified, 
    { type: 'midimessage',
      timeStamp: 125,
      deltaTime: 0,
      data: [145, 64, 96]})

  t.not (msg.data, modified.data)
})

test ('Modify a byte from message data', t => {
  let msg = M.msg ([145, 64, 96])
  let modified = T.setByte (0) (148) (msg)

  t.deepEqual (
    modified,
    { type: 'midimessage',
      timeStamp: msg.timeStamp,
      deltaTime: msg.deltaTime,
      data: [148, 64, 96] })

  t.not (msg.data, modified.data)
  t.is (T.getByte (0) (msg), 145)
  t.is (T.getByte (0) (modified), 148)
})

test ('Modify the channel of a channel message', t => {
  t.true (P.isOnChannel (0) (M.on (64)))
  t.true (P.isOnChannel (10) (T.toChannel (10) (M.on (64))))
})

test ('Map one channel to another', t => {
  t.false (P.isOnChannel (10) (T.mapChannel (1, 10) (M.on (64))))
  t.true (P.isOnChannel (10) (T.mapChannel (0, 10) (M.on (64))))
})

test ('Map some channels to other channels', t => {
  let msg1 = M.on (64, 96, 0)
  let msg2 = M.on (64, 96, 1)
  let msg3 = M.on (64, 96, 3)
  let mod1 = T.mapChannels ([0, 3]) ([10, 13]) (msg1)
  let mod2 = T.mapChannels ([0, 3]) ([10, 13]) (msg2)
  let mod3 = T.mapChannels ([0, 3]) ([10, 13]) (msg3)

  t.true (equals (2) (length (mod1)))
  t.true (P.isOnChannel (10) (mod1 [0]))
  t.true (P.isOnChannel (13) (mod1 [1]))
  t.true (equals (1) (length (mod2)))
  t.true (P.isOnChannel (1) (mod2 [0]))
  t.true (equals (2) (length (mod3)))
  t.true (P.isOnChannel (10) (mod3 [0]))
  t.true (P.isOnChannel (13) (mod3 [1]))
})

//// --------------------- Note based messages -----------------------
//
//test ('get note message property', t => {
//  t.is (view (T.note) (M.off (64)), 64)
//  t.is (view (T.note) (M.on (64)), 64)
//  t.is (view (T.note) (M.pp (64)), 64)
//  t.is (view (T.note) (M.cc (32, 18)), undefined)
//})
//
//test ('set note message property', t => {
//  t.deepEqual (set (T.note) (48) (M.off (64)), M.off (48))
//  t.deepEqual (set (T.note) (48) (M.on (64)), M.on (48))
//  t.deepEqual (set (T.note) (48) (M.pp (64)), M.pp (48))
//  t.deepEqual (set (T.note) (48) (M.cc (32, 18)), M.cc (32, 18))
//})
//
//test ('Transpose notes', t => {
//  t.is (view (T.note) (over (T.note) (add (5)) (M.on (64))), 69)
//  t.is (view (T.note) (over (T.note) (add (-3)) (M.on (64))), 61)
//})
//
//// ------------------- Velocity based messages ---------------------
//
//test ('get velocity message property', t => {
//  t.is (view (T.velocity) (M.off (64, 108)), 108)
//  t.is (view (T.velocity) (M.on (64, 108)), 108)
//  t.is (view (T.velocity) (M.pp (64, 108)), undefined)
//})
//
//test ('set velocity message property', t => {
//  t.deepEqual (set (T.velocity) (108) (M.off (64, 96)), M.off (64, 108))
//  t.deepEqual (set (T.velocity) (108) (M.on (64, 96)), M.on (64, 108))
//  t.deepEqual (set (T.velocity) (108) (M.pp (64, 96)), M.pp (64, 96))
//})
//
//// ------------------- Pressure based messages ---------------------
//
//test ('get pressure message property', t => {
//  t.is (view (T.pressure) (M.off (64)), undefined)
//  t.is (view (T.pressure) (M.on (64)), undefined)
//  t.is (view (T.pressure) (M.pp (64, 108)), 108)
//})
//
//test ('set pressure message property', t => {
//  t.deepEqual (set (T.pressure) (108) (M.off (64, 96)), M.off (64, 96))
//  t.deepEqual (set (T.pressure) (108) (M.pp (64, 96)), M.pp (64, 108))
//  t.deepEqual (set (T.pressure) (108) (M.cp (96)), M.cp (108))
//})
