// require("./dataset.js");
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

// function characterScript(code){
// 	for (let script of SCRIPTS){
// 		if (script.ranges.some(([from, to]) => {
// 			return code >= from && code < to;
// 		})) {
// 			return script;
// 		}
// 	}
// 	return null;
// }



// function countBy(items, groupName) {
// 	let counts = [];
// 	for (let item of items) {
// 		let name = groupName(item);
// 		let know = counts.findIndex(c => c.name == name);
// 		if (know == -1) {
// 			counts.push({name, count: 1});
// 		} else {
// 			counts[know].count++;
// 		}
// 	}
// 	return counts;
// }


// function textScripts(text) {
// 	let scripts = countBy(text, char => {
// 		let script = characterScript(char.codePointAt(0));
// 		return script ? script.name : "none";
// 	}).filter(({name}) => name != "none");

// 	let total = scripts.reduce((n, {count}) => n + count, 0);
// 	if (total == 0) return "No scripts found";

// 	return scripts.map(({name, count}) => {
// 		return `${Math.round(count * 100 / total)}% ${name}`;
// 	}).join(",");
// }

// console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"'));


class Matrix {
	constructor(width, height, element = (x, y) => undefined) {
		this.width = width;
		this.height = height;
		this.content = [];

		for (let y = 0; y < height; y++) {
			for (let x = 0; x < width; x++) {
				this.content[y * width + x] = element(x, y);
			}
		}
	}

	get(x, y) {
		return this.content[y * this.width + x];
	}

	set(x, y, value) {
		this.content[y * this.width + x] = value;
	}


}

class MatrixIterator {
	constructor(matrix) {
		this.x = 0;
		this.y = 0;
		this.matrix = matrix;		
	}

	next() {
		if (this.y == this.matrix.height) return {done: true};

		let value = {x: this.x,
					 y: this.y,
					 value: this.matrix.get(this.x, this.y)}
		
		this.x++;
		if (this.x == this.matrix.width) {
			this.x = 0;
			this.y++;
		}

		return {value, done: false};
	} 
}

Matrix.prototype[Symbol.iterator] = function() {
	return new MatrixIterator(this);
}

let matrix = new Matrix(2,2,(x,y) => `Value ${x}, ${y}`);

for (let {x,y,value} of matrix) {
	console.log(x,y,value);
}