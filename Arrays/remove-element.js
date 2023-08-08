/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // Two pointer approach
    // Pointer one for iteration
    // Pointer two for replacing the elements that are not equal to the val
    let i = k = 0;
    while (i < nums.length) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
            i++;
        } else {
            i++;
        }
    }
    return k;
};
