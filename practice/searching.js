/* Graphs: Bread-First Search, Depth-First Search */

// BFS - Common implementation: find distance between two nodes

// function bfs(graph, root) {
//     let nodesLen = {};

//     for (var i = 0; i < graph.length; i++) {
//         nodesLen[i] = Infinity;
//     }
//     nodesLen[root] = 0;

//     let queue = [root];
//     let current;

//     while (queue.length != 0) {
//         current = queue.shift();

//         let curConnected = graph[current];
//         let neighborIdx = [];
//         let idx = curConnected.index;
//         while (idx != -1) {
//             neighborIdx.push(idx);
//             idx = curConnected.indexOf(1, idx + 1);
//         }
//         for (var j = 0; j < neighborIdx.length; j++) {
//             if (nodesLen[neighborIdx[j]] == Infinity) {
//                 nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
//                 queue.push(neighborIdx[j]);
//             }
//         }
//     }
//     return nodesLen;
// }

class Graph {
    constructor() {
        this.vertices = [];
        this.adjacent = {};
        this.edges = 0;
    }

    addVertex(v) {
        this.vertices.push(v);
        this.adjacent[v] = [];
    }

    addEdge(v, w) {
        this.adjacent[v].push(w);
        this.adjacent[w].push(v);
        this.edges++;
    }


    bfs(goal, root = this.vertices[0]) {
        let adj = this.adjacent;

        const queue = [];
        queue.push(root);

        const discovered = [];
        discovered[root] = true;

        while (queue.length) {
            let v = queue.shift();
            console.log(v);

            if (v === goal) {
                return true;
            }

            for (let i = 0; i < adj[v].length; i++) {
                if (!discovered[adj[v][i]]) {
                    discovered[adj[v][i]] = true;
                    queue.push(adj[v][i]);
                }
            }
        }

        return false;
    }

    dfs() {

    }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("G");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("A", "D");
g.addEdge("B", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("C", "E");
g.addEdge("D", "F");
g.addEdge("F", "G");

let exBFSGraph = [
    [0, 1, 1, 1, 0],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
];
console.log(g.bfs("G", "D"));