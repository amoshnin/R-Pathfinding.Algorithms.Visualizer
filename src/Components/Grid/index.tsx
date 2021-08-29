// PLUGINS IMPORTS //
import React, {useEffect, useState} from 'react';

// COMPONENTS IMPORTS //
import {Node} from 'Components';
import {memoComparison} from 'Helpers/Functions';

// EXTRA IMPORTS //
import {
  Dijkstra,
  getNodesInShortestPathOrder,
} from 'Helpers/Algorithms/dijkstra';
import './Grid.css';

// REDUX IMPORTS //
import {GridType, NodeType} from 'Redux/types';

/////////////////////////////////////////////////////////////////////////////

const START_NODE_ROW = 10;
const START_NODE_COL = 15;
const FINISH_NODE_ROW = 10;
const FINISH_NODE_COL = 35;

interface PropsType {}

const Grid: React.FC<PropsType> = props => {
  const [grid, setGrid] = useState<GridType>([]);
  const [mouseIsPressed, setMouseIsPressed] = useState<boolean>(false);

  useEffect(() => {
    const grid = getInitialGrid();
    setGrid(grid);
  }, []);

  const handleMouseDown = (row: number, column: number) => {
    const newGrid = getNewGridWithWallToggled(grid, row, column);
    setGrid(newGrid);
    setMouseIsPressed(true);
  };
  const handleMouseEnter = (row: number, column: number) => {
    if (!mouseIsPressed) return;
    const newGrid = getNewGridWithWallToggled(grid, row, column);
    setGrid(newGrid);
  };
  const handleMouseUp = () => {
    setMouseIsPressed(false);
  };

  const animateDijkstra = (
    visitedNodesInOrder?: Array<NodeType>,
    nodesInShortestPathOrder?: Array<NodeType>,
  ) => {
    if (visitedNodesInOrder && nodesInShortestPathOrder) {
      for (let i = 0; i <= visitedNodesInOrder.length; i++) {
        if (i === visitedNodesInOrder.length) {
          setTimeout(() => {
            animateShortestPath(nodesInShortestPathOrder);
          }, 10 * i);
          return;
        }
        setTimeout(() => {
          const node = visitedNodesInOrder[i];
          const doc = document.getElementById(
            `node-${node.row}-${node.column}`,
          );
          if (doc) doc.className = 'node node-visited';
        }, 10 * i);
      }
    }
  };

  const animateShortestPath = (nodesInShortestPathOrder: Array<NodeType>) => {
    for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        const doc = document.getElementById(`node-${node.row}-${node.column}`);
        if (doc) doc.className = 'node node-shortest-path';
      }, 50 * i);
    }
  };

  const visualizeDijkstra = () => {
    const startNode = grid[START_NODE_ROW][START_NODE_COL] as NodeType;
    const finishNode = grid[FINISH_NODE_ROW][FINISH_NODE_COL] as NodeType;
    const visitedNodesInOrder = Dijkstra(grid, startNode, finishNode);
    const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
    animateDijkstra(visitedNodesInOrder, nodesInShortestPathOrder);
  };

  return (
    <>
      <button onClick={() => visualizeDijkstra()}>
        Visualize Dijkstra's Algorithm
      </button>
      <div className="grid">
        {grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                return (
                  <Node
                    key={nodeIdx}
                    node={node}
                    isFinish={node.isFinish}
                    isStart={node.isStart}
                    onMouseDown={handleMouseDown}
                    onMouseEnter={handleMouseEnter}
                    onMouseUp={handleMouseUp}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default React.memo(Grid, memoComparison);

const getInitialGrid = (): GridType => {
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let column = 0; column < 50; column++) {
      currentRow.push(createNode(column, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createNode = (column: number, row: number): NodeType => {
  return {
    column,
    row,
    isStart: row === START_NODE_ROW && column === START_NODE_COL,
    isFinish: row === FINISH_NODE_ROW && column === FINISH_NODE_COL,
    distance: Infinity,
    isVisited: false,
    isWall: false,
    previousNode: null,
  };
};

const getNewGridWithWallToggled = (
  grid: GridType,
  row: number,
  column: number,
) => {
  const newGrid = grid.slice();
  const node = newGrid[row][column];
  const newNode = {
    ...node,
    isWall: !node.isWall,
  };
  newGrid[row][column] = newNode;
  return newGrid;
};
