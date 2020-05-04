import './rxmusic_defs.js'
import { generate, of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'
import * as R from 'ramda'

export let getPatternTimeDivision =
	p => {
		if (R.type(p) !== 'Array') {
			return 1
		} else if (R.length(R.filter(v => R.type(v) === 'Array', p)) === 0) {
			return R.length(p)
		} else {
			return R.pipe(
				R.map(v => getPatternTimeDivision(v)),
				R.reduce(R.multiply, 1),
				R.multiply(R.length(p))
			)(p)
		}
	}
	
export let getPatternEvents =
	(p, td) => {
		if (R.type(p) !== 'Array') {
			return [on(p, 96), off(p, 96, 0, 0, td)]
		} else {
			return R.flatten(R.map(v => getPatternEvents(v, td / R.length(p)), p))
		}
	}
	
export let pattern =
	p => {
		let timeDivision = getPatternTimeDivision(p)

		return [getPatternEvents(p, timeDivision), timeDivision]
	}
