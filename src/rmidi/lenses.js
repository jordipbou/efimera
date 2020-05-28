import { 
  isChannelMessage, hasNote, hasVelocity 
} from './predicates.js'
import { curry, lens, slice } from 'ramda'

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

let lensIf = curry ((p, v, s) =>
  lens (
    (msg) => p (msg) ? v (msg) : undefined,
    (v, msg) => p (msg) ? s (v, msg) : msg)
)

export let channel =
  lensIf (isChannelMessage) 
         ((m) => getByte (0) (m) & 0xF)
         ((v, m) => setByte (0) ((getByte (0, m) & 0xF0) + v) (m))

export let note =
  lensIf (hasNote) (getByte (1)) (setByte (1))

export let velocity =
  lensIf (hasVelocity) (getByte (1)) (setByte (1))
