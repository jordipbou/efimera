/// Things to have in mind:
/// A normal function can be lifted to work with a stack.
/// A normal function should not have idea of series of events.
/// An emitter function should receive an emitter and always emit (not return) its events, it should be mapped
/// to an event.
/// An async function should receive an emitter and emit the events returned from the function.
/// An async emitter function should receive an emitter and emit (not return) the events.

export let swap = (a, b) => [b, a]
export let dup = (a) => [a, a]
export let over = (a, b) => [b, a, b]
export let rot = (a, b, c) => [b, c, a]
export let drop = (a) => []

// "COMPiles" any JS function to be used as a Forth word,
// passing an stack of items mapped to function parameters and
// the rest returned after the result of the function.
export let comp = (f) => {
	// .flat() is used to ensure functions that return just one
	// value and those that return one array of values are treated
	// the same.
	switch (f.length) {
	case 0: return (...args) => [...[f()].flat(), ...args];
	case 1: return (a, ...args) => [...[f(a)].flat(), ...args];
	case 2: return (a, b, ...args) => [...[f(a, b)].flat(), ...args];
	case 3: return (a, b, c, ...args) => [...[f(a, b, c)].flat(), ...args];
	case 4: return (a, b, c, d, ...args) => [...[f(a, b, c, d)].flat(), ...args];
	}
}

// How to inject elements from a function ?!

export let chain = (f, g) => (...args) => ( lift(g) (...(lift(f)(...args))) )

// To be able to do asynchronous event chain modifications,
// each function should receive the rest of the chain and execute itself,
// if it's doing an asynchronous thing, than it just executes a promise.

export let liftT1 = (f) => (evs) => evs.map(v => liftS1(f)(...v))
export let liftT2 = (f) => (evs) => evs.map(v => liftS2(f)(...v))
export let liftT3 = (f) => (evs) => evs.map(v => liftS3(f)(...v))
export let liftT4 = (f) => (evs) => evs.map(v => liftS4(f)(...v))
export let liftT5 = (f) => (evs) => evs.map(v => liftS5(f)(...v))


// like liftTX(f2).then(liftTX(f1))

export let pipe = 
	(f1, f2 = undefined, f3 = undefined, f4 = undefined, f5 = undefined,
	 f6 = undefined, f7 = undefined, f8 = undefined, f9 = undefined) => {
		if (f9 !== undefined) {
			return (evs) => f9(f8(f7(f6(f5(f4(f3(f2(f1(evs)))))))))
		} else if (f8 !== undefined) {
			return (evs) => f8(f7(f6(f5(f4(f3(f2(f1(evs))))))))
		} else if (f7 !== undefined) {
			return (evs) => f7(f6(f5(f4(f3(f2(f1(evs)))))))
		} else if (f6 !== undefined) {
			return (evs) => f6(f5(f4(f3(f2(f1(evs))))))
		} else if (f5 !== undefined) {
			return (evs) => f5(f4(f3(f2(f1(evs)))))
		} else if (f4 !== undefined) {
			return (evs) => f4(f3(f2(f1(evs))))
		} else if (f3 !== undefined) {
			return (evs) => f3(f2(f1(evs)))
		} else if (f2 !== undefined) {
			return (evs) => f2(f1(evs))
		} else {
			return (evs) => f1(evs)
		}
	}
