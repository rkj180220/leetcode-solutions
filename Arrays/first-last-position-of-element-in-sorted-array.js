/**
 * 34. Find First and Last Position of Element in Sorted Arrays
 * 
 * Given an array of integers nums sorted in non-decreasing order, 
 * find the starting and ending position of a given target value.
 * If target is not found in the array, return [-1, -1].
 * You must write an algorithm with O(log n) runtime complexity.
 * 
 * 
 * Finds the first and last occurrence of the target element in a sorted array.
 *
 * @param {number[]} nums - The sorted array of integers.
 * @param {number} target - The target element to search for.
 * @return {number[]} - An array containing the first and last occurrences of the target element.
 */
const searchRange = function(nums, target) {
    const firstIndex = findIndex(nums, target, true); // Find the first occurrence
    if (firstIndex === -1) {
        return [-1,-1];
    }
    const lastIndex = findIndex(nums, target, false, firstIndex); // Find the last occurrence
    return [firstIndex, lastIndex];
};

/**
 * Helper function to find the first or last occurrence of the target element.
 *
 * @param {number[]} nums - The sorted array of integers.
 * @param {number} target - The target element to search for.
 * @param {boolean} isFirst - Indicates whether to find the first occurrence (true) or last occurrence (false).
 * @return {number} - The index of the first or last occurrence of the target element, or -1 if not found.
 */
const findIndex = function(nums, target, isFirst, start = 0) {
    let left = start;
    let right = nums.length - 1;
    let result = -1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (nums[middle] === target) {
            result = middle; // Update the result and continue searching to left or right
            if (isFirst) {
                right = middle - 1; // Search to the left for the first occurrence
            } else {
                left = middle + 1; // Search to the right for the last occurrence
            }
        } else if (nums[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }

    return result;
};

// Example usage
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
const result = searchRange(nums, target);
console.log(result); // Output: [3, 4]

// Both are having the same time complexity.
// Lesser Operations but more memory
const binarySearch = (nums, left, right, target) => {
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const foundVal = nums[mid];
      if (foundVal === target) {
        return mid;
      } else if (foundVal < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  };
  
  const searchRange = function (nums, target) {
    if (nums.length < 1) return [-1, -1];
    const firstPos = binarySearch(nums, 0, nums.length - 1, target);
  
    if (firstPos === -1) return [-1, -1];
  
    let endPos = firstPos,
      startPos = firstPos,
      temp1,
      temp2;
  
    while (startPos !== -1) {
      temp1 = startPos;
      startPos = binarySearch(nums, 0, startPos - 1, target);
    }
    startPos = temp1;
  
    while (endPos !== -1) {
      temp2 = endPos;
      endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
    }
    endPos = temp2;
  
    return [startPos, endPos];
  };