# The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

# countAndSay(1) = "1"
# countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
# To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit.
# Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

class Solution:
    def countAndSay(self, n: int) -> str:
        # Base case
        if n == 1:
            return "1"

        # Recursive call to get the previous term
        prev_term = self.countAndSay(n-1)

        result = ""
        count = 1

        # Iterate through the characters of the previous term
        for i in range(len(prev_term)):
            # Check if the current character is the same as the next one
            if i < len(prev_term) - 1 and prev_term[i] == prev_term[i+1]:
                # If yes, increment the count
                count += 1
            else:
                # If no, concatenate the count and the digit to the result
                result += str(count) + prev_term[i]
                # Reset count for the new digit
                count = 1

        return result

# Time Complexity: O(2^n), where n is the input value
# Space Complexity: O(2^n) (stack space for recursive calls)
