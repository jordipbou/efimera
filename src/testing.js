import * as R from 'ramda'

let diff = (a, b) => {
	if (R.type(a) !== R.type(b)) {
		return ["type(", R.type(a), ") !== type(", R.type(b), ")"]
	} else {
		return "Can't give more info"
	}
}

export let test = (n, f) => {
	let ctx = {
		assert: i => { 
			return {
				equals: o => {
					if (!R.equals(i, o)) {
						console.error('FAIL :: ' + n)
						console.log("", i, " is not equal to ", o)
						console.log(...diff(i, o))
						throw new Error
					}
				}
			}
		}
	}

	try {
		f(ctx)
		console.log('✓ ' + n)
	} catch (error) {
	}
}


