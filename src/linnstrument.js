import { Subject, of, pipe, from } from 'rxjs'
import { concatAll, filter, map, skip, tap } from 'rxjs/operators'
import { cc, msg, nrpn, isNoteOn } from './rmidi/main.js'

export let linnColors = {
	off: 0,
	red: 1,
	yellow: 2,
	green: 3,
	cyan: 4,
	blue: 5,
	magenta: 6,
	black: 7,
	white: 8,
	orange: 9,
	lime: 10,
	pink: 11
}

export let userModeOn = () => nrpn(245, 1)
export let userModeOff = () => nrpn(245, 0)
export let xSlideOn = r => cc(9, 1, r)
export let xSlideOff = r => cc(9, 0, r)
export let xDataOn = r => cc(10, 1, r)
export let xDataOff = r => cc(10, 0, r)
export let yDataOn = r => cc(11, 1, r)
export let yDataOff = r => cc(11, 0, r)
export let zDataOn = r => cc(12, 1, r)
export let zDataOff = r => cc(12, 0, r)
export let dataDecimation = t => cc(13, t)
export let setCellColor = (x, y, c) => of(cc(20, x), cc(21, y), cc(22, c))

// Utilities
export let clear = 
	(c = linnColors.off) => {
		let r = []
		for (let i = 0; i <= 16; i++) {
			for (let j = 0; j < 8; j++) {
				r.push(setCellColor(i, j, c))
			}
		}

		return from(r).pipe(concatAll())
	}

export class LinnState {
	constructor() {
		this.cells = []
		this.prevCells = []
		for (let i = 0; i <=16; i++) {
			this.cells.push([0, 0, 0, 0, 0, 0, 0, 0])
			this.prevCells.push([0, 0, 0, 0, 0, 0, 0, 0])
		}
	}

	clear() {
		for (let i = 0; i <= 16; i++) {
			for (let j = 0; j < 8; j++) {
				this.cells[i][j] = 0
			}
		}
	}

	commit() {
		let msgs = []

		for (let i = 0; i <= 16; i++) {
			for (let j = 0; j < 8; j++) {
				if (this.cells[i][j] !== this.prevCells[i][j]) {
					msgs.push(setCellColor(i, j, this.cells[i][j]))
					this.prevCells[i][j] = this.cells[i][j]
				}
			}
		}

		return from(msgs).pipe(concatAll())
	}

	drawRectangle(x, y, w, h, color) {
		for (let i = x; i < x + w; i++) {
			for (let j = y; j < y + h; j++) {
				this.cells[i][j] = color
			}
		}
	}

	drawFaderV(x, y, h, v, fg, bg = linnColors.black) {
		this.drawRectangle(x, y, 1, v, fg)
		this.drawRectangle(x, y + v, 1, h - v, bg)
	}

	drawFaderH(x, y, w, v, fg, bg = linnColors.black) {
		this.drawRectangle(x, y, v, 1, fg)
		this.drawRectangle(x + v, y, w - v, 1, bg)
	}

	drawDrawbar(x, y, h, v, fg, bg = linnColors.black) {
		this.drawRectangle(x, y - h + 1, 1, h - v, bg)
		this.drawRectangle(x, y - v + 1, 1, v, fg)
	}
	
}

export let getCoords = 
	a => {
		if (isNoteOn(a)) {
			return [a.data[1], (a.data[0] & 0xF)]
		} else {
			return [null, null]
		}
	}

