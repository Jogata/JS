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


// #27. Vowel Count
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels
// The input can consit of Lower case and upper case letters so make sure to count both of them.
// getCount("abracadabra") should return 5
// getCount("THe Strings are SOO COOL") should return 8

function getCount(str) {
    let vowelsCount = 0;
    const arrVowels = ['a','e','i','o','u'];
    
    for (let i = 0; i< str.length; i++){
        if(arrVowels.includes(str[i].toLowerCase())){
            vowelsCount++;
        }
    }
  
    return vowelsCount;
}

console.log(getCount("abracadabra"));


// #28. WeIrD StRiNg CaSe
// Write a function toWeirdCase that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
// toWeirdCase('This') returns 'ThIs'
// toWeirdCase('This is a test') returns 'ThIs iS A TeSt'
// toWeirdCase('A test case') returns 'A TeSt cAsE'

function toWeirdCaseForEachWord(string) {
    // convert all letters to upper case
    let inputToUpperCase = string.toUpperCase();
    // convert input to array of word
    const resultAsArray = inputToUpperCase.split(' ');
    // convert each word to array of letters
    for (let currWord = 0; currWord < resultAsArray.length; currWord++){
        const wordAsArray = [...resultAsArray[currWord]];
        // convert all odd letters in array to lower case
        for (let oddIndex = 1; oddIndex < wordAsArray.length; oddIndex+=2){
            wordAsArray[oddIndex] = wordAsArray[oddIndex].toLowerCase();
        }
        resultAsArray[currWord] = wordAsArray.join('');
    }

    const result = resultAsArray.join(' ');

    return result
}

let input = 'This';
  
console.log(`The weird case of ${input} is ${toWeirdCaseForEachWord(input)}`);


// #29.Mumbling
// Each char becomes n*chars where n is the index + 1, and the first char is capitalized divided by - instead of space.
// Only alphabets are passed as arguments for the accum(s) funciton
// Example: accum("ZpglnRxqenU") should return "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

// accum("ZpglnRxqenU") returns "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// accum("NyffsGeyylB") returns "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
// accum("MjtkuBovqrU") returns "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"

function accum(s) {
    const inputAsArrayOfLetters = s.toLowerCase().split('');

    const result = inputAsArrayOfLetters.map((letter, index, array) => {
        const arr = new Array(index+1).fill(letter);
        arr[0] = letter.toUpperCase();
        return arr.join('')
    })

    return result.join('-')
}

console.log(accum('ZpglnRxqenU'));


// #30.Mexican Wave

// Mexican Wave Origin
// The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.
// The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

// Create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
// The input string will always be lower case but maybe empty.
// If the character in the string is whitespace then pass over it as if it was an empty seat
// wave("hello") should return `["Hello", "hEllo", "heLlo", "helLo", "hellO"]
// wave("two words") should return `["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
// wave(" gap ") should return `[" Gap ", " gAp ", " gaP "]

function wave(str) {
    // create an array with the same length as the input and fill each cell with the input
    const arr = new Array(str.length).fill(str);

    const arrWithInputsSplittedByLetters = arr.map(x => x.split(''));

    let result = [];
    for (let index = 0; index < str.length; index++){
        if (str[index] !== ' '){
            arrWithInputsSplittedByLetters[index][index] = arrWithInputsSplittedByLetters[index][index].toUpperCase();
            result.push(arrWithInputsSplittedByLetters[index]);
        }
    }
    const mexicanWave = result.map((arr) => arr.join(''));

    return mexicanWave
}

console.log(wave(" gap "));


// #31. Write a Program to Find the Factorial of a Number
// The factorial of a number is the product of all the numbers from 1 to that number.
// For example, factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.
// The factorial of a positive number n is given by:
// factorial of n (n!) = 1 * 2 * 3 * 4.....n
// The factorial of negative numbers do not exist and the factorial of 0 is 1.

function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++){
    result *= i;
    }
    return result
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));


// #32. Write a program to find the greatest common divisor (gcd) of two positive numbers.
// The greatest common divisor (GCD), also called the greatest common factor, of two numbers is the largest number that divides them both. For instance, the greatest common factor of 20 and 15 is 5, since 5 divides both 20 and 15 and no larger number has this property.

function gcd(a, b) {
	if (b == 0) {
        return a;
    } else {
        let remainder = a % b;
        return gcd(b, remainder)
    }
}

const a = 2154
const b = 458

