// 207. Course Schedule
// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // Generate the adjacency list for based on the prerequisites
    const adjList = new Array(numCourses).fill(0).map(() => []);
    for (let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i];
        adjList[pair[1]].push(pair[0]);
    }

    // BFS traversal from each vertex as the start point
    for (let vertex = 0; vertex < numCourses; vertex++) {
        const queue = [];
        const seen = {};
        for (let i = 0; i < adjList[vertex].length; i++) {
            queue.push(adjList[vertex][i]);
        }

        while (queue.length) {
            const current = queue.shift();
            seen[current] = true;
            // Check if it is cyclic
            if (vertex == current) {
                return false;
            }
            // add the next element to the queue
            const adjacent = adjList[current];
            for (let i = 0; i < adjacent.length; i++) {
                const next = adjacent[i];
                if (!seen[next]) {
                    queue.push(next)
                }
            }
        }
    }

    return true;
    
};

// Time Complexity: O(P + n^3)
// Space Complexity: O(n^2 + 2n)
