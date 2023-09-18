#73. Set Matrix Zeroes
#Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
#You must do it in place.

class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        if not matrix:
            return

        m,n = len(matrix), len(matrix[0])
        firstRowZero = False
        firstColZero = False

        # Check if the first row and first column need to be zeroed
        for i in range(m):
            if matrix[i][0] == 0:
                firstColZero = True
                break
        
        for j in range(n):
            if matrix[0][j] == 0:
                firstRowZero = True
                break

        # Now using the first row and col as memory to make the row/col zero
        # Mark rows and columns to be zeroed in the first row and first column and start from the next index
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][j] == 0:
                    matrix[i][0] = 0
                    matrix[0][j] = 0
        
        # Zero out cells based on the marked rows and columns
        for i in range(1, m):
            for j in range(1, n):
                if matrix[i][0] == 0 or matrix[0][j] == 0:
                    matrix[i][j] = 0
        
        # Zero out the first row and first column if needed
        if firstRowZero:
            for j in range(n):
                matrix[0][j] = 0
        
        if firstColZero:
            for i in range(m):
                matrix[i][0] = 0
