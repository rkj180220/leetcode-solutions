# 32. Longest Valid Parentheses
# Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses 
# substring.

class Solution:
    def longestValidParentheses(self, s: str) -> int:
        if len(s) < 1:
            return 0
        
        validParenthesisStack = [-1]  # Initialize stack with -1 to represent the base index
        max_length = 0

        for i in range(len(s)):
            if s[i] == '(':
                validParenthesisStack.append(i)
            elif s[i] == ')':
                validParenthesisStack.pop()
                if len(validParenthesisStack) == 0:
                    validParenthesisStack.append(i)
                else:
                    max_length = max(max_length, i - validParenthesisStack[-1])

        return max_length

# Time Complexity: O(n)
# Space Complexity: O(n)
