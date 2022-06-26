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
