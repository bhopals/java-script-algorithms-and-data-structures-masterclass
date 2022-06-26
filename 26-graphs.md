### GRAPHS

- Use Case
  - Modeling users
  - Netflix Recommendation

#### Intro to Graphs

- OBJECTIVES

  - Explain what a GRAPH is
  - Compare and Contrast different types of graphs and their use cases in the real world
  - Implement a GRAPH using an Adjacency list
  - Traverse through a GRAPH using BFS and DFS
  - Compare and Contrast Graph Traversal algorithms

- WHAT ARE GRAPHS

  - A GRAPH data structure consists of a finite (and possibly mutable) set of VERTICES or NODES or POINTS,
    together with a set of unordered pairs of these vertices for an UNIDIRECTED GRAPH or a set of Ordered
    pairs for a DIRECTED GRAPH.

  - In other words, A GRAPH is a collection of Nodes and Connection between those Nodes.
  - A Graph is consists of NODES + CONNECTIONS

#### Uses for Graphs

- Real world Applications Examples (Graph Usage)
  - Social Network
  - Location / Mapping - (Google Map Path Finding)
  - Routing Algorithms
  - Visual Hierarchy (Web page Site Map)
  - File System Optimizations
  - Recommendations on Sites
    - People also watched
    - You might also like
    - People you might know
    - Frequently bought together
  - EVERYWHERE!

#### Types of Graphs

- ESSENTIAL GRAPH TERMS

  - VERTEX - a Node
  - EDGE - Connection between Nodes
  - WEIGHTED/UNWEIGHTED - Values assigned to distances between vertices
  - DIRECTED/UNDIRECTED - Directions assigned to distanced between vertices

- TREE - Tree is an undirected graph in which any two vertices are connected by exactly one path
  in GRAPH, however, it may have multiple paths. For example, to traverse from A to F, we may have
  mulitple paths

  - A-->B-->D-->F
  - A-->B-->c->F

- UNDIRECTED GRAPH

  - In an undirected graph, there is no direction to or polarity you could say to the Edges
  - They are like TWO way connection
  - There is no Direction Associated with EDGE, you may take which direction you want to take/traverse
  - Example
    - Facebook Friends Graph
      - A-------B
      - If you are friend with someone, they can see everthing in your profile
      - Same, you can see all the profile details of your friend.
      - The relationship is TWO WAY thing / connection in UNDIRECTED Graph

- DIRECTED GRAPH

  - A Directed Graph is often represented with arrows, which indicates the Direction, the Polarity of that EDGE.
  - In a Directed Graph, there is a Direction assigned to the EDGE, the connection between vertices
  - They are like either One Way or Two way connection
  - One Direction or Bi-Direction Relationship
  - Example
    - Instagram/Twitter Followers Graph
      - The relationship is not TWO WAY thing by Default
      - A ----> B (A can see B's Content, but B cannot sees A's content)
      - A <---- B (B can see A's Content, but A cannot sees B's content)
      - A <---> B (A and B both can see each others content)

- UNWEIGHTED GRAPH

  - If each edge in graph has no value associated with it.
  - A --------B---------C

- WEIGHTED GRAPH

  - If each edge in graph has some value associated with it.
  - The Edge has some number on it.
  - A ---5-----B---7------C

- That means we can have
  - Undirected Unweighted Graph
  - Undirected Weighted Graph
  - Directed Unweighted Graph
  - Directed Weighted Graph

#### Storing Graphs: Adjacency Matrix

- MATRIX

  - A Matrix is a Two Dimensional Structure, usually implemented with Nested Arrays (But not always)
  - Basically, we store information in Rows and Columns

- REPRESENTING A GRAPH

  - ADJACENCY MATRIX

    - A Adjacency Matrix is a Square Matrix used to represent a finite graph. The Elements of the
      matrix indicate whether pairs of vertices are adjacent or not in the graph.

    - We store information in Rows and Columns
    - Example

      - GRAPH : -- A --- B --- C --- D --- E --- F -- (`*F is connected back to A, just can't show here so`)
      - Now the Adjacency Matrix of this would look like:
        A B C D E F
        A 0 1 0 0 0 1
        B 1 0 1 0 0 0
        C 0 1 0 1 0 0
        D 0 0 1 0 1 0
        E 0 0 0 1 0 1
        F 1 0 0 0 1 0

      - Here `1` represent a Connection between the NODES, `0` represent No Connection

#### Storing Graphs: Adjacency List

- We use an ARRAY or LIST to store the Edges.

- EXAMPLE

  - GRAPH: -- 0 --- 1 --- 2 --- 3 --- 4 --- 5 -- (`*5 is connected back to 0, just can't show here so`)
  - Now the Adjacency List of this would look like: (0-5 is Index Representation)

    ```
    [
    0    [1,5],
    1    [0,2],
    2    [1,3],
    3    [2,4],
    4    [3,5],
    5    [4,0]
    ]
    ```

  - For example, if I want to check if there is any relationship between `1` and `5`, I would
    go to Index 1 ([0,2]), and Index 5 ([4,0]), and look if they have relations (Which is not in this case)

  - But what if our Nodes are not in Numbers or not Ordered, in that case, it will be not easy to
    check the indexes and values.

  - Well in that case we will use HASH TABLE
  - EXAMPLE
    - GRAPH: -- A --- B --- C --- D --- E --- F -- (`*F is connected back to A, just can't show here so`)
    - Now the Adjacency List of this would look like:
      ```
      {
        A: ["B", "F"],
        B: ["A", "C"],
        C: ["B", "D"],
        D: ["C", "E"],
        E: ["D", "F"],
        F: ["E", "A"]
      }
      ```