console.log("The GCD of " + a + " ", b + " is " + gcd(a, b));


// #33. Write a program to print unique values from an array
// set([1, 2, 2, 4, 5, 6, 6]) returns [1, 2, 4, 5, 6]
// set([1, 1, 1, 1, 1]) returns [1]

function set(arrOfNum) {
	function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }

    const arrOfUniqueValues = arrOfNum.filter(onlyUnique);

    return arrOfUniqueValues
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));


// #34. Write a program to find the most frequent item of an array
// mostFreq([1, 2, 2, 4, 5, 6, 6]) returns 2 2
// mostFreq([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]) returns a 5

function mostFreq(arr) {
    const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
    const occurences = countOccurrences(arr);
    let mostFreqNumber = [null, 0];

    for (let key in occurences) {
        if (occurences[key] > mostFreqNumber[1]){
            mostFreqNumber[1] = occurences[key];
            mostFreqNumber[0] = key;
        }
      }
      const result = mostFreqNumber.join(' ')

      return result
}

const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

console.log(mostFreq(arr));


// #35. Write a JavaScript function to get nth largest element from an unsorted array.
// nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4) returns 89
// nthlargest([ 10, 100, 1000, 10000], 2) returns 1000

function nthlargest(arr, highest) {
	let arrWithNthLargestElement = [0, arr[0]];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > arrWithNthLargestElement[arrWithNthLargestElement.length-1]){
            arrWithNthLargestElement.push(arr[i]);
            if (arrWithNthLargestElement.length > highest){
                arrWithNthLargestElement.shift();
            }
        }
        if (arr[i] < arrWithNthLargestElement[arrWithNthLargestElement.length-1]){
            let index = arrWithNthLargestElement.length-1;
            while (index >= 0){
                // console.log(arr[i], arrWithNthLargestElement[index])
                if (arr[i] > arrWithNthLargestElement[index]){
                    arrWithNthLargestElement.splice(index+1, 0, arr[i])
                    if (arrWithNthLargestElement.length>highest){
                        arrWithNthLargestElement.shift();
                    }
                    break;
                }
                index--;
            }
        }

    }
	return arrWithNthLargestElement[highest-arr.length]
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest)); // 89

// ============================= v.2 ================================

function nthlargest(arr, highest) {
    let n = null;

    for (let i = 0; i < highest; i++){
        n = Math.max(...arr);
        const index = arr.indexOf(n);
        arr[index] = null;
    }
    return n
}

const arr = [43, 56, 23, 89, 88, 90, 99, 652];
const highest = 4;

console.log(nthlargest(arr, highest)); // 89


// #36. Rna Transcription
// Given a DNA strand, return its RNA complement (per RNA transcription).
// Both DNA and RNA strands are a sequence of nucleotides.
// The four nucleotides found in DNA are adenine (A), cytosine (C), guanine (G) and thymine (T).
// The four nucleotides found in RNA are adenine (A), cytosine (C), guanine (G) and uracil (U).
// Given a DNA strand, its transcribed RNA strand is formed by replacing each nucleotide with its complement:
// G -> C // C -> G // T -> A // A -> U
// transcription('GCT') should return 'CGA'
// transcription('GATC') should return 'CUAG'

const transcription = (dna) => {
    const nucleotidesDNA = ['G', 'C', 'T', 'A'];
    const nucleotidesRNA = ['C', 'G', 'A', 'U'];
	let rna = '';

    for (let nucleotide of dna){
        let index = nucleotidesDNA.indexOf(nucleotide);
        rna = rna + nucleotidesRNA.at(index);
    }

	return rna
}

console.log(transcription('GATC'));


// #37. Tell if its a leap year
// Given a year, report if it is a leap year.
// The tricky thing here is that a leap year in the Gregorian calendar occurs:
// on every year that is evenly divisible by 4 except every year that is evenly divisible by 100 unless the year is also evenly divisible by 400
// For example, 1997 is not a leap year, but 1996 is. 1900 is not a leap year, but 2000 is.
// isLeap(2022) should return false
// isLeap(2020) should return true

const isLeap = (year) => {
	let isLeapYear = year % 4 === 0;

    if (year % 100 === 0){
        isLeapYear = false;
    }

    if (year % 400 === 0){
        isLeapYear = true;
    }

	return isLeapYear
}

console.log(isLeap(2022));


