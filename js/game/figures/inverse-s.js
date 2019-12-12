class InverseS extends Figure {
	constructor() {
		super()
		this.color("green")
	}

	blocksPosition() {
		return [
			{line: 0, col: 0},
			{line: 0, col: 1},
			{line: 1, col: 1},
			{line: 1, col: 2}
		]
	}

	angleOne() {
		return [
			{line: 0, col: 0},
			{line: 0, col: 1},
			{line: 1, col: 1},
			{line: 1, col: 2}
		]
	}

	angleTwo() {
		return [
			{line: 0, col: 1},
			{line: 1, col: 0},
			{line: 1, col: 1},
			{line: 2, col: 0}
		]
	}

	angleThree() {
		return [
			{line: 0, col: 0},
			{line: 0, col: 1},
			{line: 1, col: 1},
			{line: 1, col: 2}
		]
	}

	angleFour() {
		return [
			{line: 0, col: 1},
			{line: 1, col: 0},
			{line: 1, col: 1},
			{line: 2, col: 0}
		]
	}
}