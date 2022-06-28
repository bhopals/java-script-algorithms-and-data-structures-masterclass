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
