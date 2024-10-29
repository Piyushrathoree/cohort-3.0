/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let strA = str1.toLowerCase();
  let strB = str2.toLowerCase();

  if (strA.length !== strB.length) {
    return false;
  }
  return strA.split("").sort().join() === strB.split("").sort().join();
}

module.exports = isAnagram;

