class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    // Not handling addition of duplicate vertices
    // Technically, you should throw an error stating that `VERTEX with the give name already exists`
    // In our case, we are not gonna throw any error, we would only create/add a vertex, if it does not exist
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    // You could add error handling or conditions if Vertex Exists or not
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    // You could add error handling or conditions if Vertex Exists or not
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
}

let graph = new Graph();
console.log(graph);
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
console.log(graph);

graph.addEdge("Tokyo", "Dallas");
console.log(graph);
graph.addEdge("Dallas", "Aspen");
console.log(graph);

graph.removeEdge("Dallas", "Aspen");
console.log(graph);
