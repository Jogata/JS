// #1. Function which returns a random number in the given range
// Create a function which returns a random number in the given range of values both inclusive
// randomNumberGeneratorInRange(10, 50) should return a number between 10-50 (inclusive)
// randomNumberGeneratorInRange(100, 200) should return a number between 100-200 (inclusive)

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  const rand = Math.random() * (rangeEnd - rangeStart) + rangeStart;
  return rand;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)


// #2. Write a program to reverse a string
// String can be reversed by iterating it and storing it in reverse order
// String can also be reversed by converting it to array, then joining it after reversing
// reverseAString("JavaScript is awesome") should return "emosewa si tpircSavaJ"
// reverseAString("Peter Parker is Spiderman") should return "namredipS si rekraP reteP"
// reverseAString("codedamn") should return "nmadedoc"

let str = "JavaScript is awesome"

function reverseAString(str) {
  if (str === "")
    return "";
  else
    return reverseAString(str.substr(1)) + str.charAt(0);
}

console.log(reverseAString(str));


// #3. Write a program to reverse a given integer number
// The remainder of the number can be fetched and the number can be divided by 10 to remove the the digit in loop till number becomes 0
// A simple approach to reverse a number could also be to convert it in to a string and then reverse it
// reverseGivenInteger(3849) returns 9483
// reverseGivenInteger(2222) returns 2222
// reverseGivenInteger(1002) returns 2001

const num = 3849;

function reverseGivenInteger(num) {
    let a = num.toString();
    a = a.split("").reverse().join("");
    return parseFloat(a);
}

let num1 = reverseGivenInteger(num)
console.log(num1)


//  #4. Write a function which can convert the time input given in 12 hours format to 24 hours format
// The check for 'AM' and 'PM' can be verified using endsWith String method
// An extra 0 would be needed if the hours have single digit
// convertTo24HrsFormat("12:10AM") returns "00:10"
// convertTo24HrsFormat("5:00AM") returns "05:00"
// convertTo24HrsFormat("12:33PM") returns "12:33"
// convertTo24HrsFormat("01:59PM") returns "13:59"
// convertTo24HrsFormat("11:8PM") returns "23:08"
// convertTo24HrsFormat("10:02PM") returns "22:02"

const time = '10:02PM';

function convertTo24HrsFormat(input) {
    const date = new Date('August 19, 1975 00:00');
    const time = input.split(':');

    if (input.endsWith('PM') && time[0] != 12)
    time[0] = parseInt(time[0]) + 12;
    else if (input.endsWith('AM') && time[0] == 12)
    time[0] = 0;

    date.setHours(parseInt(time[0]));
    date.setMinutes(parseInt(time[1]));

    const newDate = `${date.getHours()}:${date.getMinutes()}`;

    return date.toTimeString().substring(0, 5)
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)


// #5. Write a function which accepts a string argument and returns the count of characters between the first and last character 'X'
// indexOf and lastIndexOf are the methods on String which returns the position of the given string in the input string from start and end respectively
// If the match is not found, these methods return -1

const str = 'JavaScript';

function getTheGapX(str) {
    let firstIndex = str.indexOf('X');
    let lastIndex = str.lastIndexOf('X');
    let countCharactersBetweenFirstAndLast = lastIndex - firstIndex;

    if (firstIndex === -1)
    countCharactersBetweenFirstAndLast = firstIndex;

    return countCharactersBetweenFirstAndLast
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)


// #6. Write a function to truncate a string to a certain number of words
// Truncate a string to a certain number of words
// truncateWithWordLimit("JavaScript is simple", 3) returns "JavaScript is simple"
// truncateWithWordLimit("Codedamn is the best place to learn to code", 5) returns "Codedamn is the best place"

const str = 'Codedamn is the best place to learn to code';
const wordLimit = 5

function truncateWithWordLimit(str, wordLimit) {
    const countOfWordsInString = str.split(' ');
    const truncatedArrayOfWords = countOfWordsInString.slice(0, wordLimit).join(' ');

    return truncatedArrayOfWords
}

console.log(truncateWithWordLimit(str, wordLimit))


// #7. Create a regular expression to validate if the given input is valid Indian mobile number or not
// Regular expression check has to have an optional +91 or 0 in the beginning, then an optional space and 10 digits
// test method of regular expression can be used to validate if the mobile number pattern matches or not
// validateMobile('+919876543210') returns true
// validateMobile('+91 9876543210') returns true
// validateMobile('09876543210') returns true
// validateMobile('9876543210') returns true
// validateMobile('99876543210') returns false

