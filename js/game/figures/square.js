/**
* Square of tetris game. It extends the Figure.
*/
class Square extends Figure {
	constructor() {
		super()
		this.color("yellow")
	}

	blocksPosition() {
		return [
			{line: 0, col: 0},
			{line: 0, col: 1},
			{line: 1, col: 0},
			{line: 1, col: 1}
		]
	}

	angleOne() {
		return [
			{line: 0, col: 0},
			{line: 0, col: 1},
			{line: 1, col: 0},
			{line: 1, col: 1}
		]
	}

	angleTwo() {
		return [
			{line: 0, col: 0},
			{line: 0, col: 1},
			{line: 1, col: 0},
			{line: 1, col: 1}
		]
	}

	angleThree() {
		return [
			{line: 0, col: 0},
			{line: 0, col: 1},
			{line: 1, col: 0},
			{line: 1, col: 1}
		]
	}

	angleFour() {
		return [
			{line: 0, col: 0},
			{line: 0, col: 1},
			{line: 1, col: 0},
			{line: 1, col: 1}
		]
	}
}