import './rxmusic_defs.js'
import { generate, of } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

export let pattern = 
	() => {
		let p = [root, m3, P5]
		let n = 2
		let f = 1 
		return mergeMap(
			d => {
				n = (n + 1) % p.length
				f = (f + 19) % p.length
				return of(off(p[f] + 48), on(p[n] + 48))
			})}
		

