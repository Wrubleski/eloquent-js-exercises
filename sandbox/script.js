require("./dataset.js");
/*
function repeat(n, action) {
	for  (let i = 0; i < n; i ++) {
		action(i);
	}
}
*/
/*repeat(3, console.log);*/

/*let labels = [];
repeat(5, i => {labels.push(`Unit ${i + 1}`)});
console.log(labels);*/

/*function greaterThan(n) {
	return m => m > n;
}*/

/*let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11))*/

/*function noisy(f) {
	return (...args) => {
		console.log("Calling with", args);
		let result = f(...args);
		console.log("Called with", args, ", returned ", result);
		return result;
	}
}

*/
// noisy(Math.min)(3,2,1);

/*let mathNoisy = noisy(Math.min);
mathNoisy(3,2,1)*/

/*function unless(test, then) {
	if(!test) then();
}*/

/*repeat(6, n => {
	unless(n % 2 == 1, () => {
		console.log(n, "is even.")
	});
});

["A", "B"].forEach(l => console.log(l));*/


// FILTER ----- return an array, needs a test.
// array.filter(elementOfTheArray => condition)


/*function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if(test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

console.log(SCRIPTS);

console.log(filter(SCRIPTS, script => script.living));*/

/*console.log(SCRIPTS.filter(s => s.direction == "ttb"));*/



/*function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));*/

/*function reduce(array, combine, start) {
	let current = start;
	for (let element of array){
		current = combine(current, element);
	}
	return current;
}

console.log(reduce([1,2,3,4,5], (a,b) => a + b, 0))*/

/*console.log([1,2,3,4].reduce((a,b) => a+b));*/

/*function characterCount(script) {
	return script.ranges.reduce((count, [from, to]) => {
		return count + (to - from);
	}, 0);
}



console.log(SCRIPTS.reduce((a, b) => {
	return characterCount(a) < characterCount(b) ? b : a;
}));
*/

/*
function average(array) {
	return array.reduce((a, b) => a + b) / array.length;
}

console.log(Math.round(average(
	SCRIPTS.filter(s => s.living).map(s => s.year))));

console.log(Math.round(average(
	SCRIPTS.filter(s => !s.living).map(s => s.year))));*/


/*function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			return script
		}
	}
	return null;
}
*/

function charaterScript(code){
	for (let script of SCRIPTS){
		if (script.ranges.some(([from, to]) => {
			return code >= from && < to;
		})) {
			return script;
		}
	}
	return null;
}


console.log(characterScript(121));


