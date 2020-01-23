/*

Write a function that takes two arguments and returns their minimun.

console.log(min(0, 10));
// -> 0

console.log(min(0, -10));
// -> -10

*/

const min = (a, b) => {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}


console.log(min(0, 10));
console.log(min(0, -10));	