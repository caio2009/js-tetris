game = new Game()

game.run()



window.addEventListener("keydown", (e) => {
	// * use switch case ? * //

	// Key down
	//if (e.keyCode == 40) {
	//	game.keyDownPressed()
	//}

	// Key left
	//if (e.keyCode == 37) {
	//	game.keyLeftPressed()
	//}

	// Key right
	//if (e.keyCode == 39) {
	//	game.keyRightPressed()
	//}

	// Key space
	//if (e.keyCode == 32) {
	//	game.keySpacePressed()
	//}

	switch(e.keyCode) {
		case 40:
			game.keyDownPressed()
		break
		
		case 37:
			game.keyLeftPressed()
		break

		case 39:
			game.keyRightPressed()
		break

		case 32:
			game.keySpacePressed()
		break
	}
})
