/**
167. Two Sum II - Input Array Is Sorted
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, 
find two numbers such that they add up to a specific target number. 
Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 < numbers.length.
Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 * @param {number[]} numbers - A sorted array of integers
 * @param {number} target - The target sum to find
 * @return {number[]} - An array containing the indices of the two numbers that add up to the target
 */
var twoSum = function(numbers, target) {
    // Initialize two pointers, one at the beginning and one at the end of the array
    let left = 0;
    let right = numbers.length - 1;

    // Loop until the pointers meet or cross each other
    while (left <= right) {
        // Calculate the sum of the current elements pointed to by the two pointers
        const currentSum = numbers[left] + numbers[right];

        // Compare the current sum with the target
        if (currentSum === target) {
            // If the sum is equal to the target, return the indices of the two numbers
            return [left + 1, right + 1]; // Adding 1 to indices to make them 1-indexed
        } else if (currentSum < target) {
            // If the current sum is less than the target, move the left pointer to the right
            left++;
        } else {
            // If the current sum is greater than the target, move the right pointer to the left
            right--;
        }
    }

    // If no solution is found, return null
    return null;
};
