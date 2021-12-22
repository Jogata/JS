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
