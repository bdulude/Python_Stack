/* 
    Given an int to represent how much change is needed
    calculate the fewest number of coins needed to create that change,
    using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

/*
    create a function that takes in a number
    returns an object with the number of coins labeled as keys
    create return object
    create remainder variable
    start off with the biggest value coins, use mod to get remainder
    continue with the smaller coins until remainder is 0
    return object
*/
function fewestCoinChange(cents) {
    let coins = {}
    if (cents >= 25){
        coins['quarter'] = Math.floor(cents / 25)
        cents = cents % 25
    }
    if (cents >= 10){
        coins['dime'] = Math.floor(cents / 10)
        cents = cents % 10
    }
    if (cents >= 5){
        coins['nickle'] = Math.floor(cents / 5)
        cents = cents % 5
    }
    if (cents >= 1){
        coins['penny'] = Math.floor(cents / 1)
        cents = cents % 1
    }
    return coins
}

console.log(fewestCoinChange(cents1))
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))


/* 
    Missing Value
    You are given an array of length N that contains, in no particular order,
    integers from 0 to N . One integer value is missing.
    Quickly determine and return the missing value.
*/

const nums1 = [3, 0, 1];
// const expected1 = 2;

const nums2 = [3, 0, 1, 2];
// const expected2 = null;
// Explanation: nothing is missing

/* 
    Bonus: now the lowest value can now be any integer (including negatives),
    instead of always being 0. 
*/

const nums3 = [2, -4, 0, -3, -2, 1];
// const expected3 = -1;

const nums4 = [5, 2, 7, 8, 4, 9, 3];
// const expected4 = 6;

/**
 * Determines what the missing int is in the given unordered array of ints
 *    which spans from 0 to N where only one int is missing. With this missing
 *    int, a consecutive sequence of ints could be formed from the array.
 * Bonus: Given ints can span from N to M (start and end anywhere).
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} unorderedNums
 * @returns {number|null} The missing integer needed to be able to form an unbroken
 *    consecutive set of integers from the given array or null if none is missing.
 */

/*
    create a function that takes in an array
    get length of array to calculate sum from 0 to array length
    iterate through array to calculate the sum
    subtract array sum from array length sum
    if the difference is not array length then return difference
    otherwise return null
*/


function missingValue(unorderedNums) {
    let arrLen = unorderedNums.length
    let arrLenSum = 0
    let arrSum = 0
    for (let x = 0; x < arrLen; x++) {
        arrLenSum += x
        arrSum += unorderedNums[x]
    }
    arrLenSum += arrLen
    let diff = arrLenSum - arrSum
    if (diff == arrLen){
        return null
    }
    return diff
}

function missingValue2(unorderedNums) {
    let objNums = {}
    let min = unorderedNums[0]
    let max = unorderedNums[0]
    for (let y = 0; y < unorderedNums.length; y++) {
        objNums[unorderedNums[y]] = 1
        if (min > unorderedNums[y])
        min = unorderedNums[y]
        if (max < unorderedNums[y])
        max = unorderedNums[y]
    }
    for (let z = min; z < max; z++) {
        if (!objNums.hasOwnProperty(z))
        return z
    }
    return null
}

console.log(missingValue(nums1))
console.log(missingValue(nums2))
console.log(missingValue2(nums3))
console.log(missingValue2(nums4))