/* 
    Given an array of strings
    return a sum to represent how many times each array item is found (a frequency table)
    Useful methods:
        Object.hasOwnProperty("keyName")
        - returns true or false if the object has the key or not
        Python: key in dict
*/

/*
    function that takes in an array
    create an output object
    for loop to iterate through input array
        if character at index doesn't exist, create key, increment it
        else increment key
    output object
*/

const arr1 = ["a", "a", "a"];
// const expected1 = {
//     a: 3,
// };

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
// const expected2 = {
//     a: 2,
//     b: 1,
//     c: 3,
//     B: 1,
//     d: 1,
// };

const arr3 = [];
// const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function frequencyTableBuilder(arr) {
    let output = {}
    for (let x = 0; x < arr.length; x++) {
        if (!output[arr[x]]) {
            output[arr[x]] = 1
        }
        else {
            output[arr[x]] += 1
        }
    }
    return output
}
// console.log(frequencyTableBuilder(arr2))


// *****************************************************************************

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

/*
    create a function that takes in an array
    if arr length is 1 return array
    get output from frequencytablebuilder into variable
    for loop iterating through output object
        if value equals 1
            return key
        else if value is greater than 2
            mod two to check for odd values
            if result is 1
                return key
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

function oddOccurrencesInArray(nums) {
    if (nums.length == 1){
        return nums[0]
    }
    let freq = frequencyTableBuilder(nums)
    for (let key in freq) {
        let value = freq[key] % 2
        if (value == 1){
            return key
        }
    }
}
console.log(oddOccurrencesInArray(nums3))
