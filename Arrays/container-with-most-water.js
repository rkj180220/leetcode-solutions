/**
 * 11. Container With Most Water
 * 
 * You are given an integer array height of length n.
 * There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 * Find two lines that together with the x-axis form a container, such that the container contains the most water.
 * 
 * Return the maximum amount of water a container can store.
 * Notice that you may not slant the container.
 * 
 * @param {number[]} height
 * @return {number}
 * 
 */

// Brute Force
var area = function(a,b, i, j) {
    return Math.min(a,b) * (j-i);
}
var maxAreaBruteForce = function(height) {
    let maxArea = 0;
    for (i = 0; i< height.length; i++) {
        for (j=i+1; j< height.length; j++) {
            const containerArea = area(height[i], height[j], i, j);
            maxArea = Math.max(containerArea, maxArea);
        }
    }
    return maxArea;
    
};

// Optimal Solution using shifting pointer - Two pointers
var maxArea = function(height) {
    let maxArea = 0;
    let p1 = 0;
    let p2 = height.length - 1;
    while(p1 < p2) {
        const currentArea = area(height[p1], height[p2], p1, p2);
        maxArea = Math.max(currentArea, maxArea);
        if (height[p1] < height[p2]) {
            p1++;
        } else {
            p2--;
        }
    }
    return maxArea;  
};

