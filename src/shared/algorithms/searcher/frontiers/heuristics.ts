// PLUGINS IMPORTS //

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

// TYPE IMPORTS //
import {AgentState} from 'shared/algorithms/types';

/////////////////////////////////////////////////////////////////////////////

export const heuristics = {
  'manhattan-distance': (a: AgentState, b: AgentState) =>
    Math.abs(a.x - b.x) + Math.abs(a.y - b.y),
};

export type HeuristicNames = keyof typeof heuristics;
