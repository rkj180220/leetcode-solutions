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
var lengthOfLongestSubstring = function(s) {
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