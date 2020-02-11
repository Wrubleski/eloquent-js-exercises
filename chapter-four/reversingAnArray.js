/**
Arrays have a reverse method that changes the array by inverting the order in which it's elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as an argument and produces a new array that has the same elements in inverse order. th Second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as arguments by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
**/

function reverseArray(array){
	let reversedArray = [];
	for (let iten of array){
		reversedArray.unshift(iten);
	}
	return reversedArray;
}

function reverseArrayInPlace(array){
	for (let i = 0, j = array.length -1; i < Math.floor(array.length / 2); i ++, j --) {
		let atLeft = array[i], atRight = array[j];
		array[j] = atLeft;
		array[i] = atRight;
	}
	return array;
}


/*function reverseArrayInPlace(array){
	let copiedArray = array.slice();
	for(let item of copiedArray){
		array.pop()
		array.unshift(item);
	}
}

looks like copying the array is cheating... ops!
*/

console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
