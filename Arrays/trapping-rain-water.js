/**
 * 42. Trapping Rain Water
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, 
 * compute how much water it can trap after raining.
 * @param {number[]} height
 * @return {number}
 */
var trapBruteForce = function(height) {
    let totalArea = 0;
    let maxL = 0;
    let maxR = 0;
    
    for (let i=0; i<height.length; i++) {
        if (i-1 < 0) {
            maxL = 0;
        } else if (maxL < height[i-1]) {
            maxL = height[i-1];
        }
        for (j=i+1; j < height.length; j++) {
            if (height[j] > maxR) {
                maxR = height[j];
            }
        }
        area = Math.min(maxL, maxR) - height[i];
        if (area < 0) {
            area = 0;
        }
        totalArea += area;
        maxR = 0;

    }

    return totalArea;
    
};

// Two Pointer Approach from both left and right side
var trap = function(height) {
    let totalArea = 0;
    let leftP = 0;
    let rightP = height.length - 1;
    let maxL = 0;
    let maxR = 0;
    while (leftP < rightP) {
        // Left side smaller, move the left pointer 
        if (height[leftP] <= height[rightP]) {
            // If the current value is having greater value than max of the left then no container will be formed
            if (height[leftP] >= maxL) {
                maxL=height[leftP]
            } else {
                totalArea += maxL - height[leftP];
            }
            leftP++
        } else {
            if (height[rightP] >= maxR) {
                maxR=height[rightP];
            } else {
                totalArea += maxR - height[rightP]
            }
            rightP--;
        }
    }
    return totalArea;
}