// #38. Luhn algorithm
// Given a number determine whether or not it is valid per the Luhn formula.
// The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.
// The task is to check if a given string is valid.
// Validating a Number
// Strings of length 1 or less are not valid. Spaces are allowed in the input, but they should be stripped before checking. All other non-digit characters are disallowed.
// Example 1: valid credit card number
// 4539 3195 0343 6467
// The first step of the Luhn algorithm is to double every second digit, starting from the right. We will be doubling
// 4_3_ 3_9_ 0_4_ 6_6_
// If doubling the number results in a number greater than 9 then subtract 9 from the product. The results of our doubling:
// 8569 6195 0383 3437
// Then sum all of the digits:
// 8+5+6+9+6+1+9+5+0+3+8+3+3+4+3+7 = 80
// If the sum is evenly divisible by 10, then the number is valid. This number is valid!
// Example 2: invalid credit card number
// 8273 1232 7352 0569
// Double the second digits, starting from the right
// 7253 2262 5312 0539
// Sum the digits
// 7+2+5+3+2+2+6+2+5+3+1+2+0+5+3+9 = 57
// 57 is not evenly divisible by 10, so this number is not valid.


const valid = (string) => {
	let isValid = false;
    isValid = string.length > 1;

    if (isValid){
        let pattern = /^ *$|[^0-9 ]/g;
        isValid = !(pattern.test(string));  // this line will return true if the input contains only digits and spaces, false - if contains non-digit characters or only spaces

        if (isValid){
            let sum = 0;
            let splitedInput = string.split(' ');
            let joinedInput = splitedInput.join('');
            // double every second digit, starting from the right
                for (let i = joinedInput.length-2; i >= 0; i-=2){
                    let currNumber = parseInt(joinedInput[i]);
                    let doubledValue = currNumber * 2;
            // If doubling the number results in a number greater than 9 then subtract 9
                    if (doubledValue > 9){
                        currNumber = doubledValue - 9;
                    } else {
                        currNumber = doubledValue;
                    }
            // the sum of all doubeled numbers
                    sum += currNumber;
                }
            // add the rest of the numbers, starting from the right again
                for (let i = joinedInput.length-1; i >= 0; i-=2){
                    let currNumber = parseInt(joinedInput[i]);
                    sum += currNumber;
                }
            // If the sum is not evenly divisible by 10, the number is invalid
                if (sum % 10 !== 0){
                    isValid = false;
                }
            }
        }
	    return isValid
}

console.log(valid('8273 1232 7352 0569'));


// #39. Mixed Juices
// Your friend Li Mei runs her own juice bar where she sells delicious mixed fruit juices. You are a frequent customer in her shop and realized you could make your friend's life easier. You decide to use your coding skills to help Li Mei with her job.

// 1. Determine how long it takes to mix a juice
// Li Mei likes to tell her customers in advance how long they have to wait for a juice from the menu that they ordered. She has a hard time remembering the exact numbers, because the time it takes to mix the juices varies. 'Pure Strawberry Joy' takes 0.5 minutes, 'Energizer' and 'Green Garden' take 1.5 minutes each, 'Tropical Island' takes 3 minutes and 'All or Nothing' takes 5 minutes. For all other drinks (e.g., special offers) you can assume a preparation time of 2.5 minutes.

// To help your friend, write a function timeToMixJuice that takes a juice from the menu as an argument and returns the number of minutes it take to mix that drink.

// timeToMixJuice('Tropical Island'); // => 3

// timeToMixJuice('Berries & Lime'); // => 2.5

// 2. Replenish the lime wedge supply
// A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the decoration. So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.

// Implement the function limesToCut which takes the number of lime wedges Li Mei needs to cut and an array representing the supply of whole limes she has at hand. She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime. She always cuts the limes in the order in which they appear in the list, starting with the first item. She keeps going until she reached the number of wedges that she needs or until she runs out of limes.

// Li Mei would like to know in advance how many limes she needs to cut. The limesToCut function should return the number of limes to cut.

// limesToCut(25, ['small', 'small', 'large', 'medium', 'small']); // => 4

// 3. Finish up the shift
// Li Mei always works until 3pm. Then her employee Dmitry takes over. There are often drinks that have been ordered but are not prepared yet when Li Mei's shift ends. Dmitry will then prepare the remaining juices.

// To make the hand-over easier, implement a function remainingOrders which takes the number of minutes left in Li Mei's shift and an array of juices that have been ordered but not prepared yet. The function should return the orders that Li Mei cannot start preparing before the end of her work day.

