/**
 * Given an integer array nums sorted in non-decreasing order, 
 * remove the duplicates in-place such that each unique element appears only once.
 * The relative order of the elements should be kept the same.
 * Then return the number of unique elements in nums.
 *
 * Consider the number of unique elements of nums to be k, 
 * to get accepted, you need to do the following things:
 * 
 * Change the array nums such that the first k elements of nums contain the unique elements
 * in the order they were present in nums initially. The remaining elements of nums are not
 * important as well as the size of nums.
 * 
 * @param {number[]} nums - The input array of integers.
 * @return {number} - The number of unique elements after removing duplicates.
 */
var removeDuplicates = function(nums) {
    let i = 0;           // Pointer for iterating through the array.
    let k = 0;           // Pointer for maintaining the position of the unique elements.
    let uniqueValue = null; // Variable to keep track of the last unique value encountered.

    while (i < nums.length) {
        if (nums[i] === uniqueValue) {
            // If the current element is the same as the last unique value encountered,
            // move to the next element (duplicate), skip it, and continue searching for unique values.
            i++;
        } else {
            // If the current element is different from the last unique value encountered,
            // update the uniqueValue and copy it to the k-th position in the array (if needed).
            uniqueValue = nums[i];
            nums[k] = nums[i]; // Copy the unique value to the k-th position.
            i++;               // Move to the next element.
            k++;               // Increment k to prepare for the next unique element.
        }
    }

    return k; // Return the number of unique elements (k).
};
