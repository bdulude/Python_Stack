/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 987234;
const expected4 = 6
// 9+8+7+2+3+4 = 3+3 = 6

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
function sumToOneDigit(num) {
    if (num < 10) return num
    return sumToOneDigit(num%10 + sumToOneDigit(Math.floor(num/10)))
}

console.log(sumToOneDigit(num4))

// **********************************************************

/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
// const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str, memo={}) {
    let anagramArray=[]
    if (str.length <= 1) {
        return [str]
    }
    let letterArray = str.split("")
    for (let i = 0; i < letterArray.length; i++) {
        let subArray = letterArray.slice(0,i).concat(letterArray.slice(i+1, letterArray.length))
        let subString = subArray.join("")
        if (!memo.hasOwnProperty(subString)) {
            memo[subString] = generateAnagrams2(subString, memo)
        }
        for (let subAnagram of memo[subString]) {
            anagramArray.push(letterArray[i] + subAnagram) 
        }
    }
    return anagramArray
}