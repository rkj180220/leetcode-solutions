# Minimum Remove to Make Valid Parentheses
# Given a string s of '(' , ')' and lowercase English characters.

# Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

# Formally, a parentheses string is valid if and only if:

# It is the empty string, contains only lowercase characters, or
# It can be written as AB (A concatenated with B), where A and B are valid strings, or
# It can be written as (A), where A is a valid string.

class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        leftBracketStack = []
        s = list(s)
        charToRemove = []

        # Iterate through the string to identify invalid parentheses
        for i in range(len(s)):
            if s[i] == ')':
                # Check if there is a matching open parenthesis
                if leftBracketStack:
                    leftBracketStack.pop()
                else:
                    # If no matching open parenthesis, mark for removal
                    charToRemove.append(i)
            elif s[i] == '(':
                # Add the index of the open parenthesis to the stack
                leftBracketStack.append(i)
        
        # Add the remaining unmatched open parentheses to charToRemove
        charToRemove.extend(leftBracketStack)
        charToRemove.sort(reverse=True)

        # Remove marked characters from the string
        if s:
            for i in charToRemove:
                s.pop(i)
        
        return "".join(s)

# Time Complexity: O(n), where n is the length of the input string
# Space Complexity: O(n), where n is the length of the input string (used for the stack and charToRemove list)
