class S extends Figure {
	constructor() {
		super()
		this.color("red")
	}

	blocksPosition() {
		return [
			{line: 0, col: 1},
			{line: 0, col: 2},
			{line: 1, col: 0},
			{line: 1, col: 1}
		]
	}

	angleOne() {
		return [
			{line: 0, col: 1},
			{line: 0, col: 2},
			{line: 1, col: 0},
			{line: 1, col: 1}
		]
	}

	angleTwo() {
		return [
			{line: 0, col: 0},
			{line: 1, col: 0},
			{line: 1, col: 1},
			{line: 2, col: 1}
		]
	}

	angleThree() {
		return [
			{line: 0, col: 1},
			{line: 0, col: 2},
			{line: 1, col: 0},
			{line: 1, col: 1}
		]
	}

	angleFour() {
		return [
			{line: 0, col: 0},
			{line: 1, col: 0},
			{line: 1, col: 1},
			{line: 2, col: 1}
		]
	}
}