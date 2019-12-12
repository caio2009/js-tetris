class I extends Figure {
	constructor() {
		super()
		this.color("cyan")
	}

	blocksPosition() {
		return [
			{line: 0, col: 0},
			{line: 1, col: 0},
			{line: 2, col: 0},
			{line: 3, col: 0}
		]
	}

	angleOne() {
		return [
			{line: 0, col: 0},
			{line: 1, col: 0},
			{line: 2, col: 0},
			{line: 3, col: 0}
		]
	}

	angleTwo() {
		return [
			{line: 0, col: 0},
			{line: 0, col: 1},
			{line: 0, col: 2},
			{line: 0, col: 3}
		]
	}

	angleThree() {
		return [
			{line: 0, col: 0},
			{line: 1, col: 0},
			{line: 2, col: 0},
			{line: 3, col: 0}
		]
	}

	angleFour() {
		return [
			{line: 0, col: 0},
			{line: 0, col: 1},
			{line: 0, col: 2},
			{line: 0, col: 3}
		]
	}
}