const number = '+919876543210';

function validateMobile(number) {
    let pattern = /^((\+91|0)|(\+91|0) )?[0-9]{10}$/g;
    let isValid = pattern.test(number);
    
    return isValid
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)


// #8. Write a function which accepts two valid dates and returns the difference between them as number of days
// The difference between 2 dates in JavaScript will give the time difference in milliseconds
// Time difference can be converted in to days by dividing the 24Hrs time in milliseconds
// getDaysBetweenDates('10/15/2020', '12/1/2020') returns 47
// getDaysBetweenDates('11/10/2021', '11/12/2021') returns 2
// getDaysBetweenDates('11/01/2020', '11/05/2020') returns 4


function getDaysBetweenDates(dateText1, dateText2) {
    const DAY_IN_MILLISECONDS = 1000 * 60 * 60 * 24;
    const firstDate = new Date(dateText1).getTime();
    const secondDate = new Date(dateText2).getTime();

    const timeLapseInMiliseconds = firstDate - secondDate;
    const daysBetweenTwoDates = Math.floor(Math.abs(timeLapseInMiliseconds / DAY_IN_MILLISECONDS));

    return daysBetweenTwoDates
}

console.log(`Days difference: ${getDaysBetweenDates('10/15/2020', '12/1/2020')}`) //47
console.log(`Days difference: ${getDaysBetweenDates('11/01/2020', '11/05/2020')}`) //4


// #9. Write a function to check if an object is empty or not in javaScript?
// How to check if an object is empty or not in javaScript?
// isEmpty({}) returns true
// isEmpty({key: 1}) returns false

const obj = {};

function isEmpty(obj) {
var size = Object.keys(obj).length;

    return size == 0 ? true : false
}

console.log(`is empty object: ${isEmpty(obj)}`)


// #10. Write a function to remove array element based on object property?
// removeArrayElement("money") returns the array without the money object
// removeArrayElement("id") returns the array without the id object
// removeArrayElement("cStatus") returns the array without the cStatus object

const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "id"

function removeArrayElement(filterField) {
    const filtered = array.filter((x) => {
        return x.field !== filterField
    })
    return filtered
}

let result = removeArrayElement(filterField)
console.log(result);


// #11. Return the N-th value of the Fibonacci sequence
// function fibonacci(n) returns the N-th value of the Fibonacci sequence

function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2)
 }
 
 console.log(`fibonacci value at position 5: ${fibonacci(5)}`)


//  #13. Convert given seconds to space age on all planets of our solar system
// Given an age in seconds, calculate how old someone would be on:
// Mercury: orbital period 0.2408467 Earth years
// Venus: orbital period 0.61519726 Earth years
// Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
// Mars: orbital period 1.8808158 Earth years
// Jupiter: orbital period 11.862615 Earth years
// Saturn: orbital period 29.447498 Earth years
// Uranus: orbital period 84.016846 Earth years
// Neptune: orbital period 164.79132 Earth years
// Pluto is not a planet
// So if your function was called with 436575687 as the argument i.e spaceAge(436575687) it should return { "Mercury": 57.44, "Venus": 22.49, "Earth": 13.83, "Mars": 7.36, "Jupiter": 1.17, "Saturn": 0.47, "Uranus": 0.16, "Neptune": 0.08 }
// IMPORTANT!!
// Your spaceAge function should return the (already given) yearsInAllPlanets object after setting age on each planet (each property of the object)
// THE VALUE OF EACH PROPERTY SHOULD BE A NUMBER AND SHOULD HAVE MAXIMUM 2 DIGITS AFTER THE POINT example 4.34

const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0.2408467,
		Venus: 0.61519726,
		Earth: 1,
		Mars: 1.8808158,
		Jupiter: 11.862615,
		Saturn: 29.447498,
		Uranus: 84.016846,
		Neptune: 164.79132,
	}

    const earthYears = seconds / 31557600;

	for (const key in yearsInAllPlanets) {
        yearsInAllPlanets[key] = parseFloat((earthYears / yearsInAllPlanets[key]).toFixed(2));
    }

	return yearsInAllPlanets
}

console.log(spaceAge(436575687));


// #15.Determine if a sentence is a pangram
// A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once.
// The best known English pangram is: "The quick brown fox jumps over the lazy dog."
// The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.

