/**3. Longest Substring Without Repeating Characters
 * 
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */

// BruteForce: Time Complexity: O(N^2) Space Complexity: O(N) - Because of the hash map.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringBF = function(s) {
    if (s.length < 2) {
        return s.length;
    }

    let longest = 0;
    for (let i = 0; i< s.length; i++) {
        let j = i;
        // Clear Cache
        let cache = {};
        let cacheLength = 0;
        while (j < s.length) {
            const currentChar = s[j];
            if (cache[currentChar]) {
                longest = Math.max(longest, cacheLength)
                // Break the loop
                break;
            } else {
                cache[currentChar] = true;
                cacheLength++;
                j++;
                longest = Math.max(longest, cacheLength)
            }
        }
    } 

    return longest; 
};

// Sliding window technique with hashmap of characters with index- Time Complexity - O(n)
// Space Complexity - O(1) -> since there are only 26 characters, the memory doesn't scale with input size.
var lengthOfLongestSubstring = function (s) {
    let longest = 0;
    let leftPointer = 0;
    let rightPointer = 0;
    let cache = {};

    while (rightPointer < s.length) {
        // Duplicate Identification
        if (cache[s[rightPointer]] !== undefined && cache[s[rightPointer]] >= leftPointer) {
            // move left pointer to the index after the duplicate
            leftPointer = cache[s[rightPointer]] + 1;
        } 
        // Assigning the index to the cache
        cache[s[rightPointer]] = rightPointer;
        // Max of longest
        const currentLength = rightPointer - leftPointer + 1;
        longest = Math.max(longest, currentLength);
        
        rightPointer++;
    }
    return longest;
}

