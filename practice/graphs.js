/* Graphs */

// ------------------------ How to Represent them ----------------------------
// Adjacency List
let undirectedG = {
    Node1: ["Node2", "Node3"],   //or this can be just the arrays and assume index for the nodes
    Node2: ["Node1"],
    Node3: ["Node3"],
}

// Adjacency Matrix
//    a   b   c
// a  0   1   0
// b  1   0   1
// c  0   1   0

// or in JS
let adjMat = [  // must have same number of elements as nodes
    [0, 1, 1],  // one means pointing to another node
    [0, 0, 0],
    [1, 0, 0],
];

// Incidence Matrix
// it's also a 2D array, use rows to represent nodes, columns to represent edges
let incidenceMat = [
    [1, 0, -1, 1],
    [-1, 1, 0, 0],
    [0, -1, 1, 0],
    [0, 0, 0, -1],
];

// Objects and Pointers


// ------------------------ Common Graph Methods ----------------------------

// Distance

// Search

// Connectivity

// cycle detection