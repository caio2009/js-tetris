/**
* The class Game has the role to manage the elements that
* make up the game.
*/
class Game {
	constructor() {
		this.container = new Container(20, 10, 20)
		this.moveInterval = null
		this.isNewFigure = true
		// this.isStopped = false
		this.resolveTimeout = null
		this.lastRandom = null
	}

	async run() {
		// console.log("isNewFigure:", this.isNewFigure) * debug * //

		if (this.isNewFigure) {
			let figure = this.randomFigure()

			this.container.add(figure)
		}

		let stop = await this.moveFigureDown()

		// console.log("stop", stop) * debug * //

		if (stop) {
			this.isNewFigure = true
			this.container.updateGrade()
			this.manageLines()
		} else {
			this.isNewFigure = false
		}

		return this.run()
	}

	get currentFigure() {
		return this.container.currentFigure
	}

	moveFigureDown(keydown = false) {
		return new Promise((resolve, reject) => {
			clearInterval(this.moveInterval)
			clearTimeout(this.resolveTimeout)

			// User press down arrow
			if (keydown) {
				if (!this.container.isDownLimit()) {
					this.currentFigure.down()
				}

				if (this.container.isDownLimit()) {
					this.resolveTimeout = setTimeout(() => { resolve(true) }, 1 * 1000)
				} else {
					resolve(false)
				}
			} else {
				// This is the automatic movement
				this.moveInterval = setInterval(() => {
					if (!this.container.isDownLimit()) {
						this.currentFigure.down()
					}

					if (this.container.isDownLimit()) {
						clearInterval(this.moveInterval)
						this.resolveTimeout = setTimeout(() => { resolve(true) }, 1 * 1000)
					}
				}, 1 * 1000)
			}
		})
	}

	moveFigureRight() {
		let isDownLimit = this.container.isDownLimit()

		if (!this.container.isRightLimit()) {
			this.currentFigure.right()
		}

		if (isDownLimit) {
			this.isNewFigure = false
			return this.run()
		}
	}

	moveFigureLeft() {
		let isDownLimit = this.container.isDownLimit()

		if (!this.container.isLeftLimit()) {
			this.currentFigure.left()
		}

		if (isDownLimit) {
			this.isNewFigure = false
			return this.run()
		}
	}

	async rotateFigure() {
		if (this.currentFigure instanceof Square) return 

		// It is needed that the down limit is 	treated here because
		// the isDownLimit variable is used to rerun the run method
		let isDownLimit = false
		if (this.container.isDownLimit()) {
			isDownLimit = true
		}

		if (this.currentFigure instanceof T) {
			if ((this.currentFigure.angle == 0 || this.currentFigure.angle == 2) && this.container.isDownLimit()) {
				this.currentFigure.setPosition(this.currentFigure.line - 1, this.currentFigure.col)
			}
			this.rotateT()
		}

		if (this.currentFigure instanceof S) {
			if ((this.currentFigure.angle == 0 || this.currentFigure.angle == 2) && this.container.isDownLimit()) {
				this.currentFigure.setPosition(this.currentFigure.line - 1, this.currentFigure.col)
			}
			this.rotateS()
		}

		if (this.currentFigure instanceof InverseS) {
			if ((this.currentFigure.angle == 0 || this.currentFigure.angle == 2) && this.container.isDownLimit()) {
				this.currentFigure.setPosition(this.currentFigure.line - 1, this.currentFigure.col)
			}
			this.rotateInverseS()
		}

		if (this.currentFigure instanceof L) {
			if ((this.currentFigure.angle == 0 || this.currentFigure.angle == 2) && this.container.isDownLimit()) {
				this.currentFigure.setPosition(this.currentFigure.line - 1, this.currentFigure.col)
			}
			this.rotateL()
		}

		if (this.currentFigure instanceof InverseL) {
			if ((this.currentFigure.angle == 0 || this.currentFigure.angle == 2) && this.container.isDownLimit()) {
				this.currentFigure.setPosition(this.currentFigure.line - 1, this.currentFigure.col)
				isDownLimit = true
			}
			this.rotateInverseL()
		}


		if (this.currentFigure instanceof I) {
			if ((this.currentFigure.angle == 1 || this.currentFigure.angle == 3) && this.container.isDownLimit(1)) {
				this.currentFigure.setPosition(this.currentFigure.line - 3, this.currentFigure.col)
			}
			if ((this.currentFigure.angle == 1 || this.currentFigure.angle == 3) && this.container.isDownLimit(2)) {
				this.currentFigure.setPosition(this.currentFigure.line - 2, this.currentFigure.col)
				isDownLimit = true
			}
			if ((this.currentFigure.angle == 1 || this.currentFigure.angle == 3) && this.container.isDownLimit(3)) {
				this.currentFigure.setPosition(this.currentFigure.line - 1, this.currentFigure.col)
				isDownLimit = true
			}
			this.rotateI()
		}

		if (isDownLimit) {
			// run again to update the time of the new figure
			this.isNewFigure = false
			return this.run()
		}
	}

