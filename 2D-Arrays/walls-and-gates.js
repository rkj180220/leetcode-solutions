/** 
You are given a grid of size m x n with each cell representing one of three possible values:

-1 representing a wall.
0 representing a gate.
INF (2147483647) representing an empty room.
Fill each empty room with the distance to the nearest gate. If it is impossible to reach a gate, leave the room with an infinite distance.
*/
const EMPTY = 2147483647;
const WALL = -1;
const GATE = 0;

const directions = [
	// Up
	[-1,0],
	// Right
	[0,1],
	// Down
	[1, 0],
	// Left
	[0,-1]
];

const wallsAndGates = function(matrix) {
	for (let row = 0; row < matrix.length; row++) {
		for (let col = 0; col < matrix[0].length; col++) {
			// Find the gate and start DFS
			if (matrix[row][col] === GATE) {
				DFS(matrix, row, col, 0);
			}
		}
	}
	
	// Modify the matrix don't return else return.
	//return matrix;
}

const DFS = function(matrix, row, col, currentStep) {
	// Check the boundaries and avoid gates and currentStep should not be greater than the matrix value
	if (row < 0 ||  row >= matrix.length || col < 0 || col >= matrix[0].length || currentStep > matrix[row][col]) {
		return;
	}
	
	matrix[row][col] = currentStep;
	for (let i=0; i < directions.length; i++) {
		const currentDir = directions[i];
		DFS(matrix, row + currentDir[0], col + currentDir[1], currentStep + 1);
	}
}
