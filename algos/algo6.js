/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const str1 = "hello";
const expected1 = "olleh";

const str2 = "hello world";
const expected2 = "olleh dlrow";

const str3 = "abc def ghi";
const expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
 function reverser(word) {
    return word.split('').reverse().join('');
}

function reverseWords(str) {
    var wordsArr = str.split(" ");
    var output = "";
    for (var i = 0; i < wordsArr.length; i++) {
        if (i==0) {
            output += reverser(wordsArr[i]);
        } else {
        output += (" " + reverser(wordsArr[i]));
        }
    }
    return output;
}

// *****************************************************

/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const two_str1 = "This is a test";
const two_expected1 = "test a is This";

/**
 * Reverses the order of the words but not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @returns {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
 function reverseWordOrder(wordsStr) {
    let output = "";
    let wordsArr = wordsStr.split(" ");
    for (let i = wordsArr.length-1; i >= 0; i--) {
        if (i==0) {
            output += wordsArr[i];
        } else {
            output += wordsArr[i] + " ";
        }
    }
    return output;
}

// ********************************************************

/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const three_str1 = "abcABC";
const three_expected1 = "abcABC";

const three_str2 = " helloo ";
const three_expected2 = " helo";

// Bonus
const three_str3 = " hellool ";
const three_expected3 = "heol ";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
 function stringDedupe(str) {
    let output = "";
    let obj = {};
    for (let i = str.length-1; i >= 0; i--) {
        if (!obj.hasOwnProperty(str[i])) {
            // output += str[i] 
            output= str[i] + output;
            obj[str[i]] = 1;
        }
    }
    return output;
}