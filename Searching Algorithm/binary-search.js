/**
 * Performs binary search to find the index of the target element in a sorted array.
 *
 * @param {number[]} array - The sorted array to search in.
 * @param {number} target - The element to search for.
 * @return {?number} - The index of the target element, or null if not found.
 */
const binarySearch = function(array, target) {
    let left = 0;               // Initialize the left pointer to the start of the array
    let right = array.length - 1; // Initialize the right pointer to the end of the array

    while (left <= right) {
        const middle = Math.floor((left + right) / 2); // Calculate the middle index

        if (array[middle] === target) {
            return middle; // Target element found at the middle index
        } else if (array[middle] < target) {
            left = middle + 1; // Adjust left pointer to search the right subarray
        } else {
            right = middle - 1; // Adjust right pointer to search the left subarray
        }
    }

    return null; // Target element not found in the array
}

// Time Complexity: O(log n)
// Space Complexity: O(1)
