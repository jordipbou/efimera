import { isChannelMessage, hasNote, hasVelocity } from './predicates.js'
import { getChannelFromData0If, getData1If, getData2If } from './internal/getters.js'

export let getChannel = getChannelFromData0If (isChannelMessage)
export let getNote = getData1If (hasNote)
export let getVelocity = getData2If (hasVelocity)
