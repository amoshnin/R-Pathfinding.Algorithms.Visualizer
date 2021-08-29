// PLUGINS IMPORTS //
import React from 'react';

// COMPONENTS IMPORTS //
import {memoComparison} from 'Helpers/Functions';

// EXTRA IMPORTS //

// REDUX IMPORTS //

/////////////////////////////////////////////////////////////////////////////

interface PropsType {}

const Navbar: React.FC<PropsType> = props => {
  return (
    <div id="navbarDiv">
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a
              id="refreshButton"
              className="navbar-brand"
              href="www.google.com">
              Pathfinding Visualizer
            </a>
          </div>
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="x">
                Algorithms
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li id="startButtonDijkstra">
                  <a href="x">Dijkstra's Algorithm</a>
                </li>
                <li id="startButtonAStar2">
                  <a href="x">A* Search</a>
                </li>
                <li id="startButtonGreedy">
                  <a href="x">Greedy Best-first Search</a>
                </li>
                <li id="startButtonAStar">
                  <a href="x">Swarm Algorithm</a>
                </li>
                <li id="startButtonAStar3">
                  <a href="x">Convergent Swarm Algorithm</a>
                </li>
                <li id="startButtonBidirectional">
                  <a href="x">Bidirectional Swarm Algorithm</a>
                </li>
                <li id="startButtonBFS">
                  <a href="x">Breadth-first Search</a>
                </li>
                <li id="startButtonDFS">
                  <a href="x">Depth-first Search</a>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="x">
                Mazes &amp; Patterns
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li id="startButtonCreateMazeTwo">
                  <a href="x">Recursive Division</a>
                </li>
                <li id="startButtonCreateMazeThree">
                  <a href="x">Recursive Division (vertical skew)</a>
                </li>
                <li id="startButtonCreateMazeFour">
                  <a href="x">Recursive Division (horizontal skew)</a>
                </li>
                <li id="startButtonCreateMazeOne">
                  <a href="x">Basic Random Maze</a>
                </li>
                <li id="startButtonCreateMazeWeights">
                  <a href="x">Basic Weight Maze</a>
                </li>
                <li id="startStairDemonstration">
                  <a href="x">Simple Stair Pattern</a>
                </li>
              </ul>
            </li>
            <li id="startButtonAddObject">
              <a href="x">Add Bomb</a>
            </li>
            <li id="startButtonStart">
              <button
                id="actualStartButton"
                className="btn btn-default navbar-btn"
                type="button">
                Visualize!
              </button>
            </li>
            <li id="startButtonClearBoard">
              <a href="x">Clear Board</a>
            </li>
            <li id="startButtonClearWalls">
              <a href="x">Clear Walls &amp; Weights</a>
            </li>
            <li id="startButtonClearPath">
              <a href="x">Clear Path</a>
            </li>
            <li className="dropdown">
              <a
                id="adjustSpeed"
                className="dropdown-toggle"
                data-toggle="dropdown"
                href="x">
                Speed: Fast
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li id="adjustFast">
                  <a href="x">Fast</a>
                </li>
                <li id="adjustAverage">
                  <a href="x">Average</a>
                </li>
                <li id="adjustSlow">
                  <a href="x">Slow</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default React.memo(Navbar, memoComparison);
