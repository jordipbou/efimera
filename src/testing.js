import * as R from 'ramda'

let diff = (a, b) => {
	if (R.type(a) !== R.type(b)) {
		return ["type(", R.type(a), ") !== type(", R.type(b), ")"]
	} else {
		return ["Can't give more info"]
	}
}

let error_if = (cond, n, msg1, msg2, msg3) => {
	if (cond) {
		console.error('FAIL :: ' + n)
		if (msg1 !== undefined) console.log(...msg1)
		if (msg2 !== undefined) console.log(...msg2)
		if (msg3 !== undefined) console.log(...msg3)
		throw new Error
	}
}

export let test = (n, f) => {
	let test_context = {
		assert: i => { 
			return {
				isEqual: o => error_if(!R.equals(i, o), n, ["", i, " should be EQUAL to ", o], [...diff(i, o)]),
				isNotNull: () => error_if(i === null, n, ["", i, " should be not NULL"]),
				isPromise: () => error_if(!R.is(Promise, i), n, ["", i, " should be a PROMISE"]),
				is: t => error_if(!R.is(t, i), n, ["", i, " should be of type ", t]),
			}
		}
	}

	try {
		f(test_context)
		console.log('✓ ' + n)
	} catch (error) {
		console.error(error)
		return false
	}
	return true
}

export let suite = (suite_name, suite_function) => {
	console.log(':::: ' + suite_name + ' ::::')

	let suite_context = {
		setup: () => { /* do nothing */ },
		tearDown: () => { /* do nothing */ },
		test: function (test_name, test_function) {
			let ctx = {}
			this.setup(ctx)
			test(test_name, test_function(ctx))
			this.tearDown(ctx)
		}
	}

	suite_function(suite_context)
}
