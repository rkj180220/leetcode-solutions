# 743. Network Delay Time
# You are given a network of n nodes, labeled from 1 to n. 
# You are also given times, a list of travel times as directed edges times[i] = (ui, vi, wi),
# where ui is the source node, vi is the target node, and wi is the time it takes for a signal to travel from source to target.
# We will send a signal from a given node k. 
# Return the minimum time it takes for all the n nodes to receive the signal. If it is impossible for all the n nodes to receive the signal, return -1.

class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        # construct the adjacency list using the times array
        adjList = defaultdict(list)
        for u,v,w in times:
            adjList[u].append((v,w))

        # Distances array to maintain the shortest distance from the k node
        distances = { i: 2**32 for i in range(1, n+1)}

        # Distance for the kth element is 0
        distances[k] = 0

        print(distances)

        # starting point of the dijkstra's algorithm
        heap = [k]
        heapq.heapify(heap)

        visited = set()
        
        while heap:
            currentVertex = heapq.heappop(heap)
            for neighbor, weight in  adjList[currentVertex]:
                newDistance = distances[currentVertex] + weight
                if newDistance < distances[neighbor]:
                    distances[neighbor] = newDistance
                    heapq.heappush(heap, neighbor)
        
        maxDistance = max(distances.values())
        return -1 if maxDistance == 2 ** 32 else maxDistance 



        
