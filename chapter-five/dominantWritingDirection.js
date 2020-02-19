/*
Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here. 

*/
require("../sandbox/dataset.js");

function characterScript(code){
	for (let script of SCRIPTS){
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			return script;
		}
	}
	return null;
}



function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let know = counts.findIndex(c => c.name == name);
		if (know == -1) {
			counts.push({name, count: 1});
		} else {
			counts[know].count++;
		}
	}
	return counts;
}


function textScripts(text) {
	let scripts = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.name : "none";
	}).filter(({name}) => name != "none");

	let total = scripts.reduce((n, {count}) => n + count, 0);
	if (total == 0) return "No scripts found";

    //Changed the output into a list of objects, since it's easier to work on than a string.
    return scripts.map(({name, count}) => {
        return {language: name,
                percentage: Math.round(count * 100 / total)
        }
    })
}


function dominantDirection(input) {
    let predominantLanguage = "", languagePercentage = 0, arrayOfLanguages = textScripts(input);

    for (objects of arrayOfLanguages) {
        if (objects.percentage > languagePercentage) predominantLanguage = objects.language; 
    }
    
    if (predominantLanguage == "") return "Please enter a valid string.";
    return SCRIPTS.filter((language) => language.name == predominantLanguage)[0].direction;
 }


  
  console.log(dominantDirection("Hello!"));
  // → ltr
  console.log(dominantDirection("Hey, مساء الخير"));
  // → rtl
