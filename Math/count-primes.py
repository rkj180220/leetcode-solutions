# 204. Count Primes
# Given an integer n, return the number of prime numbers that are strictly less than n.

class Solution:
    def countPrimes(self, n: int) -> int:
        if n <= 1:
            return 0
        # Create a list with True values for all numbers up to n
        primes = [True] * n  
        # Mark 0 and 1 as not prime
        primes[0] = primes[1] = False

        for i in range(2, int(n**0.5) + 1):
            if primes[i]:
                for j in range(i * i, n, i):
                    primes[j] = False
        
        return sum(primes)  # Count the number of remaining True values


# Sieve of Eratosthenes algorithm.

# Creating a list and initially marking all numbers as primes: This corresponds to building the "sieve" with all possibilities initially considered.
# Iterating through prime numbers and marking their multiples as non-prime: This reflects the core principle of the sieve, where multiples of each prime are gradually eliminated from the pool of potential primes.
# Counting remaining primes: This concludes the sieving process by identifying the numbers that haven't been marked and thus remain as prime.
