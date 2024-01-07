# 207. Course Schedule
# There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

# For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
# Return true if you can finish all courses. Otherwise, return false.

class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # Build the indegree array for the topological sort and also the adjacency list of the graph using the prerequisites
        inDegree = [0 for _ in range(numCourses)]
        adjList = [[] for _ in range(numCourses)]
        for i in range(len(prerequisites)):
            pair = prerequisites[i]
            adjList[pair[1]].append(pair[0])
            inDegree[pair[0]] += 1

        # find the vertices that have indegree zero and remove those vertices and reduce the indegree of the connected vertices.
        stack = list()
        for i in range(len(inDegree)):
            if inDegree[i] == 0:
                stack.append(i)
        # Keep track of the count of how many vertices have been processed using topological sort
        count = 0

        while len(stack):
            current = stack.pop()
            count += 1
            # get the adjacent vertices
            adjacent = adjList[current]
            # reduce the indegree and if it becomes zero process it next
            for vertex in adjacent:
                inDegree[vertex] -= 1
                if inDegree[vertex] == 0:
                    stack.append(vertex)
        
        return count == numCourses

# Time Complexity : O (P + n^2)
# Space Complexity: O(N^2)
