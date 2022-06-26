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

  removeVertex(vertex) {
    // You could add error handling or conditions if Vertex Exists or not
    while (this.adjacencyList[vertex].lenght) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
}

let graph = new Graph();
console.log(graph);
graph.addVertex("Dallas");
graph.addVertex("Tokyo");
graph.addVertex("Aspen");
graph.addVertex("Los Angeles");
graph.addVertex("Hong Kong");
console.log(graph);

graph.addEdge("Dallas", "Tokyo");
graphg.addEdge("Dallas", "Aspen");
graph.addEdge("Hong Kong", "Tokyo");
graph.addEdge("Hong Kong", "Dallas");
graph.addEdge("Los Angeles", "Hong Kong");
graph.addEdge("Los Angeles", "Aspen");
console.log(graph);
graph.removeVertex("Hong Kong");
console.log(graph);
