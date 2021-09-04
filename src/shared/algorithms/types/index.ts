// PLUGINS IMPORTS //
import {DataStructure} from 'shared/algorithms/data-structures';

import {Frontier} from 'shared/algorithms/searcher/frontiers';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

// TYPE IMPORTS //
import {HeuristicNames} from 'shared/algorithms/searcher/frontiers/heuristics';
import {TNeighbors} from 'shared/algorithms/utils/neighbors';
import {TVisited} from 'shared/algorithms/utils/visited';
import {AgentState, GridTypeNames} from 'shared/types';

/////////////////////////////////////////////////////////////////////////////

export type TDataStructure<T> = DataStructure<T>;
export type TFrontier = Frontier;

export type {
  AgentState,
  TVisited,
  TNeighbors,
  DataStructure,
  HeuristicNames,
  GridTypeNames,
};

// prettier-ignore
export type NodeFrontier = {
  state: AgentState       // state of agent (where is it?)
  parent?: NodeFrontier   // node that generated this node
  cost: number            // cost of path from initial state to this node (= level, because graph is unweighted)
} | undefined

export type SearchAlgoNames =
  | 'depth-first'
  | 'breadth-first'
  | 'greedy-best-first'
  | 'a-star';

export type PatternAlgoNames =
  | 'perfect-maze-recursive-backtracking'
  | 'basic-random';

export type FrontierParams = {
  source?: AgentState;
  target?: AgentState;
};

export type Comparator<T> = (a: T, b: T) => boolean;
