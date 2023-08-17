class Solution(object):
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        hash = set()
        for n in nums:
            if n in hash:
                return True
            hash.add(n)
        
        return False
