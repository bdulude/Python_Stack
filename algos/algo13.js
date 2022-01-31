/* 
    Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
// const expected1 = 6;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i=0) {
    // edge case 

    // base case -> what is going to end the recursion
    if (i === nums.length){
        return 0
    }

    // recursive call
    return nums[i] + sumArr(nums, i + 1)
}

// console.log(sumArr(nums1));


// *******************************************************


/* 
Recursive Sigma
Input: integer
Output: sum of integers from 1 to Input integer
*/

const num1 = 5;
const expected1 = 15;
// Explanation: (1+2+3+4+5)

const num2 = 2.5;
const expected2 = 3;
// Explanation: (1+2)

const num3 = -1;
const expected3 = 0;
/*
    create a function that takes in a number
    math.floor the number to get rid of decimal places
    if the number is zero or less return 0 and do not call function again
    else we return the number plus the function call with number minus 1 as the argument
*/



/**
 * Recursively sum the given int and every previous positive int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num
 * @returns {number}
 */
function recursiveSigma(num){
    return Math.floor(num) <= 0 ?  0 : Math.floor(num) + recursiveSigma(num-1)
}



console.log(recursiveSigma(num1))
console.log(recursiveSigma(num2))
console.log(recursiveSigma(num3))