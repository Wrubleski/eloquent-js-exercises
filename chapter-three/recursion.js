/*

We've seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see if it's divisible by 2. Here's another way to define whether a positive whole number is even or odd:

- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The funcction should accept a single parameter (a positive, whole number), and return a Boolean.

*/



const isEven = (number) => {
	switch (true) {
		case number < 0:
			return "Please enter a positive number!";
			break;
		case number === 0:
			return true;
			break;
		case number === 1:
			return false;
			break;
		default:
			return isEven(number-2);
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
