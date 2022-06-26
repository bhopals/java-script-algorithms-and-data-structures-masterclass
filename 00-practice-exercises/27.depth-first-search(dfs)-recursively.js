class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].lenght) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    function traverse(vertex) {
      if (vertex.length === 0) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((child) => {
        if (!visited[child]) traverse(child);
      });
    }
    traverse(vertex);
    return result;
  }

  depthFirstRecursiveIIFE(vertex) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    (function dfs(vertex) {
      if (vertex.length === 0) return null;
      result.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((child) => {
        if (!visited[child]) dfs(child);
      });
    })(vertex);
    return result;
  }
}

let g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.depthFirstRecursiveIIFE("A")); // ["A", "B", "D", "E", "C", "F"]

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
console.log(g);
