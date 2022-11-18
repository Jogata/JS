console.log("=================== General Use ===================");
function* generate() {
    yield 1;
    yield 2;
    yield 3;
    return "return end";   // this line will end the function and the next row can not be executed
    yield 4;               // will return "undefined" because of the "return" on the previous line
}

const generator = generate();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (const iterator of generate()) {
    console.log(iterator);
}

// ======================================================================================================
console.log("================= Generating numbers raised to the second power =================");
// generating numbers raised to the second power: 1, 4, 9, 16, 25, 36 ...
function* generateEndlessSquareNumbers() {
    let number = 0;

    while (true) {
        number++;
        yield number * number;
    }
}

const generatorSquareNumbers = generateEndlessSquareNumbers();
console.log(generatorSquareNumbers.next().value);
console.log(generatorSquareNumbers.next().value);
console.log(generatorSquareNumbers.next().value);

// ======================================================================================================
console.log("=======================================================");

function* generateSquareNumbers(max) {
    let number = 0;

    while (number < max) {
        number++;
        yield number * number;
    }
}

for (const number of generateSquareNumbers(10)) {
    console.log(number);
}

// get all values from array in random order
console.log("=================== Get All Names in Random Order ===================");
const names = ["Dom", "Shelly", "Marie", "Timmy"];

const randomNames = getRandomName(names);

for (const name of randomNames) {
    console.log(name);
}

function* getRandomName(array) {
    const remainingNames = array;

    while (remainingNames.length !== 0) {
        const randomIndex = Math.floor(Math.random() * remainingNames.length);
        const randomName = names[randomIndex];
        remainingNames.splice(randomIndex, 1);
        yield randomName;
    }
}