// The time left in the shift will always be greater than 0. Furthermore the orders are prepared in the order in which they appear in the array. If Li Mei starts to mix a certain juice, she will always finish it even if she has to work a bit longer. If there are no remaining orders left that Dmitry needs to take care of, an empty array should be returned.

// remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']); // => ['Green Garden']

const drinks = {
    'Pure Strawberry Joy': 0.5,
    'Energizer': 1.5,
    'Green Garden': 1.5,
    'Tropical Island': 3,
    'All or Nothing': 5,
    default: 2.5
}

const timeToMixJuice = (name) => {
	const timeForPreparing = drinks[name] || drinks.default;
	return timeForPreparing
}

console.log(timeToMixJuice('Tropical Island')); //3
console.log(timeToMixJuice('Berries & Lime')); // 2.5

const wedgesFromLime = {
    'small': 6,
    'medium': 8,
    'large': 10,
}

const limesToCut = (wedgesNeeded, limes) => {
	let counterLimesToCut = 0;
    let wedges = 0;

    while (wedges < wedgesNeeded && counterLimesToCut <= limes.length){
        wedges += wedgesFromLime[limes[counterLimesToCut]];
        counterLimesToCut++;
    }

	return counterLimesToCut
}

console.log(limesToCut(25, ['small', 'small', 'large', 'medium', 'small'])); // 4

const remainingOrders = (timeLeft, orders) => {
	let remainingOrdersForPreparing = orders;

    while (timeLeft >= 0 && orders.length >= 0){
        let currentOrderForPreparing = remainingOrdersForPreparing[0];
        let timeForPreparing = drinks[currentOrderForPreparing];
        timeLeft -= timeForPreparing;
        orders.shift();
    }

	return remainingOrdersForPreparing
}

console.log(remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden'])); // ['Green Garden']


// #40. Vehicle Purchase
// In this exercise you are going to write some code to help you prepare to buy a vehicle.
// You have three tasks, one to determine if you will need to get a licence, one to help you choose between two vehicles and one to estimate the acceptable price for a used vehicle.
// 1. Determine if you will need a drivers licence
// Some kinds of vehicles require a drivers license to operate them. Assume only the kinds 'car' and 'truck' require a license, everything else can be operated without a license.
// Implement the needsLicense(kind) function that takes the kind of vehicle and returns a boolean indicating whether you need a license for that kind of vehicle.
// needsLicense('car'); // => true
// needsLicense('bike'); // => false

// 2. Choose between two potential vehicles to buy
// You evaluate your options of available vehicles. You manage to narrow it down to two options but you need help making the final decision. For that implement the function chooseVehicle(option1, option2) that takes two vehicles as arguments and returns a decision that includes the option that comes first in dictionary order.
// chooseVehicle('Wuling Hongguang', 'Toyota Corolla'); // => 'Toyota Corolla is clearly the better choice.'
// chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'); // => 'Volkswagen Beetle is clearly the better choice.'

// 3. Calculate an estimation for the price of a used vehicle
// Now that you made your decision you want to make sure you get a fair price at the dealership. Since you are interested in buying a used vehicle, the price depends on how old the vehicle is. For a rough estimate, assume if the vehicle is less than 3 years old, it costs 80% of the original price it had when it was brand new. If it is more than 10 years old, it costs 50%. If the vehicle is at least 3 years old but not older than 10 years, it costs 70% of the original price.
// Implement the calculateResellPrice(originalPrice, age) function that applies this logic using if, else if and else (there are other ways but you want to practice). It takes the original price and the age of the vehicle as arguments and returns the estimated price in the dealership.

// calculateResellPrice(1000, 1); // => 800
// calculateResellPrice(1000, 5); // => 700
// calculateResellPrice(1000, 15); // => 500

const needsLicense = (kind) => {
	const vehiclesRequiringLicense = {
        car: true,
        truck: true,
    }

    let isLicenseRequired = false;

    if (vehiclesRequiringLicense[kind] !== undefined){
        isLicenseRequired = true;
    }

	return isLicenseRequired
}

needsLicense('car');

const chooseVehicle = (option1, option2) => {
	const vehicles = [option1, option2];
    vehicles[0] = option1.toLowerCase();
    vehicles[1] = option2.toLowerCase();
    vehicles.sort();

	return vehicles
}

chooseVehicle('Wuling Hongguang', 'Toyota Corolla');

const calculateResellPrice = (originalPrice, age) => {
    let a = 0.5;

	if (age < 3){
        a = 0.8;
    } else if (age >= 3 && age <= 10) {
        a = 0.7;
    }

    let price = originalPrice * a;

	return price
}

calculateResellPrice(1000, 1);


// #41. Categorize New Member
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input will consist of a array of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output will consist of a list of string values stating whether the respective member is to be placed in the senior or open category.
// openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]) should return ['Open', 'Senior', 'Open', 'Senior']
// openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]) should return['Open', 'Open', 'Open', 'Open']
// openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]) should return ['Senior', 'Open', 'Open', 'Open']

function openOrSenior(data) {
    const membersByCategories = [];

    for (let member of data){
        if (member[0] > 54 && member[1] > 7){
            membersByCategories.push('Senior');
        } else {
            membersByCategories.push('Open');
        }
    }

    return membersByCategories
  }
  
const input = [[45, 12],[55,21],[19, -2],[104, 20]];
  
console.log(openOrSenior(input));


// #42. Sum of two lowest positive integers
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// sumTwoSmallestNumbers([5, 8, 12, 19, 22]) should return 13
// sumTwoSmallestNumbers([15, 28, 4, 2, 43]) should return 6
// sumTwoSmallestNumbers([23, 71, 33, 82, 1]) should return 24

function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function(a, b){return a-b});
    const sumOfTwoSmallestNumbers = numbers[0] + numbers[1];
    return sumOfTwoSmallestNumbers
}

