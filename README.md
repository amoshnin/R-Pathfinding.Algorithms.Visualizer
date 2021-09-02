<h1 align="center">Path Finding Visualizer</h1>

<p align="center">Live at - https://artem711.github.io/R-Pathfinding.Algorithms.Visualizer/ </p>
<p align="center"> This project is live visualiztion of the famous path finding algorithms. </p>
<br/>

<h2 align="center">Algorithms Included</h2>
<li>* Dijkstra algorithm</li>
<li>* Bellman-Ford algorithm</li>
<li>* Depth-first search (DFS) algorithm</li>
<li>* Breadth-first search (BFS) algorithm</li>

<h2 align="center">Features</h2>

### Selecting an Algorithm and Running the Visualizer

The Algorithms dropdown menu in the navbar allows you to choose a path algorithm.
The green node in the graph represents the algorithm's starting node, while the red node represents the algorithm's ending node.
By clicking and dragging the starting and ending nodes, you can change their positions.
Until the "Clear Board" button is pressed, any changes to the starting and ending node's placements will remain in effect.
After you've chosen an algorithm, use the "Visualize It!" button to see it in action. As a result, the color of nodes on the graph
will change in the order in which they are visited. When you approach the final node, the shortest path will be highlighted in yellow.
For the most part, buttons will be disabled during the animation process.

### Weighted Graphs and Non-Weighted Graphs

For algorithms designed for weighted graphs, the app will produce edge weights automatically.
These edge weights are displayed in the center of each node and represent the distance to that node from its neighbors.
Neighbors in this app are nodes that are directly adjacent to the current node in the four main directions: up, down, left, and right.
If these weights aren't required by the algorithm, none will be generated, and a "0" will be displayed.

### Building Walls

To remove some nodes from the graph, you can construct walls.
Simply click on a node in the graph, and it will turn black, indicating that it has become a wall.
You may make larger barriers by clicking, holding, and dragging your mouse.
Existing walls can be turned back into normal nodes by clicking or dragging your cursor over them.
Any barriers erected will stand the test of time, regardless of algorithm updates, weight adjustments, or visuals.
You must use the "Clear Board" option to eliminate walls.

### Generating Mazes

Random walls and recursive division are the two maze algorithms currently in use.
For each node, the random walls technique generates a random number in the range [0, 1].
The node is turned into a wall based on this number.
With one exception, the recursive division algorithm is similar to the basic [recursive division algorithm](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Recursive_division_method) .
The difference is that instead of constructing a single passage in each wall, we generate numerous passages here.
Instead of a single path between the start and finish nodes, many paths might be used.

### Changing Speed

This setting adjusts the animation speed of the app.
There are three settings: "Slow", "Average", and "Fast."
The default setting is "Fast."

## Made Using

- [React](https://github.com/facebook/react)
- [TypeScript](https://github.com/microsoft/TypeScript) - Strongly Typed No JS
- [CSS Animations] - Animation Effect

<br>

## Build Guide

```bash
git clone https://github.com/Artem711/R-Pathfinding.Algorithms.Visualizer
cd Pathfinding-Visualizer
yarn install
yarn start
```

<br>
