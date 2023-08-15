/**
 * 215. Kth Largest Element in an Array
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Can you solve it without sorting?
 * 
 * Use Hoare's QuickSelect
 */

/**
 * Finds the kth largest element in the given array using Hoare's quick select algorithm.
 *
 * @param {number[]} nums - The array containing elements.
 * @param {number} k - The value of k for finding the kth largest element.
 * @return {number} - The kth largest element in the array.
 */
var findKthLargest = function(nums, k) {
    return quickSelect(nums, 0, nums.length - 1, nums.length - k);
};

/**
 * Performs the quick select algorithm to find the kth largest element.
 *
 * @param {number[]} array - The array containing elements.
 * @param {number} left - The index of the left boundary of the subarray.
 * @param {number} right - The index of the right boundary of the subarray.
 * @param {number} idxToFind - The index of the element to find.
 * @return {number} - The kth largest element in the subarray.
 */
const quickSelect = function(array, left, right, idxToFind) {
    // Sort only if we need to sort more than 1 element
    if (left < right) {
        const partitionIdx = partition(array, left, right);
        if (partitionIdx === idxToFind) {
            return array[partitionIdx]; // Found the kth largest element
        } else if (idxToFind < partitionIdx) {
            return quickSelect(array, left, partitionIdx - 1, idxToFind); // Search left subarray
        } else {
            return quickSelect(array, partitionIdx + 1, right, idxToFind); // Search right subarray
        }
    }

    // If the array length is 1
    return array[idxToFind];
};

/**
 * Partitions the array using Hoare's partition scheme.
 *
 * @param {number[]} array - The array to be partitioned.
 * @param {number} left - The index of the left boundary of the subarray.
 * @param {number} right - The index of the right boundary of the subarray.
 * @return {number} - The index of the pivot element after partitioning.
 */
const partition = function(array, left, right) {
    const pivot = array[right]; // Choose the rightmost element as the pivot
    let partitionIdx = left;    // Initialize the partition index to the left boundary
    
    // Iterate through the subarray to rearrange elements around the pivot
    for (let j = left; j < right; j++) {
        if (array[j] < pivot) {
            // Swap elements that are smaller than the pivot
            swap(array, partitionIdx, j);
            partitionIdx++; // Increment the partition index
        }
    }
    
    // Swap the pivot element to its correct position in the array
    swap(array, partitionIdx, right);
    
    return partitionIdx; // Return the new index of the pivot element
};

/**
 * Swaps two elements in an array.
 *
 * @param {number[]} array - The array containing the elements to be swapped.
 * @param {number} i - The index of the first element.
 * @param {number} j - The index of the second element.
 */
const swap = function(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};
