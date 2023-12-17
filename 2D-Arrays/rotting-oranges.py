# You are given an m x n grid where each cell can have one of three values:

# 0 representing an empty cell,
# 1 representing a fresh orange, or
# 2 representing a rotten orange.
# Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

# Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

from collections import deque

class Solution:
    directions = [
        # Up
        [-1, 0],
        # Right
        [0, 1],
        # Bottom
        [1, 0],
        # Left
        [0, -1]
    ]
    ROTTEN = 2
    FRESH = 1

    def orangesRotting(self, grid: List[List[int]]) -> int:
        # Count the number of fresh oranges and add the rotting oranges to a queue
        freshOranges = 0
        queue = deque([])
        minutes = 0

        for row in range(len(grid)):
            for col in range(len(grid[0])):
                if grid[row][col] == self.ROTTEN:
                    queue.append([row, col])
                elif grid[row][col] == self.FRESH:
                    freshOranges += 1

        currentLevel = len(queue)

        while len(queue):
            # For each minute, the adjacent oranges rot
            # Level order BFS traversal
            if currentLevel == 0:
                minutes += 1
                currentLevel = len(queue)

            while currentLevel > 0:
                currentPos = queue.popleft()
                currentRow = currentPos[0]
                currentCol = currentPos[1]

                for i in range(len(self.directions)):
                    currentDir = self.directions[i]
                    nextRow = currentRow + currentDir[0]
                    nextCol = currentCol + currentDir[1]

                    # Check if the directions are valid
                    if nextRow < 0 or nextCol < 0 or nextRow >= len(grid) or nextCol >= len(grid[0]):
                        continue

                    if grid[nextRow][nextCol] == self.FRESH:
                        grid[nextRow][nextCol] = self.ROTTEN
                        queue.append([nextRow, nextCol])
                        freshOranges -= 1

                currentLevel -= 1

        if freshOranges > 0:
            return -1

        return minutes

# Time Complexity: O(m * n), where m is the number of rows and n is the number of columns in the grid
# Space Complexity: O(min(m, n)), where m is the number of rows and n is the number of columns in the grid (space used by the queue)
