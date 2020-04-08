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
export let setCellColor = (x, y, c) => [...cc(20, x), ...cc(21, y), ...cc(22, c)]

// Utilities
export let clear = 
	(c = linnColors.off) => {
		let r = []
		for (let i = 0; i <= 16; i++) {
			for (let j = 0; j < 8; j++) {
				r = r.concat(setCellColor(i, j, c))
			}
		}

		return r
	}

export let linnState = 
	() => {
		let cells = []
		let prevCells = []
		for (let i = 0; i <=16; i++) {
			cells.push([0, 0, 0, 0, 0, 0, 0, 0])
			prevCells.push([0, 0, 0, 0, 0, 0, 0, 0])
		}

		let state = {
			prevCells: prevCells,
			cells: cells,
			clear: () => {
				for (let i = 0; i <= 16; i++) {
					for (let j = 0; j < 8; j++) {
						state.cells[i][j] = 0
					}
				}
			},
			commit: () => {
				let msgs = []

				for (let i = 0; i <= 16; i++) {
					for (let j = 0; j < 8; j++) {
						if (cells[i][j] !== prevCells[i][j]) {
							msgs = msgs.concat(setCellColor(i, j, cells[i][j]))
							prevCells[i][j] = cells[i][j]
						}
					}
				}

				return msgs
			}
		}

		return state
	}

export let getCoords = 
	a => {
		if (isNoteOn(a)) {
			return [a.data[1], (a.data[0] & 0xF)]
		} else {
			return [null, null]
		}
	}

// TODO: Add utilities for working with zones (rectangles)
// like filtering, drawing, drawbars, etc.
