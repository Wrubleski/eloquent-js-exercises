/*
write a program that creates a string that represents an 8 x 8 grid, using newline charaters to separete lines. At aech position, the grid there is either a scpace or a "#" character. The lines should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

*/


const chessString = () => {
	let grid = ''

	const concatBlack = () => {
		grid = grid.concat("#");

	}

	const concatWhite = () => {
		grid = grid.concat(" ");
	}

	const newLine = () => {
		grid = grid.concat("\n")
	}


	const firstWhite = () => {
		for (let i = 0; i < 4; i++) {
		concatWhite();
		concatBlack();
		}
	}

	const firstBlack = () => {
		for(let j = 0; j < 4; j ++){
		concatBlack();
		concatWhite();
		}
	}


	for (let k = 0; k < 4; k++) {
		 firstWhite();
		 newLine();
		 firstBlack();
		 newLine();

	}

	return grid;	
}

console.log(chessString());