sumTwoSmallestNumbers([5, 8, 12, 19, 22]);


// #43. Highest Scoring Word
// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.
// high('man i need a taxi up to ubud') should return 'taxi'
// high('what time are we climbing up the volcano') should return 'volcano'

// climbing = 3+12+9+13+2+9+14+7 = 69
// volcano = 22+15+12+3+1+14+15 = 82

function high(x) {
    const alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
    const words = x.split(' ');
    let biggestScoreFromLettersInOneWord = 0;
    let highestScoringWord = '';

    for (const word of words){

        let currentSum = 0;

        for (const letter of word){
            let positionInAlphabet = alphabet.indexOf(letter) + 1;
            currentSum += positionInAlphabet;
        }

        if (currentSum > biggestScoreFromLettersInOneWord){
            biggestScoreFromLettersInOneWord = currentSum;
            highestScoringWord = word;
        }
    }

    return highestScoringWord
}

console.log(high('man i need a taxi up to ubud'));


// #44. Count the divisors of a number
// Count the number of divisors of a positive integer n.
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// getDivisorsCnt(10) should return 4
// getDivisorsCnt(11) should return 2
// getDivisorsCnt(54) should return 8

function getDivisorsCnt(num) {
    let curNumber = num;
    let counterDivisors = 0;

    while (curNumber > 0){
        if (num % curNumber === 0){
            counterDivisors++;
        }
        curNumber--;
    }

    return counterDivisors
}

console.log(getDivisorsCnt(10)); // 4
console.log(getDivisorsCnt(11)); // 2
console.log(getDivisorsCnt(54)); // 8


// #45. Find The Parity Outlier
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// [2, 4, 0, 100, 4, 11, 2602, 36] should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] should return: 160
// findOutlier([2,6,8,10,3]) should return 3
// findOutlier([0,0,3,0,0]) should return 3
// findOutlier([1,1,0,1,1]) should return 0

function findOutlier(integers) {
    let counterOddNumbers = 0;
    let counterEvenNumbers = 0;
    let searchedNumber = undefined;

    for (let i = 0; i < 3; i++){
        if (integers[i] % 2 === 0){
            counterEvenNumbers++;
        } else {
            counterOddNumbers++;
        }
    }

    if (counterEvenNumbers > counterOddNumbers){
        searchedNumber = findOddNumber(integers);
    } else {
        searchedNumber = findEvenNumber(integers);
    }

    function findOddNumber(nums){
        let oddNumber = nums.find(integer => integer % 2 !== 0);
        return oddNumber
    }

    function findEvenNumber(nums){
        let evenNumber = nums.find(integer => integer % 2 === 0);
        return evenNumber
    }

    return searchedNumber
}

console.log(findOutlier([2,6,8,10,3])); // 3
console.log(findOutlier([0,0,3,0,0]));  // 3
console.log(findOutlier([1,1,0,1,1]));  // 0
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160