const isPangram = (input) => {

    const numberOfLettersInAlphabet = 26;

    const arr = input.toLowerCase().split(' ');
    const str = arr.join('');
    const uniqueLetters = new Set(str);

    uniqueLetters.forEach((char) => {
        if (char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122) {
            uniqueLetters.delete(char);
        }
      });

    const isTrue = uniqueLetters.size === numberOfLettersInAlphabet;
    return isTrue
}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));


// #16. Ask the Bob
// Bob is a lackadaisical teenager. In conversation, his responses are very limited.
// Bob answers 'Sure.' if you ask him a question, such as "How are you?".
// He answers 'Whoa, chill out!' if you YELL AT HIM (in all capitals).
// He answers 'Calm down, I know what I'm doing!' if you yell a question at him.
// He says 'Fine. Be that way!' if you address him without actually saying anything.
// He answers 'Whatever.' to anything else.
// Bob's conversational partner is a purist when it comes to written communication and always follows normal rules regarding sentence punctuation in English.

const answers = {
    onQuestion: 'Sure.',
    whenYellAtHim: 'Whoa, chill out!',
    whenYellQuestionAtHim: 'Calm down, I know what I\'m doing!',
    onSilence: 'Fine. Be that way!',
    anythingElse: 'Whatever.'
}

function hey(message) {
	let answer = answers.anythingElse;
    const question = /^[A-Z][a-z ,\-0-9]+\?/g;
    const yelling = /^[A-Z][A-Z .,\-0-9]+\!$/g;
    const yellingQuestion = /^[A-Z][A-Z ,\-0-9]+\?$/g;
    const silence = /^$/g;

    if (message.match(question)){
        answer = answers.onQuestion;
    }
    if (message.match(yelling)){
        answer = answers.whenYellAtHim;
    }
    if (message.match(yellingQuestion)){
        answer = answers.whenYellQuestionAtHim;
    }
    if (message.match(silence)){
        answer = answers.onSilence;
    }

	return answer
}

// console.log();
// hey("How are you?") // => 'Sure.'
// hey("YELL AT HIM") // => 'Whoa, chill out!'
// hey("YELL QUESTION AT HIM?") // => 'Calm down, I know what I\'m doing!'
// hey("") // 'Fine. Be that way!'
// hey('fbhsdhfvaa') // 'Whatever.'


// #17. Longest Consecutive Sequence
// Given an array of elements, find a subsequence in the array such that all the elements in the sequence are consecutive irrespective of their order.
// longestConsecutiveSequence([100,4,200,1,3,2]) returns 4
// longestConsecutiveSequence([0,3,7,2,5,8,4,6,0,1]) returns 9

const longestConsecutiveSequence = (nums) => {
    const set = new Set(nums);
    let longestStreak = 1;
    let max = 0;
    set.forEach(x => {
      if (!set.has(x - 1)) {
        let num = x;
        while(set.has(++num)) { ++longestStreak; }
        max = Math.max(max, longestStreak);
        longestStreak = 1;      
      }
    });
    return max;
  };

  console.log(longestConsecutiveSequence([100,4,200,1,3,2])); //4


//   #19. Resistor Color map
// If you want to build something using a Raspberry Pi, you'll probably use resistors. For this exercise, you need to know two things about them:
// Each resistor has a resistance value.
// Resistors are small - so small in fact that if you printed the resistance value on them, it would be hard to read.
// To get around this problem, manufacturers print color-coded bands onto the resistors to denote their resistance values. Each band has a position and a numeric value.
// The first 2 bands of a resistor have a simple encoding scheme: each color maps to a single number.
// In this exercise you are going to create a helpful program so that you don't have to remember the values of the bands.
// These colors are encoded as follows:
// - Black: 0
// - Brown: 1
// - Red: 2
// - Orange: 3
// - Yellow: 4
// - Green: 5
// - Blue: 6
// - Violet: 7
// - Grey: 8
// - White: 9
// Mnemonics map the colors to the numbers, that, when stored as an array, happen to map to their index in the array: Better Be Right Or Your Great Big Values Go Wrong.
// Although the color names are capitalised in the description, the function colorCode will always be called with the lowercase equivalent, e.g brown instead of Brown.
// colorCode('blue') should return 6
// colorCode('white') should return 9

const colorCode = (color) => {
	const colors = ['black', 'brown','red','orange','yellow','green','blue','violet','grey','white'];

    const indexOfColor = colors.indexOf(color);

	return indexOfColor
}

console.log(colorCode('blue')) //6


