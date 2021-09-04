// PLUGINS IMPORTS //

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

// TYPE IMPORTS //
import {SearchAlgoNames, HeuristicNames} from 'shared/algorithms/types';

/////////////////////////////////////////////////////////////////////////////

export type AgentState = {
  x: number;
  y: number;
};

export type {SearchAlgoNames, HeuristicNames};
export type GridTypeNames = 'square' | 'triangle';
export type GridItemStatus = 'unvisited' | 'visited' | 'solution' | 'wall';
