/*
String: Rotate String
Create a standalone function that accepts a string and an integer,
and rotates the characters in the string to the right by that given
integer amount.
*/

const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

const rotateAmnt6 = -1;
/* 
Explanation: this is 2 more than the length so it ends up being the same
as rotating it 2 characters because after rotating every letter it gets back
to the original position.
*/

/**
* Rotates a given string's characters to the right by the given amount,
* wrapping characters to the beginning.
* - Time: O(?).
* - Space: O(?).
* @param {string} str
* @param {number} amnt The amount of characters in the given str to rotate to the
*    right.
* @returns {string} The string rotated by the given amount.
*/

/*
    create a function that takes in a string and a number
    create an empty sub string
    use substring to cut last amount off the end and append it to the front
    return concat str with sub for output string
*/



function rotateStr(str, amnt) {
    let sub = ""
    if (amnt < 0) {
        amnt += Math.ceil(-1*amnt/str.length)*str.length
        console.log(amnt)
    }
    amnt = amnt % str.length
    sub = substring(str, str.length-amnt, str.length)
    str = substring(str, 0, str.length-amnt)
    return sub + str;
}

function substring(str, start, end) {
    let output = ""
    for (let y = start; y < end; y++) {
        output += str[y]
    }
    return output
}

// console.log(rotateStr(str, rotateAmnt1))
// console.log(rotateStr(str, rotateAmnt2))
// console.log(rotateStr(str, rotateAmnt3))
// console.log(rotateStr(str, rotateAmnt4))
// console.log(rotateStr(str, rotateAmnt5))
console.log(rotateStr(str, rotateAmnt6))

// ************************************************************************************

/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

/*
    create a function that takes in two strings
    use a for loop to iterate through strings and create objects
    compare the two by comparing each key value pair
    if each key value is equal to the other, return true
    else return false
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// const expected1 = true;
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated

const strA2 = "ABCD";
const strB2 = "CDBA";
// const expected2 = false;
// Explanation: all same letters in 2nd string, but out of order

// const strA3 = "ABCDB";
// const strB3 = "CDBAB";

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {
    if (s1.length != s2.length)
        return false
    let objS1 = {}
    let objS2 = {}
    for (let x = 0; x < s1.length-1; x++) {
        objS1[s1[x]] = s1[x+1]
        objS2[s2[x]] = s2[x+1]
    }
    objS1[s1[s1.length-1]] = s1[0]
    objS2[s2[s2.length-1]] = s2[0]
    for (key in objS1) {
        let value1 = objS1[key]
        let value2 = objS2[key]
        if (value1 != value2) {
            return false
        }
    }
    return true
}
// console.log(isRotation(strA1, strB1))
// console.log(isRotation(strA2, strB2))
// console.log(isRotation(strA3, strB3))
