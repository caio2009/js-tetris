/**
* This class represents the base for the concrete Figures, like a Square, for example.
* This class is a model for be implemented.
*/
class Figure {
	constructor() {
		this.blockspos = this.blocksPosition()
		this.blocks = this.initBlocks()

		this.line = 0
		this.col = 0
		this._color = "white" // default color
		this.angle = 0

		this.setPosition(this.line, this.col)
		this.color(this._color)
	}

	blocksPosition() {
		// * This method will be implemented * //
	}

	initBlocks() {
		let array = []

		for (let i = 0; i < this.blockspos.length; i++) {
			array.push(new Block(20))
		}

		return array
	}

	setPosition(line, col) {
		this.line = line
		this.col = col

		for (let i = 0; i < this.blocks.length; i++) {
			this.blocks[i].setPosition(this.blockspos[i].line + this.line, this.blockspos[i].col + this.col)
		}
	}

	color(color) {
		this._color = color
		this.blocks.forEach(block => block.color(color))
	}

	// Move the figure down
	down() {
		this.setPosition(this.line + 1, this.col)
	}

	// Move the figure right
	right() {
		this.setPosition(this.line, this.col + 1)
	}

	// Move the figure left
	left() {
		this.setPosition(this.line, this.col - 1)
	}

	angleOne() {
		// * This method will be implemented * //
	}

	angleTwo() {
		// * This method will be implemented * //
	}

	angleThree() {
		// * This method will be implemented * //
	}

	angleFour() {
		// * This method will be implemented * //
	}

	rotate() {
		switch(this.angle) {
			case 0:
				this.blockspos = this.angleTwo()
				this.setPosition(this.line, this.col)
				this.angle = 1
			break

			case 1:
				this.blockspos = this.angleThree()
				this.setPosition(this.line, this.col)
				this.angle = 2
			break

			case 2:
				this.blockspos = this.angleFour()
				this.setPosition(this.line, this.col)
				this.angle = 3
			break

			case 3:
				this.blockspos = this.angleOne()
				this.setPosition(this.line, this.col)
				this.angle = 0
			break
		}
	}

	get matrix() {
		let lines = this.blocksPosition.reduce((p1, p2) => {
			if (p1.line > p2.line) return p1.line
			return p2.line
		}) + 1

		let cols = this.blocksPosition.reduce((p1, p2) => {
			if (p1.col > p2.col) return p1.col
			return p2.col
		}) + 1

		return {lines, cols}
	}
}