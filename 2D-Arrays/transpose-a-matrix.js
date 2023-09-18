/**
867. Transpose Matrix
Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    const tMatrix = []
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (!tMatrix[col]) tMatrix[col] = [];
            tMatrix[col].push(matrix[row][col]);
        }
    }

    return tMatrix;   
};
