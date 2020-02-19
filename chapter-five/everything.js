/*
Analogous to the some method, arrays have the every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

*/


function everyLoop(array, test) {
    for (let element of array) {
        if (!test(element)) return false;
    }
    return true;
}

function everySome(array, test) {
    return !array.some(a=> !test(a));    
}
  

console.log("Function every, \"loop way\":")
  console.log(everyLoop([1, 3, 5], n => n < 10));
  // → true
  console.log(everyLoop([2, 4, 16], n => n < 10));
  // → false
  console.log(everyLoop([], n => n < 10));
  // → true

  console.log("\nFunction every, \"some way\":")
  console.log(everySome([1, 3, 5], n => n < 10));
  // → true
  console.log(everySome([2, 4, 16], n => n < 10));
  // → false
  console.log(everySome([], n => n < 10));
  // → true