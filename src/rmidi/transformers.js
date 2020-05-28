import {
  add, always, cond, curry, ifElse, lensPath, map, 
  over, set, slice, T, tail, view, when
} from 'ramda'
import * as P from './predicates.js'

// --------------- MIDI Message Modification Helpers ---------------

export let now = Symbol()

export let getTimeStamp = (msg) =>
  msg.timeStamp

export let setTimeStamp = curry ((t, msg) => ({
  type: 'midimessage',
  timeStamp: t === now ? performance.now() : t,
  deltaTime: msg.deltaTime,
  data: [ ...msg.data ]
}))

export let getDeltaTime = (msg) =>
  msg.deltaTime

export let setDeltaTime = curry ((d, msg) => ({
  type: 'midimessage',
  timeStamp: msg.timeStamp,
  deltaTime: d,
  data: [ ...msg.data ]
}))

export let getByte = curry ((n, msg) =>
  msg.data [n] 
)

export let setByte = curry ((n, v, msg) => ({
  ...msg,
  data: [
    ...slice (0, n, msg.data), 
    v, 
    ...slice (n + 1, Infinity, msg.data)
  ]
}))

export let delay = curry ((t, msg) =>
({
  type: 'midimessage',
  timeStamp: msg.timeStamp + t,
  deltaTime: msg.deltaTime,
  data: [ ...msg.data ]
}))

// ------------------- Channel Voice messages ----------------------

export let toChannel = curry ((ch, msg) =>
  P.isChannelMessage (msg) ?
    setByte (0) ((getByte (0, msg) & 0xF0) + ch) (msg)
    : msg 
)

export let mapChannel = curry ((chin, chout, msg) =>
  P.isOnChannel (chin) (msg) ?
    toChannel (chout) (msg)
    : msg )

export let mapChannels = curry ((chsin, chsout, msg) =>
  P.isOnChannels (chsin) (msg) ?
    map (chout => toChannel (chout) (msg)) (chsout)
    : [ msg ] )

// --------------- MIDI Messages properties lenses -----------------

export let note = (msg) => 
  P.hasNote (msg) ? lensPath (['data', 1]) : lensPath ()

export let velocity = (msg) => 
  P.hasVelocity (msg) ? lensPath (['data', 2]) : lensPath ()

export let pressure = (msg) => 
  P.isPolyPressure (msg) ?
    lensPath (['data', 2])
    : P.isChannelPressure (msg) ?
      lensPath (['data', 1])
      : lensPath ()

export let getP = curry ((l, msg) => 
  view (l (msg)) (msg)
)

export let setP = curry ((l, v, msg) => 
  set (l (msg)) (v) (msg) || msg
)

// ---------------------- Transformers -----------------------------

export let transpose = curry ((l, d, msg) => 
  over (l) (add (d)) (msg)
//  setP (l) (getP (l, msg) + d) (msg)
)
