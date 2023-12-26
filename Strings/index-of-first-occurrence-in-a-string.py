# 28. Find the Index of the First Occurrence in a String
# Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        i, j = 0, 0
        while i < len(haystack):
            if haystack[i] != needle[j]:
                i = i - j + 1
                j = 0
            else:
                # If the string is equal
                i += 1
                j += 1

                # If the entire needle is found return the index
                if j == len(needle):
                    return i - j
        return -1
