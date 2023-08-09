/**
 * 80 Remove Duplicates from Sorted Array II
 *
 * Given an integer array nums sorted in non-decreasing order,
 * remove some duplicates in-place such that each unique element appears at most twice.
 * The relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages,
 * you must instead have the result be placed in the first part of the array nums.
 * More formally, if there are k elements after removing the duplicates,
 * then the first k elements of nums should hold the final result.
 * It does not matter what you leave beyond the first k elements.
 *
 * Return k after placing the final result in the first k slots of nums.
 *
 * Do not allocate extra space for another array.
 * You must do this by modifying the input array in-place with O(1) extra memory.
 *
 * @param {number[]} nums - The input array of integers.
 * @return {number} - The number of elements after removing duplicates and placing the result in the first k slots.
 */
var removeDuplicates = function(nums) {
    let k = 0; // Pointer for maintaining the position of the final result.
    let i = 0; // Pointer for iterating through the array.
    let uniqueElement = {
        value: null,
        count: 0
    };

    while (i < nums.length) {
        if (uniqueElement.value !== nums[i]) {
            // If the current element is different from the previous unique element encountered,
            // update the uniqueElement object with the new value and reset the count.
            uniqueElement = {
                value: nums[i],
                count: 0
            };
        }

        if (nums[i] === uniqueElement.value && uniqueElement.count < 2) {
            // If the current element is the same as the unique element and its count is less than 2,
            // copy it to the k-th position in the array and update the count and pointers.
            nums[k] = nums[i];
            uniqueElement.count++;
            i++; // Move to the next element.
            k++; // Increment k to prepare for the next unique or at-most-twice element.
        } else {
            if (nums[i] === uniqueElement.value) {
                // If the current element is the same as the unique element,
                // but its count has reached 2, just update the count and move to the next element.
                uniqueElement.count++;
            }
            i++; // Move to the next element.
        }
    }
    return k; // Return the number of elements after removing duplicates and placing the result in the first k slots.
};
