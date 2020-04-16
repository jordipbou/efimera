import { v4 as uuidv4 } from 'uuid'

export let deepClone = obj => {
	if (obj === null || typeof obj !== "object")
		return obj
	var props = Object.getOwnPropertyDescriptors(obj)
	for (var prop in props) {
		props[prop].value = deepClone(props[prop].value)
	}
	return Object.create(
		Object.getPrototypeOf(obj), 
		props
	)
}

export let copy = (src, dst) => {
	for (let p in src) {
		dst[p] = src[p]
	}

	return dst
}

//// Reactive API
////
//// Sender
////	
//// Receiver
////
//// Transformer
////
//// Transformer creation:
//// from(item) :
////	Creates a transformer object that receives events from item.
////	Item can be:
////		- A MIDIInput
////		- A generic EventTarget
////		- An Effector event
//// transformer.to(item)
////	Connects transformer to item and returns item to continue chaining.
//// transformer.thru(f)
//export let from = (o, evt = '') => {
//	if (o instanceof MIDIInput) {
//		let t = new Transformer()
//		o.addEventListener('midimessage', t.next)
//		t.unsubscription = () => o.removeEventListener('midimessage', t.next)
//		return t
//	} else if (o instanceof EventTarget) {
//		let t = new Tranformer()
//		o.addEventListener(evt, t.next)
//		t.unsubscription = () => o.removeEventListener(evt, t.next)
//		return t
//	} else if (typeof o === 'function') {
//		// Effector Event
//		let t = new Transformer()
//		t.unsubscription = o.watch(t.next)
//		return t
//	}
//}
//
//// TODO: Very interesting, I really like to
//// be able to inject items on the stream.
//// But, how I construct transformers by piping transformers?
//export class Transformer {
//	constructor(transformer = (v, o) => v) {
//		this.observers = {}
//		this.transformer = transformer
//		this.unsubscription = null
//
//		this.subscribe = this.subscribe.bind(this)
//		this.inject = this.inject.bind(this)
//		this.next = this.next.bind(this)
//		this.log = this.log.bind(this)
//	}
//
//	log() {
//		return this.subscribe(console.log)
//	}
//
//	subscribe(next) {
//		let uuid = uuidv4()
//		this.observers[uuid] = next
//
//		return () => delete this.observers[uuid]
//	}
//
//	to(o) {
//		if (typeof o === 'function') {
//			this.subscribe(o)
//		} else if (o instanceof MIDIOutput) {
//			this.subscribe((v) => o.send(v.data))
//		} else if (o instanceof Transformer) {
//			this.subscribe(o.next)
//		}
//
//		return o
//	}
//
//	unsubscribe(next) {
//		for (let uuid in this.observers)
//			if (this.observers[uuid] === next)
//				delete this.observers[uuid]
//	}
//
//	disconnect() {
//		if (this.unsubscription !== null) this.unsubscription()
//	}
//
//	next(v) {
//		let r = this.transformer(v, this)
//		if (r !== undefined) this.inject(r)
//	}
//
//	inject(...args) {
//		for (let a of args) 
//			for (let o in this.observers) 
//				this.observers[o](a)
//	}
//}
//
//// Estudio sobre una forma super sencilla de crear funciones 
//// con continuaciones, que se ejecutan como streams (push)
////
//// inc(dup(add()))(5)
//// 
//// var inc = (next) => (v) => next !== undefined ? next(v + 1) : v + 1
//// var dup = (next) => (v) => next !== undefined ? next([v, v]) : [v, v]
//// var add = (next) => (v) => next !== undefined ? next(v[0] + v[1]) : v[0] + v[1]
//
////var inc = (a) => a + 1
////var dup = (a) => [a, a]
////var add = (a) => a[0] + a[1]
////
////var lift = (f) => (next) => (v) => next(f(v))
////var comp = (f1, f2, f3) => (v) => lift(f1)(lift(f2)(f3))
////
////lift(inc)(lift(dup)(add))(5)
////
////comp(inc, dup, add)(5)
////
//export let inc = (a) => a + 1
//export let dup = (a) => [a, a]
//export let add = (a, b) => a + b
//
//export let log = (a) => { console.log(a); return a; }
//
//export let spread = (f) => (v) => f(...v.slice(0, f.length))
//
//export let lift = (f) => (next) => next !== undefined ? (v) => next(f(v)) : f
//export let comp = 
//	(f1, f2, f3, f4, f5, f6, f7, f8, f9) => 
//		lift(f1)(lift(f2)(lift(f3)(lift(f4)(lift(f5)(lift(f6)(lift(f7)(lift(f8)(f9))))))))
//
//export let _ = lift
//export let xcomp = (f1, f2, f3, f4, f5, f6, f7, f8, f9) => f1(f2(f3(f4(f5(f6(f7(f8(f9))))))))