// #20. Add two numbers
const addTwoNumbers = (a, b) => {
	return a+b
}
console.log(1,2) //3


// #21. Union of Two Arrays
// Write the code for the function which returns the the union of the two given arrays
// unionOfArrays(['a','b','c'],['a',1,2,'d']) should return ['a','b','c',1,2,'d']
// unionOfArrays(['array','object'],['value','object','key']) should return ['array','object', 'value', 'key']
// unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21]) == [1,2,34,45,3,24,21]) should return [1,2,34,45,3,24,21]

const unionOfArrays = (arr1, arr2) => {
    const mySet1 = new Set([ ...arr1, ...arr2])
    
      return Array.from(mySet1);
    };

console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);


// #22. Unique In Order
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// The argument can contain a string or an array
// uniqueInOrder('AAAABBBCCDAABBB') should return ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD') should return ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3]) should return [1,2,3]

let uniqueInOrder = (iterable) => {
    let newiterable = [...iterable];
    let result = newiterable.filter((el, index, arr) => {
       return el!==arr[index-1]
    })

    return result
};

console.log(uniqueInOrder([1,2,2,3,3])); // => [1,2,3]


// #23. Equal Sides Of An Array
// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
// Let's say you are given the array [1,2,3,4,3,2,1]: Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ([1,2,3]) and the sum of the right side of the index ([3,2,1]) both equal 6.
// Let's look at another one. You are given the array [1,100,50,-51,1,1] Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ([1]) and the sum of the right side of the index ([50,-51,1,1]) both equal 1.
// Last one: You are given the array [20,10,-80,10,10,15,35] At index 0 the left side is [] The right side is [10,-80,10,10,15,35] They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem) Index 0 is the place where the left side and right side are equal.
// Input: An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
// Output: The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
// Note: If you are given an array with multiple answers, return the lowest correct index.
// findEvenIndex([1,2,3,4,3,2,1] should return 3
// findEvenIndex([1,100,50,-51,1,1]) should return 1
// findEvenIndex([1,2,3,4,5,6]) should return -1
// findEvenIndex([20,10,30,10,10,15,35]) should return 3

function findEvenIndex(arr) {
    let response = -1;

    for (let i = 0; i < arr.length; i++){
        let leftSum = null;
        let rightSum = null;
        // sum on the left side of the current index(i)
        for (let l = 0; l < i ; l++){
            leftSum += arr[l];
        }
        // sum on the right side of the current index(i)
        for (let j = i+1; j < arr.length; j++){
            rightSum += arr[j];
        }

        if (leftSum === rightSum){
            response = i;
        }
    }

    return response
}

console.log(findEvenIndex([20,10,30,10,10,15,35])); // => 3


// #24. Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form.
// expandedForm(12); // Should return '10+2'
// expandedForm(42); // Should return '40+2
// expandedForm(734) should return '700+30+4'

function expandedForm(num) {
    const numAsString = num.toString();
    let expandedNum = '';
    let counter = numAsString.length;
    for (let i = 0; i < numAsString.length; i++){
        const arr = new Array(counter-1);
        expandedNum += numAsString[i] + arr.fill(0).join('')+"+";
        counter--;
    }
    return expandedNum.slice(0, expandedNum.length-1);
}
  
console.log(expandedForm(742))


// #25. Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// spinWords("Hey fellow warriors") should return "Hey wollef sroirraw"
// spinWords("You are almost to the last test") should return "You are tsomla to the last test"
// spinWords("Seriously this is the last one") should return "ylsuoireS this is the last one"

function spinWords(string) {
    const arrOfWords = string.split(' ');

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    const result = arrOfWords.map((word) => {
        if (word.length >= 5){
            return reverseString(word);
        } else {
            return word;
        }
    })
    
    return result.join(' ')
}
  
console.log(spinWords("Hey fellow warriors")) // => "Hey wollef sroirraw"


// #26. Find the odd int
// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
// findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) should return 5
// findOdd([1,1,1,1,1,1,10,1,1,1,1]) should return 10
// findOdd([5,4,3,2,1,5,4,3,2,10,10]) should return 1

function findOdd(arr) {
    let result = null;
    let index = 0;

    while (result === null){
        let counter = 0;
        const currNumber = arr[index];

        for (let i = 0; i < arr.length; i++){
            if (currNumber === arr[i]){
                counter++;
            }
        }

        if (counter%2 !== 0){
            result = currNumber;
        }

        index++;
    }

    return result;
  }
  
  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