// TODO: Different strategies to change this:
// * Return two observables from VB3IIController to listen to lsout and vb3out
// * Return VB3IIState and use two functions, commit for lsout and commitVB3 for vb3out
// * Don't inject state in chain and use external stores (I like this one, I don't like sending state),
//   as JS is not multi-thread, there will never be two options.
export class VB3IIState extends LinnState {
	constructor() {
		super()

		this.volume = 0 			// CC 7 0-127
		this.drive = 0 				// CC 76 0-127
		this.reverb = 0 			// CC 91 0-127
		this.keyclick = 0 			// CC 75 0-127
		this.bass = 0 				// CC 8 0-127
		this.treble = 0 			// CC 10 0-127
		this.drawbarsUpper = [0, 0, 0, 0, 0, 0, 0, 0, 0] // CC 12 ~ 20 0-127
		this.drawbarsLower = [0, 0, 0, 0, 0, 0, 0, 0, 0] // CC 21 ~ 29 0-127
		this.drawbarsPedals = [0, 0] // CC 33,35 0-127
		this.vibratoType = 0 		// CC 73 0, 27, 52, 78, 102, 127
		this.vibratoUpper = 0 		// CC 31 0, 127
		this.vibratoLower = 0 		// CC 30 0, 127
		this.percussionOn = 0 		// CC 66 0, 127
		this.percussionSoft = 0 	// CC 70 0, 127
		this.percussionFast = 0 	// CC 71 0, 127
		this.percussionThird = 0 	// CC 72 0, 127
		this.swellPedal = 0 		// CC 11 0, 127
		this.rotarySwitch = 0 		// CC 85 0, 127
		this.rotaryVelocity = 0 	// CC 1 <32 slow, >95 fast, middle stop
		this.rotaryRun = 0 			// CC 68, 0 = stop, 127 = run

		this.selectedDrawbars = this.drawbarsUpper

		this.bg1 = linnColors.black
		this.bg2 = linnColors.red
		this.bg3 = linnColors.orange
		this.fg1 = linnColors.white
		this.fg2 = linnColors.cyan
		this.fg3 = linnColors.green
	}

	draw() {
		this.drawDrawbar(1, 7, 8, this.selectedDrawbars[0], this.fg2, this.bg2)
		this.drawDrawbar(2, 7, 8, this.selectedDrawbars[1], this.fg2, this.bg2)
		this.drawDrawbar(3, 7, 8, this.selectedDrawbars[2], this.fg1, this.bg1)
		this.drawDrawbar(4, 7, 8, this.selectedDrawbars[3], this.fg1, this.bg1)
		this.drawDrawbar(5, 7, 8, this.selectedDrawbars[4], this.fg2, this.bg2)
		this.drawDrawbar(6, 7, 8, this.selectedDrawbars[5], this.fg1, this.bg1)
		this.drawDrawbar(7, 7, 8, this.selectedDrawbars[6], this.fg2, this.bg2)
		this.drawDrawbar(8, 7, 8, this.selectedDrawbars[7], this.fg2, this.bg2)
		this.drawDrawbar(9, 7, 8, this.selectedDrawbars[8], this.fg1, this.bg1)
		// drawbar selector and drawbar link
		if (this.selectedDrawbars === this.drawbarsUpper) {
			this.cells[10][7] = this.fg3
			this.cells[10][6] = this.bg1
		} else {
			this.cells[10][7] = this.bg1
			this.cells[10][6] = this.fg3
		}
		// pedal drawbars
		this.drawDrawbar(11, 7, 8, this.drawbarsPedals[0], this.fg2, this.bg2)
		this.drawDrawbar(12, 7, 8, this.drawbarsPedals[1], this.fg2, this.bg2)
		// chorus/vibrato
		this.cells[13][7] = this.vibratoUpper ? linnColors.magenta : linnColors.orange
		this.cells[13][6] = this.vibratoLower ? linnColors.magenta : linnColors.orange
		this.cells[13][5] = this.vibratoType === 0 ? linnColors.green : linnColors.black
		this.cells[13][4] = this.vibratoType === 1 ? linnColors.green : linnColors.black
		this.cells[13][3] = this.vibratoType === 2 ? linnColors.green : linnColors.black
		this.cells[13][2] = this.vibratoType === 3 ? linnColors.green : linnColors.black
		this.cells[13][1] = this.vibratoType === 4 ? linnColors.green : linnColors.black
		this.cells[13][0] = this.vibratoType === 5 ? linnColors.green : linnColors.black
		// percussion, volumes, etc...
		this.cells[14][7] = this.percussionOn ? linnColors.magenta : linnColors.orange
		this.cells[14][6] = this.percussionSoft ? linnColors.magenta : linnColors.orange
		this.cells[14][5] = this.percussionFast ? linnColors.magenta : linnColors.orange
		this.cells[14][4] = this.percussionThird ? linnColors.magenta : linnColors.orange
		// drive
		this.drawFaderV(15, 0, 8, this.drive + 1, linnColors.green)
		// volume
		this.drawFaderV(16, 0, 8, this.volume + 1, linnColors.green)

		return this.commit()
	}
}

