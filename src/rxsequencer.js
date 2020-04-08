export class RxSequencer {
	constructor(initialData = [], loop = false) {
		this.queue = initialData
		this.current = null
		this.loop = loop
	}

	add(item, index = undefined) {
		if (index === undefined) {
			this.queue.push(item)
		} else {
			this.queue.splice(index, 0, item)
		}
	}

	remove(index) {
		this.queue.splice(index, 1)
	}

	clear() {
		this.queue = []
	}

	next() {
		// TODO: When items have time or deltas associated,
		// should next return all with same time?
		if (this.current === null) {
			if (this.queue.length > 0) {
				this.current = 0
			} else {
				return undefined
			}
		} else {
			if (this.current >= (this.queue.length - 1)) {
				if (this.loop) {
					this.current = 0
				} else {
					this.current = this.queue.length
					return undefined
				}
			} else {
				this.current = this.current + 1
			}
		}

		return this.queue[this.current]
	}

	prev() {
		if (this.current === null) {
			if (this.queue.length > 0 && this.loop) {
				this.current = this.queue.length - 1
			} else {
				return undefined
			}
		} else {
			if (this.current <= 0) {
				if (this.loop) {
					this.current = this.queue.lenth - 1
				} else {
					this.current = null
					return undefined
				}
			} else {
				this.current = this.current - 1
			}
		}

		return this.queue[this.current]
	}
}
