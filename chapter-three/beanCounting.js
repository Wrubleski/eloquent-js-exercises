/* 
You can get the Nth character, or letter, from a string by writing "string"[N].
The returned value will be a string containing only one character (for exemple, "b".).
The first character has position 0, which causes the last one to be found at position string.length -1.
In other words, a two-character string has length 2, and its character have position 0 and 1.

Write a function countBs that takes a string as its only argument and returns a number that indicates how
many uppercase "B" characters the are in the string.

Next, write a funcition called countChar that behaves live countBs, except it takes a second argument that
indicates the character that is to be counted (taher than counting only uppercase "B" characters). Rewrite
countBs to make use of this new function.

console.log(countBs("BBC"));
// -> 2
console.log(countChar("kakkerlak", "k"));
// -> 4 */


/* const countBs = (string) => {
    let counter = 0;
    for (const letter of string) {
        if (letter === "B") {
            counter += 1;
        }
    }
    return counter;
} */

const countBs = choseChar("B");

function choseChar(chosenChar) {
    return string => countChar(string, chosenChar); 
}


function countChar(string, chosenChar) {
    let counter = 0;
    for (const char of string) {
        if (char === chosenChar) {
            counter += 1;
        }
    }
    return counter;
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));


