/* 
    String: Is Palindrome
    Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards

    Do not ignore spaces, punctuation and capitalization
 */
/*

/*
    - function that takes in a string
    - declare start and end variable
    - iterate start variable from 0 +1
    - iterate end variable from str.len -1
    - if start variable is equal to the end variable, proceed
    - if not return false
*/
    const str1 = "a x a";
    const expected1 = true;
    
    const str2 = "racecar";
    const expected2 = true;
    
    const str3 = "Dud";
    const expected3 = false;
    
    const str4 = "oho!";
    const expected4 = false;
    
/**
   * Determines if the given str is a palindrome (same forwards and backwards).
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str
   * @returns {boolean} Whether the given str is a palindrome or not.
   */
    function isPalindrome(str) {
        let start = 0
        let end = str.length -1
        while (start < end) {
            if (str[start] != str[end]) {
                return false
            }
            start += 1
            end -= 1
        }
        return true
    }

// console.log(isPalindrome(str4))

//   ********************************************************************************

/* 
    Longest Palindrome
    For this challenge, we will look not only at the entire string provided, but also at the substrings within it. Return the longest palindromic substring. 
    Strings longer or shorter than complete words are OK.
    All the substrings of "abc" are:
    a, ab, abc, b, bc, c
*/

/*
    - function that takes in a string
    - split the string into various substrings and call the isPalindrome() we just wrote
    - if string is 1 character or less, return input string
    - for each character in the string, create a substring with every character that comes after
    - store the longest palindrome found, compare to new palindromes found
    - return longest
*/

const two_str1 = "what up, daddy-o?";
const two_expected1 = "dad";

const two_str2 = "uh, not much";
const two_expected2 = "u";

const two_str3 = "Yikes! my favorite racecar erupted!";
const two_expected3 = "e racecar e";

const two_str4 = "a1001x20002y5677765z";
const two_expected4 = "5677765";

const two_str5 = "a1001x20002y567765z";
const two_expected5 = "567765";

/**
 * Finds the longest palindromic substring in the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The longest palindromic substring from the given string.
 */

function longestPalindromicSubstring(str) {
    if (str.length <= 1) {
        return str
    }
    let longest = str[0]
    for (let x = 0; x < str.length-2; x++) {
        for (let y = x+2; y < str.length; y++) {
            let sub = str.substring(x, y)
            if (sub.length > longest.length) {
                if (isPalindrome(sub)) {
                    longest = sub
                }
            }
        }
    }
    return longest
}

console.log(longestPalindromicSubstring(two_str5))