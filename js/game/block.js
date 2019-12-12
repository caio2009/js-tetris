/**
* The block represents the smallest unity on the container.
* The block is used to build the figures.
*/
class Block {
	constructor(size) {
		// Html element
		this.html = null

		this.size = size

		this.line = 0
		this.col = 0

		this.buildBlock()
	}

	// Building block (html element)
	buildBlock() {
		this.html = document.createElement("div")

		CSS.style({width: (this.size - 2) + "px", height: (this.size - 2) + "px"}, this.html)
		CSS.addClass("block", this.html)
	}

	// Set the block's color
	color(color) {
		CSS.style({background: color}, this.html)
	}

	// Set the block's position on the container
	setPosition(line, col) {
		this.line = line
		this.col = col

		// Setting the position of block on container
		CSS.style({
			marginLeft: this.marginLeft + "px", 
			marginTop: this.marginTop + "px"
		}, this.html)
	}

	get marginTop() {
		return this.line * this.size
	}

	get marginLeft() {
		return this.col * this.size
	}
}