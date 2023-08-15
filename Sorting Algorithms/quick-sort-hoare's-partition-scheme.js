/**
 * Sorts an array using the Quick Sort algorithm.
 *
 * @param {number[]} array - The array to be sorted.
 * @param {number} left - The index of the left boundary of the subarray to be sorted.
 * @param {number} right - The index of the right boundary of the subarray to be sorted.
 */
const quickSort = function(array, left, right) {
    // Sort only if we need to sort more than 1 element
    if (left < right) {
        const partitionIdx = partition(array, left, right);
        
        // Recursively sort the subarrays on both sides of the partition
        quickSort(array, left, partitionIdx - 1);
        quickSort(array, partitionIdx + 1, right);
    }
}

/**
 * Partitions the array into two subarrays based on a pivot element.
 *
 * @param {number[]} array - The array to be partitioned.
 * @param {number} left - The index of the left boundary of the subarray to be partitioned.
 * @param {number} right - The index of the right boundary of the subarray to be partitioned.
 * @returns {number} - The index of the pivot element after partitioning.
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
}

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
}
