# Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
# If target is not found in the array, return [-1, -1].
# You must write an algorithm with O(log n) runtime complexity.

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if len(nums) < 1:
            return [-1, -1]

        # Find the first occurrence of the target
        firstPos = self.binarySearch(nums, target, 0, len(nums) - 1)

        # If target is not found, return [-1, -1]
        if firstPos == -1:
            return [-1, -1]

        startPos = firstPos
        endPos = firstPos
        temp1, temp2 = None, None

        # Search for the first occurrence on the left side
        while startPos != -1:
            temp1 = startPos
            startPos = self.binarySearch(nums, target, 0, startPos - 1)
        
        startPos = temp1

        # Search for the last occurrence on the right side
        while endPos != -1:
            temp2 = endPos
            endPos = self.binarySearch(nums, target, endPos + 1, len(nums) - 1)
        
        endPos = temp2

        return [startPos, endPos]

    def binarySearch(self, nums: List[int], target: int, left: int, right: int) -> int:
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        
        return -1

# Time Complexity: O(log n), where n is the length of the input array
# Space Complexity: O(1), as it uses constant extra space
