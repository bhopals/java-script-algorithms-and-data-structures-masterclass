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
}