	// This method has the role to control the removing of the lines
	// on the container
	manageLines() {
		let isBlockRemoved = false
		for (let i = this.container.lines - 1; i >= 0; i--) {
			let isLineComplete = this.container.grade[i].reduce((v1, v2) => v1 && v2)

			if (isLineComplete) {
				// Find blocks to remove
				let blocksToRemove = this.container.blocks.filter(block => block.line == i)
				// Remove blocks from container and grade
				blocksToRemove.forEach(block => { 
					this.container.html.removeChild(block.html)
					this.container.blocks = this.container.blocks.filter(block => !blocksToRemove.includes(block))
					this.container.grade[block.line][block.col] = false
				})
				isBlockRemoved = true
			}
		}

		// Move blocks down
		if (isBlockRemoved) {
			let emptyline = null
			for (let i = this.container.lines - 1; i >= 0; i--) {
				// Find first empty line
				if (!this.container.grade[i].includes(true)) {
					if (!emptyline) {
						emptyline = i
					}
				} else {
					// Move down when only finds the empty line
					if (emptyline) {
						let blocksToMove = this.container.blocks.filter(block => block.line == i)
						blocksToMove.forEach(block => {
							this.container.grade[block.line][block.col] = false
							block.setPosition(emptyline, block.col)
							this.container.grade[block.line][block.col] = true
						})
						emptyline -= 1
					}
				}
			}
		}
	}

	randomFigure() {
		let figure = null

		let random = Math.floor(Math.random() * 7)

		if (random == this.lastRandom) {
			if (random < 6) {
				random += 1
			} else {
				random = 0
			}
		}

		switch(random) {
			case 0:
				figure = new Square()
			break

			case 1:
				figure = new T()
			break

			case 2:
				figure = new S()
			break

			case 3:
				figure = new InverseS()
			break

			case 4:
				figure = new L()
			break

			case 5:
				figure = new InverseL()
			break

			case 6:
				figure = new I()
			break
		}

		this.lastRandom = random

		return figure
	}

	//-+-+-+-+-+-+-+--+-+-+-+-+-+-+- Figure Rotation -+-+-+-+-+-+-+--+-+-+-+-+-+-+-//
	rotateT() {
		let figure = this.currentFigure
		if (figure.angle == 1 && this.container.isLeftLimit()) {
			figure.setPosition(figure.line, figure.col + 1)
		} 
		if (figure.angle == 3 && this.container.isRightLimit()) {
			figure.setPosition(figure.line, figure.col - 1)
		}
		figure.rotate()
	}

	rotateS() {
		let figure = this.currentFigure
		if ((figure.angle == 1 || figure.angle == 3) && this.container.isRightLimit()) {
			figure.setPosition(figure.line, figure.col - 1)
		}
		figure.rotate()
	}

	rotateInverseS() {
		let figure = this.currentFigure
		if ((figure.angle == 1 || figure.angle == 3) && this.container.isRightLimit()) {
			figure.setPosition(figure.line, figure.col - 1)
		}
		figure.rotate()
	}

	rotateL() {
		let figure = this.currentFigure
		if ((figure.angle == 1 || figure.angle == 3) && this.container.isRightLimit()) {
			figure.setPosition(figure.line, figure.col - 1)
		}
		figure.rotate()
	}

	rotateInverseL() {
		let figure = this.currentFigure
		if ((figure.angle == 1 || figure.angle == 3) && this.container.isRightLimit()) {
			figure.setPosition(figure.line, figure.col - 1)
		}
		figure.rotate()
	}

	rotateI() {
		let figure = this.currentFigure
		if ((figure.angle == 0 || figure.angle == 2) && this.container.isRightLimit(1)) {
			figure.setPosition(figure.line, figure.col - 3)
		}
		if ((figure.angle == 0 || figure.angle == 2) && this.container.isRightLimit(2)) {
			figure.setPosition(figure.line, figure.col - 2)
		}
		if ((figure.angle == 0 || figure.angle == 2) && this.container.isRightLimit(3)) {
			figure.setPosition(figure.line, figure.col - 1)
		}
		figure.rotate()
	}
	//-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-//

	//-+-+-+-+-+-+-+--+-+-+-+-+-+-+- Key actions -+-+-+-+-+-+-+--+-+-+-+-+-+-+-//
	async keyDownPressed() {
		let stop = await this.moveFigureDown(true)

		// console.log("stop", stop) * debug * //

		if (stop) {
			// If already exists isNewFigure for solve the conflict between keyDownPressed
			// and run methods.
			if (this.isNewFigure) {
				return 
			}

			this.isNewFigure = true
			this.container.updateGrade()
			this.manageLines()
		} else {
			this.isNewFigure = false
		}

		return this.run()
	}

	keyRightPressed() {
		this.moveFigureRight()
	}

	keyLeftPressed() {
		this.moveFigureLeft()
	}

	keySpacePressed() {
		this.rotateFigure()
	}
	//-+-+-+-+-+-+-+--+-+-+-+-+-+-+--+-+-+-+-+-+-+--+-+-+-+-+-+-+--+-+-+-+-+-+-//
}