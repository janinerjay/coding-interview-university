/* Dynamic Programming with backtracking */

// The Sudoku solver!
// Write the function sudokuSolve that checks whether a given sudoku board (i.e. sudoku puzzle) is solvable. 
//If so, the function will returns true. Otherwise (i.e. there is no valid solution to the given sudoku board), returns false.
function getCandidates(board, row, col) {
    // for some empty cell, what possible char can be placed there?
    let candidates = [];

    // for each char, add it to list if no collisions
    // top-left corner of sub-board is (row-row%3, col - col%3)
    for (let chr = '1'; chr <= '9'; chr++) {
        let collision = false;
        for (let i = 0; i <= 8; i++) {
            if (board[row][i] == chr ||
                board[i][col] == chr ||
                board[(row - row % 3) + Math.floor(i / 3)][(col - col % 3) + i % 3] == chr) {
                collision = true;
                break;
            }
        }
        if (!collision) candidates.push(chr);
    }
    return candidates;
}
function sudokuSolve(board) {
    // for each empty cell, consider newCandidates the set of whats possible
    let row = -1, col = -1, candidates = null;
    for (let r = 0; r <= 8; r++) {
        for (let c = 0; c <= 8; c++) {
            if (board[r][c] == '.') {
                let newCandidates = getCandidates(board, r, c);
                if (candidates == null || newCandidates.size < candidates.size) {
                    candidates = newCandidates;
                    row = r;
                    col = c;
                }
            }
        }
    }

    // if we have no empty cells, the whole board is filled
    if (candidates == null) return true;

    // for each possible value, place the value and recursively query whether it can be solved
    for (let val in candidates) {
        board[row][col] = val;
        if (sudokuSolve(board)) return true
        board[row][col] = '.'
    }

    //otherwise there is no value to solve the board
    return false;
}
console.log(sudokuSolve([
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]))