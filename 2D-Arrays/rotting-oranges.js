/**
994. Rotting Oranges
You are given an m x n grid where each cell can have one of three values:
0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    if (grid.length === 0) {
        return 0;
    }

    // Queue consist of 
    let queue = [];
    let freshOranges = 0;
    // Sequential Order Traversal
    // Getting the rotten oranges co-ordinates
    // Getting the Fresh Oranges Count
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (grid[row][col] === ROTTEN) {
                queue.push([row, col]);
            } else if (grid[row][col] === FRESH) {
                freshOranges++;
            }
        }
    }

    let currentLevel = queue.length;
    let minutes = 0;

    while(queue.length > 0) {
        // If one minute is completed then one level of BFS is traversed
        if (currentLevel === 0) {
            minutes++;
            currentLevel = queue.length;
        }

        // Level order BFS
        while (currentLevel > 0) {
            const currentPos = queue.shift();
            const currentRow = currentPos[0];
            const currentCol = currentPos[1];
            for(let i=0; i<directions.length; i++) {
                const currentDir = directions[i];
                const nextRow = currentRow + currentDir[0];
                const nextCol = currentCol + currentDir[1];

                // If the direction's is out of bonds skip the loop
                if (nextRow < 0 || nextRow >= grid.length || 
                nextCol < 0 || nextCol >= grid[0].length) {
                    continue;
                }

                if (grid[nextRow][nextCol] === FRESH) {
                    grid[nextRow][nextCol] = ROTTEN;
                    queue.push([nextRow, nextCol]);
                    freshOranges--;
                }
            }
            currentLevel--;
        }  
    }
    if (freshOranges > 0) {
        return -1;
    }

    return minutes;  
};

const directions = [
    // Up
    [-1, 0],
    // Right
    [0,1],
    // Down
    [1,0],
    // Left
    [0, -1]
];

const ROTTEN = 2;
const FRESH = 1;
