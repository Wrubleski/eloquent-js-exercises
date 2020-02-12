/**
Objects, as generic blobs of values, can be used to build all sorts of data structures. a common data structure is the list (not to be confused with the array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on. 

let list = {
	value : 1,
	rest : {
		value: 2,
		rest : {
			value : 3,
			rest : null
		}
	}
};

A nice thing about lists is that they can share parts of their structure. For example, if I create two new values, {value : 0, rest : list} and {value : -1, rest : list}, (with list referring to the binding earlier), they are both independent list, but they share the structure that make up their last three elements. The original list is also a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1,2,3] as argument. Also write a listToArray that produces an array from a list. Then add a helper function prepend, which takes an element and a list and create a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there's no such element. 

If you haven't already, also write a recursive version of nth.

**/


function arrayToList(input){
	let output = {};
	if (input.length !== 1) {
		output.value = input[0];
		output.rest = arrayToList(input.slice(1));
	} else {
		output.value = input[0];
		output.rest = null;
	}
	return output;
}


function listToArray(input){
	let output = [];
	if (input.rest === null) {
		output.push(input.value);
	} else {
		output.push(input.value);
		output.push(...listToArray(input.rest));		
	}
	return output;
}

function prepend(element, list){
	return {value : element, rest : list}; 
}

function nth(list, number){	
	if (number > 0) {
		return nth(list.rest, number -1)
	} else {
		return list.value;
	}
}





console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20