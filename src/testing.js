import * as R from 'ramda'

let diff = (a, b) => {
	if (R.type(a) !== R.type(b)) {
		return ["type(", R.type(a), ") !== type(", R.type(b), ")"]
	} else {
		return ["Can't give more info"]
	}
}

let assertions = (i, n) => {
	return {
		isTrue: o => error_if(i, i !== true, n, ["", i, " should be true"]),
		isFalse: o => error_if(i, i !== false, n, ["", i, " should be false"]),
		isEqual: o => error_if(i, !R.equals(i, o), n, ["", i, " should be equal to ", o], [...diff(i, o)]),
		isNotEqual: o => error_if(i, R.equals(i, o), n, ["", i, " should NOT be equal to ", o]),
		isIdentical: o => error_if(i, !R.identical(i, o), n, ["", i, " should be identical to ", o]),
		isNotIdentical: o => error_if(i, R.identical(i, o), n, ["", i, " should NOT be identical to ", o]),
		isNotNull: () => error_if(i, i === null, n, ["", i, " should be not null"]),
		isPromise: () => error_if(i, !R.is(Promise, i), n, ["", i, " should be a Promise"]),
		isFunc: () => error_if(i, !R.is(Function, i), n, ["", i, " should be a Function"]),
		is: t => error_if(i, !R.is(t, i), n, ["", i, " should be of type ", t]),
		propEq: (p, v) => error_if(i, !R.propEq(p, v, i), n, ["", i, " should have prop ", p, " equal to ", v]),
		prop: p => assertions(R.prop(p, i), n)
	}
}

let error_if = (i, cond, n, msg1, msg2, msg3) => {
	if (cond) {
		console.error('FAIL :: ' + n)
		if (msg1 !== undefined) console.log(...msg1)
		if (msg2 !== undefined) console.log(...msg2)
		if (msg3 !== undefined) console.log(...msg3)
		throw new Error
	}

	return assertions(i)
}

export let test = (n, f) => {
	let test_context = {
		assert: i => { 
			return assertions(i, n)
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

export let toArray = o => {
	let r = []
	let end = false
	while (!end) {
		o.subscribe(
			v => r.push(v),
			e => {},
			() => { end = true }
		)
	}

	return r
}