// TODO: No funciona bé, i no treu res per VB3out
export let VB3IIController = 
	(state) => {
		let lsout = new Subject();
		let vb3out = new Subject();

		let p =
			pipe(
				combineState(state),
				filter(isNoteOn),
				map(d => {
					let [x, y] = getCoords(d)
					if (x >= 1 && x <= 9) {
						// Upper/Lower drawbars
						let v = 8 - y
						if (y === 7) {
							if (d.state.selectedDrawbars[x - 1] === 0) {
								v = 1
							} else {
								v = 0
							}
						}
	
						d.state.selectedDrawbars[x - 1] = v
						if (d.state.selectedDrawbars === d.state.drawbarsUpper) {
							vb3out.next(cc(12 + (x - 1), (v/8) * 127))
						} else {
							vb3out.next(cc(21 + (x - 1), (v/8) * 127))
						}
					}
	
					if (x === 10) {
						if (y === 7) {
							d.state.selectedDrawbars = d.state.drawbarsUpper
						} else if (y === 6) {
							d.state.selectedDrawbars = d.state.drawbarsLower
						}
					}
	
					if (x === 11 || x === 12) {
						// Pedal drawbars
						let v = 8 - y
						if (y === 7) {
							if (d.state.drawbarsPedals[x - 11] === 0) {
								v = 1
							} else {
								v = 0
							}
						}
	
						d.state.drawbarsPedals[x - 11] = v
						if (x === 11) {
							vb3out.next(cc(33, (v/8) * 127))
						} else {
							vb3out.next(cc(35, (v/8) * 127))
						}
					}
	
					if (x === 13) {
						if (y === 7) {
							d.state.vibratoUpper = 1 - d.state.vibratoUpper
							vb3out.next(cc(31, d.state.vibratoUpper * 127))
						} else if (y === 6) {
							d.state.vibratoLower = 1 - d.state.vibratoLower
							vb3out.next(cc(30, d.state.vibratoLower * 127))
						} else {
							let values = [0, 27, 52, 78, 102, 127]
							d.state.vibratoType = 5 - y
							vb3out.next(cc(73, values[5 - y]))
						}
					}
	
					if (x === 14) {
						// Percussion
						if (y === 7) {
							d.state.percussionOn = 1 - d.state.percussionOn
							vb3out.next(cc(66, d.state.percussionOn * 127))
						} else if (y === 6) {
							d.state.percussionSoft = 1 - d.state.percussionSoft
							vb3out.next(cc(70, d.state.percussionSoft * 127))
						} else if (y === 5) {
							d.state.percussionFast = 1 - d.state.percussionFast
							vb3out.next(cc(71, d.state.percussionFast * 127))
						} else if (y === 4) {
							d.state.percussionThird = 1 - d.state.percussionThird
							vb3out.next(cc(72, d.state.percussionThird * 127))
						}
					}
	
					if (x === 15) {
						// Drive
						d.state.drive = y
						vb3out.next(cc(76, (127 / 7) * y))
					}
	
					if (x === 16) {
						// Volume
						d.state.volume = y
						vb3out.next(cc(7, (127 / 7) * y))
					}

					return d
				}),
				saveState(state),
				tap(d => lsout.next(d.state.draw()))
			)

		return [p, lsout, vb3out]
	}
