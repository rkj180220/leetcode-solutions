Class Solution:
    DIRECTIONS = [
        # Up
        [-1, 0],
        # Right
        [0, 1],
        # Down
        [1, 0],
        # Left
        [0, -1]
    ];
    WALL = -1
    GATE = 0
    INF = 2**31
    
    def wallsAndGates(self, grid):
        # Sequential Order to find the Gates
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] = self.GATE:
                    self.DFS(grid, i, j, 0)
        
        return grid
                    
        
        
    def DFS(self, grid, i, j, distance):
        if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]):
            return
        
        if grid[i][j] == self.WALL or grid[i][j] == self.GATE:
            return
        
        if distance < grid[i][j]:
            grid[i][j] = distance
            for i in range(len(self.Directions)):
                nextRow = self.Directions[i][0] + i
                nextCol = self.Directions[i][1] + j
                self.DFS(grid,nextRow, nextCol, distance + 1)
        
        return
        
# Time Complexity using DFS (Avg) - O(mn)
# Space Complexity  O(mn)
