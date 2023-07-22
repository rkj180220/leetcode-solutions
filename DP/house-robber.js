/**
 * 198. House Robber
 * You are a professional robber planning to rob houses along a street.
 * Each house has a certain amount of money stashed,
 * the only constraint stopping you from robbing each of them is that 
 * adjacent houses have security systems connected and
 * it will automatically contact the police 
 * if two adjacent houses were broken into on the same night.
 * 
 * Given an integer array nums representing the amount of money of each house,
 * return the maximum amount of money you can rob tonight without alerting the police.
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	let cache = {};
    const robDP = function(nums) {
	
    // Empty Array Validation
    if (nums.length === 0) {
        return 0;
    }
    // Base Case
    if (nums.length === 1) {
        return nums[0];
    }
	
    // Memoization
	if (nums.length in cache) {
		return cache[nums.length];
	}
    
    // If there are only two houses then maximum of the two will be returned
    if (nums.length === 2) {
		cache[nums.length] = Math.max(nums[0], nums[1]);
        return cache[nums.length];
    }
    
    // Max Loot = Max value of (currentValue + Rob(n-2)) and Rob(n-1)
    const lastIndex = nums.length - 1;
	
    // Slice returns a copy of array before the last index
	cache[nums.length] = Math.max(nums[lastIndex] + robDP(nums.slice(0, lastIndex - 1)), robDP(nums.slice(0, lastIndex)));
    
    return cache[nums.length];
	}
	
	return robDP(nums);
};