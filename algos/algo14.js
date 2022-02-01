/* 
    Recursive Factorial
    Input: integer
    Output: integer, product of ints from 1 up to given integer
    
    If less than zero, treat as zero.
    Bonus: If not integer, truncate (remove decimals).
    
    Experts tell us 0! is 1.
    
    rFact(3) = 6 (1*2*3)
    rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
// const expected1 = 6;
// Explanation: 1*2*3 = 6

const num2 = 6.8;
// const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
// const expected3 = 1;

/**
 * Recursively multiples 1 to the given int.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} n The int to factorial. Treat negatives as zero and
 *    floor decimals.
 * @returns {number} The result of !n.
 */

/*
    create a function that takes in a number
    floor the number
    return the number multiplied by the product of the function called with number-1
    if the number is 1 or less return 1
*/


function factorial(n) {
    return Math.floor(n) <= 1 ? 1 : Math.floor(n) * factorial(n-1)
}

function factorial2(n) {
    n = Math.floor(n)
    if (n <= 1) 
        return 1
    return n * factorial(n-1)
}

// console.log(factorial(num1))
// console.log(factorial(num2))
// console.log(factorial(num3))

// ****************************************************************

/* 
    Return the fibonacci number at the nth position, recursively.
    
    Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
    The next number is found by adding up the two numbers before it,
    starting with 0 and 1 as the first two numbers of the sequence.
*/

const two_num1 = 0;
const expected1 = 0;

const two_num2 = 1;
const expected2 = 1;

const two_num3 = 2;
const expected3 = 1;

const two_num4 = 3;
const expected4 = 2;

const two_num5 = 4;
const expected5 = 3;

const two_num6 = 8;
const expected6 = 21;

const two_num7 = 45;

/**
 * Recursively finds the nth number in the fibonacci sequence.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} num The position of the desired number in the fibonacci sequence.
 * @returns {number} The fibonacci number at the given position.
 */

/*
    create a function that takes in two numbers, the other is index value, one is the sequence number that defaults to 0
    if the index is less than or equal to 1 return itself
    return fibonacci(index-1, ) + fibonacci(index-2, )

*/

function fibonacci(num) {
    num = Math.floor(num)
    if (num <= 1) {
        return num;
    }
    return fibonacci(num-2) + fibonacci(num-1)
}

console.log(fibonacci(two_num1))
console.log(fibonacci(two_num2))
console.log(fibonacci(two_num3))
console.log(fibonacci(two_num4))
console.log(fibonacci(two_num5))
console.log(fibonacci(two_num6))
// console.log(fibonacci(two_num7))