#### Adjacency List v/s Adjacency Matrix BIG O

- Sparse Graph

  - A SPARSE GRAPH in which the number of edges is much less than the possible number of edges

- Dense graph

  - A DENSE GRAPH is a graph in which the number of edges is close to the maximal number of edges.
  - OR in other words if every pair of vertices is connected by one edge

- |V| - number of vertices
- |E| - number of edges

- OPERATION - ADJACENCY LIST v/s ADJACENCY MATRIX

  - Add Vertex: `O(1)` - `O(|V^2|)`
  - Add Edge: `O(1)` - `O(1)`
  - Remove Vertex: `O(|V| + |E|)` - `O(|V^2|)`
  - Remove Vertex: `O(|E|)` - `O(1)`
  - Query: `O(|V| + |E|)` - `O(1)`
  - Storage: `O(|V| + |E|)` - `O(|V^2|)`

- ADJACENCY LIST

  - Can take up less space (in Sparse Graph)
  - Faster to iterate over all edges

  - Can be slower to lookup specific edge

- ADJACENCY MATRIX

  - Take up more space (in Sparse Graph)
  - Slower to iterate over all edges

  - Faster to lookup specific edge

- WHAT WILL YOU SHOULD USE
  - Adjacency List
  - WHY?
    - Because most data in the real-world tends to lend itself to Sparse
    - More Nodes but no all are well connected (Sparse Graph)
    - Hence, in terms of SPACE or PERFORMANCE, Adjacency List is the OPTIMAL CHOICE.

#### Adjaceny List: Add Vertex

- Our Graph Class (Undirected Graph)

  ```
      class Graph {
          constructor() {
              this.adjacencyList = {}
          }
      }
  ```

- ADDING A VERTEX Psuedocode

  - Write a method called `addVertex`, which accepts a number of vertex
  - It should add a key to the adjacency list with the name of the vertex and set its value to be an EMPTY ARRAY
  - Example
    `graph.addVertex('Tokyo')` ==> `{ 'Tokyo': []}`

- ADDING A VERTEX Code
  ```
  addVertex(vertex) {
    // Not handling addition of duplicate vertices
    // Technically, you should throw an error stating that `VERTEX with the give name already exists`
    // In our case, we are not gonna throw any error, we would only create/add a vertex, if it does not exist
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  ```

#### Adjaceny List: Add Edge

- ADDING AN EDGE

  - Drawing the connection between two vertices

- ADD EDGE Psuedocode

  - This Function should accept two Vertices, We can call them `Vertex1` and `Vertex2`
  - The function should find in the Adjacency List the key of the `Vertex1` and Push `Vertex2` to the ARRAY
  - The function should find in the Adjacency List the key of the `Vertex2` and Push `Vertex1` to the ARRAY
  - Do not worry about handling errors/invalid vertices

- EXAMPLE

  - A Graph: { Tokyo:[], Dallas:[], Aspen: []};

  - graph.addEdge('Tokyo', 'Dallas');
  - { Tokyo:['Dallas'], Dallas:['Tokyo'], Aspen: []};

  - graph.addEdge('Dallas', 'Aspen');
  - { Tokyo:['Dallas'], Dallas:['Tokyo', 'Aspen'], Aspen: ['Dallas']};

- ADD EDGE Code

```
  addEdge(v1, v2) {
    // You could add error handling or conditions if Vertex Exists or not
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
```

#### Remove Edge

- REMOVING AN EDGE

- REMOVE EDGE Psuedocode

  - This function should accept two Vertices, we will call them `Vertex1` and `Vertex2`
  - The function should reassign the key of the `Vertex1` to be an ARRAY that does not contain `Vertex2`
  - The function should reassign the key of the `Vertex2` to be an ARRAY that does not contain `Vertex1`
  - Do not worry about handling errors/invalid vertices

- EXAMPLE

  - A Graph: { Tokyo:['Dallas'], Dallas:['Tokyo', 'Aspen'], Aspen: ['Dallas']};

  - graph.removeEdge('Tokyo', 'Dallas')
  - { Tokyo:[], Dallas:['Aspen'], Aspen: ['Dallas']};

- REMOVE EDGE

```
 removeEdge(v1, v2) {
    // You could add error handling or conditions if Vertex Exists or not
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }
```

#### Remove Vertex

- REMOVING A VERTEX

- REMOVE VERTEX Psuedocode

  - The function should accept a vertex to remove
  - The function should loop as long as there is any other vertices in the adjacencyList for that VERTEX
  - Inside the loop, call our `removeEdge` function with the vertex we are removing and any
    values in the adjacencyList for that vertex.
  - Lastly, DELETE the key in the Adjacency List for the VERTEX.

- REMOVING A VERTEX Example

  - A Graph:

    ```
        {
        'Tokyo':['Dallas', 'Hong Kong'],
        'Dallas':['Tokyo', 'Aspen', 'Hong Kong', 'Los Angeles'],
        'Aspen': ['Dallas'],
        'Hong Kong': ['Tokyo', 'Dallas', 'Los Angeles'],
        'Los Angeles': ['Hong Kong', 'Dallas']
        };
    ```

    - graph.removeVertex('Hong Kong')

    ```
        {
        'Tokyo':['Dallas'],
        'Dallas':['Tokyo', 'Aspen', 'Los Angeles'],
        'Aspen': ['Dallas'],
        'Los Angeles': ['Dallas']
        };
    ```

- REMOVE VERTEX Code
  ```
  removeVertex(vertex) {
    // You could add error handling or conditions if Vertex Exists or not
    while (this.adjacencyList[vertex].lenght) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  ```
