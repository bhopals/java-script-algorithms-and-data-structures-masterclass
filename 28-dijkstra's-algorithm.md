### Dijkstra's Algorithm

- Dijkstra's Shortest Path Algorithm

#### Intro to Dijkstra's and Prerequisites

- OBJECTIVES
  - Understand the importance of Dijkstra's
  - Implment a WEIGHTED GRAPH
  - Walk through the STEPS of Dijkstra's
  - Implement Dijkstra's using a Naive Priority Queue
  - Implement Dijkstra's using a Binary Heap Priority Queue

#### Who was Dijkstra and What is his Algorithm

- WHAT IS IT

  - One of the most famous and widely used algorithms around!
  - Find the shortest path between two vertices on a GRAPH.
  - `What's the fastest way to get from Point A to Point B?`

- WHO WAS Dijkstra

  - `Edsger Dijkstra` was a Dutch programmer, physicist, essayist, and all around smarty-pants (A Smart Guy!).
  - He helped to advance the field of computer science from an `art` to an academic discipline.
  - Many of his discoveries and algorithms are still commonly used to this day.
  - His Contributions:
    - Dijkstra's Algorithm
    - DJP Algorithm
    - First implementation of ALGOL
    - 60
    - Semaphore
    - Call Stack
    - Mutual Exclusion
    - Banker's Algorithm
    - Concurrent Programming
    - Dining Philosophers Problem
    - Software Architect

- WHY Dijkstra Algorithm USEFUL?
  - GPS - Finding fastest route
  - Network Routing - Finds open shortest patch for data
  - Biology - Used to model the spread of viruses among humans
  - Airline tickets - Finding cheapest route to your destination
  - Biology - Used to model the spread of viruses among humans
  - Many other uses!

#### Writing a Weighted Graph

- To store Weight(Value/Distance) in a weighted graph, we need to tweak our Graph class a little
  so instead of just storing the Vertices Details (`{"A":["B", "C"]}`), we would store
  vertices value as well - (`{"A":[{node: "B", weight: 25}, {node: "C", weight: 15}]}`)

- WeightedGraph Example

  ```
  class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight });
        this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }

  ```

#### Walking through the Dijkstra Algorithm

- WEIGHTED GRAPH EXAMPLE

  ```
        A
     2/    \4
     B      B
    2|      |3
     C-2-D---E
     4\ 1| 1/
        F
  ```

- THE APPROACH (Psuedocode)
  - Every time we look to visit a new node, we pick the node with the SMALLEST known distance to visit first.
  - Once we have moved to the node we are going to visit, we look at each of its neighbors.
  - For each neighboring node, we calculate the distance summing the total edges that lead to the node
    we are checking from the starting node.
  - If the new total distance to a node is less than the previous total, we store the new shorter distance
    for that node.
