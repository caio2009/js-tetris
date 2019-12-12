/**
* Container is the local where the figures will be putted.
* It contains the figures.
*/
class Container {
	constructor(lines, cols, cellsize) {
		this.html = null

		this.cols = cols
		this.lines = lines
		this.cellsize = cellsize

		// The grade of the container where contains the occupied positions
		this.grade = []

		this.blocks = []
		this.currentFigure = null

		this.buildContainer()
	}

	get width() {
		return this.cols * this.cellsize
	}

	get height() {
		return this.lines * this.cellsize
	}

	// Building the container (html element)
	// and adding in body
	buildContainer() {
		this.html = document.createElement("div")

		CSS.style({width: this.width + "px", height: this.height + "px"}, this.html)
		CSS.addClass("container", this.html)
		
		document.body.appendChild(this.html)

		// Init grade
		for (let i = 0; i < this.lines; i++) {
			let array = []
			for (let j = 0; j < this.cols; j++) {
				array.push(false)
			}
			this.grade.push(array)
		}
	}

	add(element) {
		// This was a test for Block class
		// this.figures.push(element)
		// 
		// this.html.appendChild(element.html)

		if (element instanceof Figure) {
			this.currentFigure = element

			element.blocks.forEach(block => {
				this.blocks.push(block)
				this.html.appendChild(block.html)
			})
		}
	}

	// Verify in the container if the figure reached the down limit 
	isDownLimit(distance = 1) {
		let isLimit = false

		this.currentFigure.blocks.forEach(block => {
			try {
				let isPositionOccupied = this.grade[block.line + distance][block.col]

				if (isPositionOccupied || isPositionOccupied == null) {
					isLimit = true
				}
			} catch(e) {
				// If is undefined
				isLimit = true
			}
		})

		return isLimit
	}

	// Verify in the container if the figure reached the right limit 
	isRightLimit(distance = 1) {
		let isLimit = false

		this.currentFigure.blocks.forEach(block => {
			try {
				let isPositionOccupied = this.grade[block.line][block.col + distance]

				if (isPositionOccupied || isPositionOccupied == null) {
					isLimit = true
				}
			} catch(e) {
				isLimit = true
			}
		})

		return isLimit;
	}

	// Verify in the container if the figure reached the left limit 
	isLeftLimit(distance = 1) {
		let isLimit = false

		this.currentFigure.blocks.forEach(block => {
			try {
				let isPositionOccupied = this.grade[block.line][block.col - distance]

				if (isPositionOccupied || isPositionOccupied == null) {
					isLimit = true
				}
			} catch(e) {
				isLimit = true
			}
		})

		return isLimit
	}

	// Method that saves the occupied position
	updateGrade() {
		this.currentFigure.blocks.forEach(block => {
			this.grade[block.line][block.col] = true
		})
	}
}