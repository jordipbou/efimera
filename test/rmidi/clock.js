const test = require ('ava')
const { map, prop } = require ('ramda')
const { lookAheadTicks, lookAheadClock } = require ('../../src/rmidi/clock.js')

test ('lookAheadClock', t => {
  t.deepEqual 
    (map (prop ('timeStamp')) 
         (lookAheadClock (1000, 60, 10, 0, null)),
     [1, 2, 3, 4, 5, 6, 7, 8, 9])
})
