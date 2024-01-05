/* 1376. Time Needed to Inform All Employees
A company has n employees with a unique ID for each employee from 0 to n - 1. The head of the company is the one with headID.

Each employee has one direct manager given in the manager array where manager[i] is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that the subordination relationships have a tree structure.

The head of the company wants to inform all the company employees of an urgent piece of news. He will inform his direct subordinates, and they will inform their subordinates, and so on until all employees know about the urgent news.

The i-th employee needs informTime[i] minutes to inform all of his direct subordinates (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).

Return the number of minutes needed to inform all the employees about the urgent news.*/

function numOfMinutes(n: number, headID: number, manager: number[], informTime: number[]): number {
    if (n === 1) {
        return 0;
    }

    // Construct adjacency list correctly
    const adjacencyList: Array<number[]> = manager.map(() => []);
    for (let employee = 0; employee < manager.length; employee++) {
        const currentManager = manager[employee];
        if (currentManager != -1) {  // Check for valid manager
            adjacencyList[currentManager].push(employee);  // Add employee to manager's list
        }
    }

    return DFS(headID, adjacencyList, informTime);
}

function DFS(currentID: number, adjacencyList: Array<number[]>, informTime: number[]): number {
    if (adjacencyList[currentID].length === 0) {
        return 0;
    }

    let maxTime = 0;
    for (const subordinate of adjacencyList[currentID]) {
        const currentTime = DFS(subordinate, adjacencyList, informTime);
        maxTime = Math.max(currentTime, maxTime);
    }

    return maxTime + informTime[currentID];
}
