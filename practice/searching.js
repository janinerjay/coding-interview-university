/* Graphs: Bread-First Search, Depth-First Search */

// BFS - Common implementation: find distance between two nodes

function bfs(graph, root) {
    let nodesLen = {};

    for (var i = 0; i < graph.length; i++) {
        nodesLen[i] = Infinity;
    }
    nodesLen[root] = 0;

    let queue = [root];
    let current;

    while (queue.length != 0) {
        current = queue.shift();

        let curConnected = graph[current];
        let neighborIdx = [];
        let idx = curConnected.index;
        while (idx != -1) {
            neighborIdx.push(idx);
            idx = curConnected.indexOf(1, idx + 1);
        }
        for (var j = 0; j < neighborIdx.length; j++) {
            if (nodesLen[neighborIdx[j]] == Infinity) {
                nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
                queue.push(neighborIdx[j]);
            }
        }
    }
    return nodesLen;
}

function dfs() {

}

let exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
];
console.log(bfs(exBFSGraph, 1));