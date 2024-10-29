/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    if (!str) {
        return true;
    }
    const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');
    const reversedStr = cleanedStr.split("").reverse().join("");
    return reversedStr === cleanedStr;
}

module.exports = isPalindrome;
