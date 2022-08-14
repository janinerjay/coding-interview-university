/* Copying Arrays */

let original = [true, true, undefined, false, null];

// Slice
let copy1 = original.slice(0);
// console.log(copy1);

// Spread Operator
let copy2 = [...original];
// console.log(copy2);

// DEEP copying
let deepArray = [["freeCodeCamp"]];
// let shallowCopy = deepArray.slice(0); //this is copying the pointer to the original array
// shallowCopy[0].push("is great");
// console.log(deepArray);
// console.log(shallowCopy);

let deepCopy = JSON.parse(JSON.stringify(deepArray));
deepCopy[0].push("is great");
// console.log(deepArray);
// console.log(deepCopy);


function getDifferentNumber(arr) {
    const set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        if (set.has(i) == false) {
            return i;
        }
    }
    return arr.length;
}
// console.log(getDifferentNumber([3, 1, 0]));


let matrix = new Array(5).fill().map(() => new Array(5).fill(0));
// console.log(matrix);

function numOfPathsToDest(n) {
    let memo = new Array(n).fill().map(() => new Array(n).fill(-1));
    return numOfPathsToSquare(n - 1, n - 1, memo);
}

function numOfPathsToSquare(i, j, memo) {
    console.log('in func two');
    // bounds
    if (i < 0 || j < 0) return 0;
    if (i < j) memo[i][j] = 0;
    console.log('past bounds');
    // if already in memo
    if (memo[i][j] != -1) return memo[i][j];

    // base case
    if (i == 0 && j == 0) memo[i][j] = 1;

    //recursion
    memo[(i, j)] = numOfPathsToSquare(i, j - 1, memo) + numOfPathsToSquare(i - 1, j, memo);
    return memo[i][j];
}

numOfPathsToDest(4);