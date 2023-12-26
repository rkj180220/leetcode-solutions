# 14. Longest Common Prefix
# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        
        for i, char in enumerate(strs[0]):
            # Check if the char is common to all
            for string in strs[1:]:
                if i >= len(string) or string[i] != char:
                    return strs[0][:i]
        

        # If all char match
        return strs[0]
