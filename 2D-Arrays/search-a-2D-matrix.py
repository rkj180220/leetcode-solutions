#74. Search a 2D Matrix
#You are given an m x n integer matrix matrix with the following two properties:
#Each row is sorted in non-decreasing order.
#The first integer of each row is greater than the last integer of the previous row.
#Given an integer target, return true if target is in matrix or false otherwise.
#You must write a solution in O(log(m * n)) time complexity.

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:

        if not matrix:
            return False

        rows, cols = len(matrix), len(matrix[0])
        searchRow, searchCol = 0,0

        if target < matrix[0][0] or target > matrix[rows - 1][cols -1]:
            return False
        
        #binary search the entire 2d array as an 1d array
        left = 0
        right = rows*cols - 1
        while left <= right:
            mid = (left + right)//2
            mid_element = matrix[mid//cols][mid%cols]
            if (target == mid_element):
                return True
            elif target < mid_element:
                right = mid - 1
            else:
                left = mid + 1
        
        return False



        
