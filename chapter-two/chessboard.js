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


const chessBoard = (size) => {
	let grid = ''
	size /= 2;

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
		for (let i = 0; i < size; i++) {
		concatWhite();
		concatBlack();
		}
	}

	const firstBlack = () => {
		for(let j = 0; j < size; j ++){
		concatBlack();
		concatWhite();
		}
	}


	for (let k = 0; k < size; k++) {
		 firstWhite();
		 newLine();
		 firstBlack();
		 newLine();

	}

	return grid;	
}

console.log(chessBoard(8));