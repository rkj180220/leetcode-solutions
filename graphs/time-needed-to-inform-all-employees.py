''' 1376. Time Needed to Inform All Employees
A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.

Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.

The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.

The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).

Return the number of minutes needed to inform all the employees about the urgent news. '''

class Solution:
    def numOfMinutes(self, n: int, headID: int, manager: List[int], informTime: List[int]) -> int:
        if n == 1:
            return 0

        # Construct the adjacency list based on the manager list
        adjacency_list = [[] for _ in range(n)]
        for employee in range(n):
            current_manager = manager[employee]
            if current_manager != -1:  # Check the current employee's manager
                adjacency_list[current_manager].append(employee)

        return self.DFS(headID, adjacency_list, informTime)

    def DFS(self, currentID: int, adjacency_list: List, informTime: List[int]) -> int:
        if not adjacency_list[currentID]:
            return 0

        max_time = 0
        for connection in adjacency_list[currentID]:
            time = self.DFS(connection, adjacency_list, informTime)
            max_time = max(max_time, time)  # Now within the loop

        return max_time + informTime[currentID]

