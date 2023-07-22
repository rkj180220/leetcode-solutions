/**
 * 70. Climbing Stairs
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let cache = {};
    const possibilities = function(n) {
        // Base Case
        if (n < 4) {
            return n;
        }
        // Recursive Case With Memoization
        if (cache[n]) {
            return cache[n];
        }
        cache[n] = possibilities(n-1) + possibilities(n-2);
        return cache[n]; 
    }
    return possibilities(n);
};