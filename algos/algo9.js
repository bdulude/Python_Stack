/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

const str2 = "        ";
const expected2 = "";

const str3 = "   hello world earth     ";
const expected3 = "hello world earth";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */

/*
    create a function that takes in a string
    iterate through start of string to find non space characters, save index
    iterate through end of string to find non-space characters, save index
    create a new string with a substring between the indicies
    return the substring

*/


function trim(str) {
    let startIndex = 0;
    let endIndex = str.length-1;
    while ((str[startIndex] == " " || str[endIndex] == " ") && (startIndex < endIndex) ){
        if (str[startIndex] == " "){
            startIndex += 1
        }
        if (str[endIndex] == " "){
            endIndex -= 1
        }
    }
    return str.substring(startIndex, endIndex+1)
}


// console.log(trim(str1))
// console.log(trim(str2))
// console.log(trim(str3))

// ************************************************************************

/* 
    An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
    typically using all the original letters exactly once.
    Is there a quick way to determine if they aren't an anagram before spending more time?
    Given two strings
    return whether or not they are anagrams
*/

const two_strA1 = "yes3";
const two_strB1 = "3eys";
const two_expected1 = true;

const two_strA2 = "yes";
const two_strB2 = "eYs";
const two_expected2 = true;

const two_strA3 = "no";
const two_strB3 = "noo";
const two_expected3 = false;

const two_strA4 = "silent";
const two_strB4 = "listen";
const two_expected4 = true;

const two_strA5 = "not";
const two_strB5 = "noo";
const two_expected5 = false;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */

/*
    create a function that takes in two strings
    returns a boolean
    if the string lengths are different, return false
    create an object out of the first string made up of each character
    create an object out of the second string made up of each character
    loop through objects together to see if each key exists
    if they do not, return false
    otherwise return true

*/
function isAnagram(s1, s2) {
    s1Obj = {}
    s2Obj = {}

    if (s1.length != s2.length)
        return false
    
    for (let i = 0; i < s1.length; i++){
        s1Obj[s1[i]] = 1
        s2Obj[s2[i]] = 1
    }

    for (let key in s1Obj){
        if (!s2Obj.hasOwnProperty(key))
            return false
    }
    return true
}
console.log(isAnagram(two_strA1, two_strB1))
console.log(isAnagram(two_strA2, two_strB2))
console.log(isAnagram(two_strA3, two_strB3))
console.log(isAnagram(two_strA4, two_strB4))
console.log(isAnagram(two_strA5, two_strB5))
