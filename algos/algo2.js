/* 
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.

    - create a function that takes in a string and returns a string
    - create a return string
    - create a count variable that starts at 1
    - EDGE CASE: if string has no length
    - loop through the given string
        - compare the current string index to the index - 1 
        - if true: increase count
            - if character not already in return string then add to return string
        - if false: 
            - add the total count for the variable to return string
            - reset the count variable back to 1
    - return the return variable string...

  */

    const str1 = "aaaabbcddd";
    const expected1 = "a4b2c1d3";
    
    const str2 = "";
    const expected2 = "";
    
    const str3 = "a";
    const expected3 = "a";
    
    const str4 = "bbcc";
    const expected4 = "bbcc";
    
/**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs only if the
   * character occurs more than two time.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
function encodeStr(str) {
    let output = ""
    let count = 1
    if (str.length == 0){
        return str
    }
    else {
        for (let x = 1; x < str.length+1; x++) {
            if (str[x] == str[x-1]) {
                count++
            }
            else {
                output += str[x-1] + count
                count = 1
            }
        }
    }
    if (str.length == output.length) {
        return str
    }
    else {
        return output
    }
}

// console.log(encodeStr(str1))


  //   **************************************************************************************

/* 
    String Decode  
*/

const str1 = "a3b2c1d3";
const expected1 = "aaabbcddd";

const str2 = "a3b2c12d10";
const expected2 = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
/*
    -define the function that takes in a string
    -returns a decoded string
    -create empty output string
    -create for loop to iterate through input string
    -use parseInt(char)
    -if it is a number, check the next character for another number
    -if it isn't a number, add the character the number of times to the output string
    -return output string after for loop is over

*/

function decodeStr(str) {
    let output = ""
    for (let y = 0; y < str.length; y++) {
        if (!parseInt(str[y])) {
            let z = y+1
            let num = ""
            while (parseInt(z)) {
                num += str[z]
                z++
            }
            for (let i = 0; i < parseInt(num); i++) {
                output += str[y]
            }
        }
    }
    return output
}

// console.log(decodeStr(str1))
// if (parseInt("3")){
//     console.log("yes")
// }