const test = require ('ava')
const { add, view, set, over } = require ('ramda')
const { 
  cc, mc, off, on, pp 
} = require ('../../src/rmidi/messages.js')
const { channel, note } = require ('../../src/rmidi/lenses.js')

test ('channel lens', t => {
  t.is (view (channel) (off (64)), 0)
  t.is (view (channel) (on (64, 96, 1)), 1)
  t.is (view (channel) (mc ()), undefined)

  t.deepEqual (set (channel) (3) (off (64)), off (64, 96, 3))

  t.deepEqual (over (channel) (add (1)) (off (64)), off (64, 96, 1))
})

test ('note lens', t => {
  t.is (view (note) (off (64)), 64)
  t.is (view (note) (on (64)), 64)
  t.is (view (note) (pp (64)), 64)
  t.is (view (note) (cc (32, 18)), undefined)

  t.deepEqual (set (note) (50) (off (64)), off (50))
  t.deepEqual (set (note) (50) (on (64)), on (50))
  t.deepEqual (set (note) (50) (pp (64)), pp (50))
  t.deepEqual (set (note) (50) (cc (32, 18)), cc (32, 18))

  t.deepEqual (over (note) (add (3)) (off (64)), off (67))
  t.deepEqual (over (note) (add (3)) (on (64)), on (67))
  t.deepEqual (over (note) (add (-3)) (pp (64)), pp (61))
  t.deepEqual (over (note) (add (3)) (cc (32, 18)), cc (32, 18))
})

