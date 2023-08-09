#169. Majority Element
#Given an array nums of size n, return the majority element.
#The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        # Initialize variables to track the potential majority element and its count
        majority = nums[0]  # Assume the first element is the majority element
        count = 1  # Initialize the count of the assumed majority element
        
        # Iterate through the array starting from the second element
        for num in nums[1:]:
            # If the current number matches the assumed majority element
            if num == majority:
                count += 1  # Increment the count
            else:
                count -= 1  # Decrement the count for non-matching elements
                # If the count becomes 0, update the assumed majority element
                if count == 0:
                    majority = num
                    count = 1
        
        # Count the occurrences of the potential majority element in the entire array
        count_majority = 0
        for num in nums:
            if num == majority:
                count_majority += 1
        
        # Verify if the potential majority element is indeed the majority
        # by checking if its count is greater than half of the array length
        if count_majority > len(nums) // 2:
            return majority  # Return the majority element

        return -1

