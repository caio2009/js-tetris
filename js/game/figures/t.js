/**
* The T of Tetris game. It extends Figure
*/
class T extends Figure {
	constructor() {
		super()
		this.color("purple")
	}

	blocksPosition() {
		return [
			{line: 0, col: 1},
			{line: 1, col: 0},
			{line: 1, col: 1},
			{line: 1, col: 2}
		]
	}

	angleOne() {
		return [
			{line: 0, col: 1},
			{line: 1, col: 0},
			{line: 1, col: 1},
			{line: 1, col: 2}
		]
	}

	angleTwo() {
		return [
			{line: 0, col: 1},
			{line: 1, col: 1},
			{line: 1, col: 2},
			{line: 2, col: 1}
		]
	}

	angleThree() {
		return [
			{line: 1, col: 0},
			{line: 1, col: 1},
			{line: 1, col: 2},
			{line: 2, col: 1}
		]
	}

	angleFour() {
		return [
			{line: 0, col: 1},
			{line: 1, col: 0},
			{line: 1, col: 1},
			{line: 2, col: 1}
		]
	}
}