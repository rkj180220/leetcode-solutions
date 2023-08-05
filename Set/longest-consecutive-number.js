/**
 * 128. Longest Consecutive Sequence
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length < 2){
        return nums.length;
    }

    let set = new Set(nums);
    let longestCount = 1;

    set.forEach((item) => {
        // Identify the starting sequence
        if(!set.has(item-1)){
            //set[i] is the starting element
            let currentValue = item;
            let count = 1;
            while(set.has(currentValue + 1)) {
                currentValue++;
                count++;
            }

            longestCount = Math.max(longestCount, count);
        }
    });
    return longestCount;
};