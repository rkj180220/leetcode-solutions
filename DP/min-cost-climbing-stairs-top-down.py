# 746. Min Cost Climbing Stairs
# You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
# Once you pay the cost, you can either climb one or two steps.
# You can either start from the step with index 0, or the step with index 1.
# Return the minimum cost to reach the top of the floor.

class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cache = {}  # Memoization cache

        def minCost(i: int) -> int:
            if i < 0:
                raise ValueError("Invalid input: i cannot be negative")
            if i <= 1:
                return cost[i]

            if i not in cache:
                cache[i] = cost[i] + min(minCost(i - 1), minCost(i - 2))

            return cache[i]

        return min(minCost(len(cost) - 1), minCost(len(cost) - 2))


# Time Complexity: O(N)
# Space Complexity: O(N)
