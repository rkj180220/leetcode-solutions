/**
200. Number of Islands
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) return 0;

    let islandCount = 0;

    for (let row=0; row < grid.length; row++) {
        for (let col=0; col< grid[0].length; col++) {
            if (grid[row][col] === '1') {
                // Only the new one's should be counted as island. So once counted flip the matrix value to 0 to avoid double counting the same matrix
                islandCount++;
                grid[row][col] = '0';
                const queue = [];
                queue.push([row,col]);
                while(queue.length) {
                    const currentPos = queue.shift();
                    const currentRow = currentPos[0];
                    const currentCol = currentPos[1];

                    for(let i=0; i < directions.length; i++) {
                        const currentDir = directions[i];
                        const nextRow = currentRow + currentDir[0];
                        const nextCol = currentCol + currentDir[1];
                        if (nextRow < 0 || nextCol < 0 || nextRow >= grid.length || nextCol >= grid[0].length) {
                            continue;
                        }

                        if (grid[nextRow][nextCol] === '1') {
                            queue.push([nextRow,nextCol]);
                            grid[nextRow][nextCol] = '0';
                        }
                    }
                }
            } 
        }
    }

    return islandCount;
    
};

const directions = [
    // Up
    [-1, 0],
    // Right
    [0,1],
    // Down
    [1,0],
    //Left
    [0,-1]
];
