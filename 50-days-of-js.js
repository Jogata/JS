// #1. Function which returns a random number in the given range
// Create a function which returns a random number in the given range of values both inclusive
// randomNumberGeneratorInRange(10, 50) should return a number between 10-50 (inclusive)
// randomNumberGeneratorInRange(100, 200) should return a number between 100-200 (inclusive)

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	const rand = Math.random() * (rangeEnd - rangeStart) + rangeStart;

	return rand;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
