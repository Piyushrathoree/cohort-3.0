/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const finalStr = str.toLowerCase().split("");
    let vowelCount = 0;
    finalStr.forEach((char) => {
        if (
            char === "a" ||
            char === "i" ||
            char === "o" ||
            char === "e" ||
            char === "u"
        ) {
            vowelCount++;
        }
    });

    return vowelCount;
}
module.exports = countVowels;
