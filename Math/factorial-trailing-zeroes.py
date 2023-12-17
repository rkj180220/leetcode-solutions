# Given an integer n, return the number of trailing zeroes in n!.
# Note that n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1.
class Solution:
    def trailingZeroes(self, n: int) -> int:
        count = 0

        # Count the factors of 5 in the prime factorization
        while n >= 5:
            n //= 5
            count += n

        return count

# Time Complexity: O(log n) - the number of iterations in the while loop depends on the number of factors of 5 in the prime factorization of n
# Space Complexity: O(1) - constant space used for the 'count' variable
