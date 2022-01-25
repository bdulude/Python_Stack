/* 
    Given two arrays, interleave them into one new array.
    The arrays may be different lengths. The extra items should be added to the
    back of the new array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */

/*
    a function that takes in two arrays
    create an output array
    use a while loop to iterate through both arrays at once
    if there's an element from the first array, add it
    if there's an element from the second array, add it
    return the output
*/

function interleaveArrays(arr1, arr2) {
    let output = []
    let x = 0
    let y = 0
    if (arr1.length == 0) {
        return arr2
    }
    else if (arr2.length == 0) {
        return arr1
    }
    while (x < arr1.length || y < arr2.length) {
        if (x < arr1.length) {
            output.push(arr1[x])
            x++
        }
        if (y < arr2.length) {
            output.push(arr2[y])
            y++
        }
    }
    return output
}

console.log(interleaveArrays(arrA1, arrB1))
console.log(interleaveArrays(arrA2, arrB2))
console.log(interleaveArrays(arrA3, arrB3))
console.log(interleaveArrays(arrA4, arrB4))

/* 
    Array: Binary Search (non recursive)
    Given a sorted array and a value, return whether the array contains that value.
    Do not sequentially iterate the array. Instead, ‘divide and conquer’,
    taking advantage of the fact that the array is sorted .
        Bonus (alumni interview): 
        first complete it without the bonus, because they ask for additions
        after the initial algo is complete
        return how many times the given number occurs
*/

const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
// const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
// const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
// const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
// const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {}