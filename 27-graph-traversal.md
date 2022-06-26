### Graph Traversal

- Searching or visiting Neighbors from a given node.

#### Intro to Graph Traversal

- Traversing Meaning - VISITING / UPDATING / CHECKING / PRINTING OUT / SEARCHING each Vertex in a GRAPH

- Problem Statements

  - Finding Nearest neighbours
  - Finding Most similar neighbours
  - Finding the shortest path from one Vertex to Another Vertex (GPS Directions)

- Every TREE is a GRAPH, but there are many many GRAPHS that are not TREES
- Any Node in a graph, there is no guarantee there is one unique path to get
- That means we may end up doing backtracking sometimes

- GRAPH TRAVERSAL USES

  - Peer to Peer Networking
  - Web Crawlers
    - The actual process of Traversing of Crawling is just a graph traversal
  - Finding `Closest`
  - Matches Recommendations
  - Shortest Path Problems
    - GPS Navigation
    - Solving Mazes
    - AI (Shortest Path to win the game)

- WAYS TO TRAVERSE IN GRAPHS
  - Depth First Search (DPS) Graph Traversal Iteratively
  - Depth First Search (DPS) Graph Traversal Recursively
  - Breadth First Search (BFS) Graph Traversal Iteratively
  - Breadth First Search (BFS) Graph Traversal Recursively

#### Depth First Graph Traversal

- Explore as far as possible down one Branch Before Backtracking (Top to Bottom)
- What it really means is just following the neighbours and contunuing to follow neighbours
  before backtracking.

#### Depth First Search (DFS) Recursive

- DFS (Recursive Search) Logic

- ARRAY as STACK = First In (ARRAY.PUSH), Last Out (ARRAY.POP)

  - DFS(Vertex):
    - IF Vertex is EMPTY
      - return (this is BASE CASE - To end Recursive CALL) // BASE CASE
    - ELSE
      - Add Vertex to RESULTs LIST
      - Mark Vertex as Visited
      - FOR EACH neighbour in VERTEX Neighbors:
      - IF Neighbor is not Visited:
        - RECURSIVELY call DFS on Neighbor // DIFFERENT INPUT

- VISITING THINGS (To Keep track of What is already visited)

  ```
      {
          "A": true,
          "B": true,
          "C": true
      }
  ```

- EXAMPLE

  - GRAPH
    (A Representation of the Graph.)

    ```
          A
        /   \
       B     C
       |     |
       D --- E
        \   /
          F
    ```

- ADJACENCY LIST

```
  {
   "A": ["B", "C"],
   "B": ["A", "D"],
   "C": ["A", "E"],
   "D": ["B", "E", "F"],
   "E": ["C", "D", "F"],
   "F": ["D", "E"]
  }
```

- VISITED LIST

  ```
  {
      "A": true,
      "B": true,
      "C": true,
      "D": true,
      "E": true,
      "F": true
  }
  ```

- DEPTH FIRST TRAVERSAL (Recursive)

  - The function should accept a STARTING NODE
  - Create a List (RESULT ARRAY) to Store the End result, to be returned at the very end.
  - Create an Object to store Visited Vertices
  - Create a Helper Function which accepts a VERTEX
    - The Helper function should return early if the VERTEX is EMPTY
    - The Helper function should place the VERTEX it accepts into the visited object
      and push that VERTEX into the result array.
    - Loop over all of the values in the adjacencyList for that vertex.
    - If any of those values have not been visited, recursively invoke the HELPER
      function with that vertex.
  - Invoke the helper Function with the starting VERTEX.
  - Return the RESULT Array.

    ```
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
    ```

#### Depth First Search (DFS) Iterative

- DFS ITERATIVE PSEUDOCODE

  - DFS-iterative(start):
    - let S be a stack
    - S.push(start)
    - WHILE S is not EMPTY
      - vertex = S.pop()
      - IF Vertex is not labeled as discovered:
        - VISIT Vertex (add to RESULT LIST)
        - LABEL Vertex as DISCOVERED / VISITED
        - FOR EACH of Vertex's Neighbors, and DO S.push(Neighbour)

- DEPTH FIRST TRAVERSAL Iterative (More Detailed PSEUDOCODE)

  - The function should accept a STARTING NODE
  - Create a STACK to help use keep track of VERTICES (Use a LIST/ARRAY)
  - Create a List to store the end RESULT (Array), to be returned at the very end
  - Create an Object to STORE Visited Vertices
  - Add the Starting Vertex to the Stack and Mark it Visited.
  - While the STACK has something in it:
    - POP the next Vertex from the STACK
    - If that Vertex hasn't been visited yet:
      - Mark it as Visited
      - Add it to the result list
      - Push all of its neighbours into the stack
  - Retrun the RESULT Array

- DEPTH FIRST TRAVERSAL Iterative Code

  ```
  depthFirstIterativeImproved(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;
    while (stack.length) {
        currentVertex = stack.pop();
        result.push(currentVertex);
        this.adjacencyList[currentVertex].forEach((neighbor) => {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                stack.push(neighbor);
            }
        });
    }
    return result;
  }
  ```

  #### Breadth First Graph Traversal

- BREADTH FIRST

  - Visit Neighbors at CURRENT DEPTH First.

- Breadth First Prioritizes visiting all of the neighbors at a given depth before moving Downwards.
- Basically traverse Horizental (Left to Right)

#### BREADTH FIRST Intro

- It is very similar to what we did for depth first search, except we actually use a different data structure
- Rather than using a STACK, we use a QUEUE, but I am just going to use ARRAY, which we did for the STACK

- ARRAY as QUEUE = First In (ARRAY.PUSH), First Out (ARRAY.SHIFT)

- BREADTH FIRST Pseudocode
  - This function should accept a STARTING VERTEX
  - Create a Queue (You can use an ARRAY) and place the starting VERTEX in it.
  - Create an ARRAY to store the end RESULT (Array), to be returned at the very end
  - Create an Object to store nodes Visited
  - Mark the starting Vertex as Visited
  - LOOP as long as there is anything in the QUEUE
  - Remove the First Vertex from the QUEUE and PUSH it into the array that stores the NODES Visited
  - LOOP over each vertex in the adjacencyList for the vertex you are visiting
  - If it is not inside the Object that stores the nodes visited, Mark it as visited and Enqueue that VERTEX
  - Once you have finished LOOPING, return the array of visited nodes.
