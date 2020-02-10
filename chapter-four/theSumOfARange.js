/*
Write a range function that takes two arguments, start and end, and returns an array containing all numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and return the sum of these numbers. Run the exemple program and see whether it does indeed return 55.

As a bonus assignment, modify your range ranction to take an optional third argument that indicate the "step" value used when building the array. if no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) shoud return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/


function range(start, end, step = 1){
    array = []

    switch (true) {
        case start > end:
            if (step === 1) step = -1;
            if (step > 0) {
                //would be better to catch and thrown an error
                array.push("If start > end, you'll need a negative step.")
                break;
            }
            for (start; start >= end; start += step){
                array.push(start);
            }
            break;
        case start < end:
            for (start; start <= end; start += step){
                array.push(start);
            }
            break;
    }

    return array;
}



function sum(array){
    sumOftheArray = 0;
    for (let index of array) {
        sumOftheArray += index;
    }
    return sumOftheArray;
}



console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(range(5, 2));
console.log(range(5, 2, 3));
console.log(sum(range(1, 10)));