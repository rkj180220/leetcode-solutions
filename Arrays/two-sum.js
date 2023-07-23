/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Use Hash Table with difference value as the key and index as the value to avoid O(n^2) Time Complexity.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let differenceIndex = {};
    let differenceValue = 0;
    for (i = 0; i < nums.length; i++) {
        if (differenceIndex[nums[i]] != undefined) {
            return [differenceIndex[nums[i]], i];
        }
        differenceValue = target - nums[i];
        differenceIndex[differenceValue] = i;
    }
    return [];
}