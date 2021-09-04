// PLUGINS IMPORTS //

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import {QTY_GRID_ITEMS} from 'components/config/grid-config';

// TYPE IMPORTS //
import {SearchAlgoNames} from 'shared/algorithms/types';
import {State} from 'components/types';
import {GridTypeNames, GridItemStatus} from 'shared/types';

/////////////////////////////////////////////////////////////////////////////

export const initialGrid: GridTypeNames = 'triangle';
export const initialSearchAlgo: SearchAlgoNames = 'depth-first';
export const initialDelay = 80;

export function getInitialState(grid: GridTypeNames): State {
  return {
    isUpdating: false,
    availButton: 'start',
    source: getInitialSource(),
    target: getInitialTarget(grid),
    gridItems: getInitialGridItems(grid),
  };
}

/* */

// retorna gridItems[x][y], onde (x,y) >= (0,0) e (x,y) < QTY_GRID_ITEMS[grid]
function getInitialGridItems(grid: GridTypeNames): GridItemStatus[][] {
  const {width: x, height: y} = QTY_GRID_ITEMS[grid];

  return [...Array(x)].map(() => Array(y).fill('unvisited'));
}

function getInitialSource() {
  return {x: 2, y: 2};
}
function getInitialTarget(grid: GridTypeNames) {
  return {
    x: QTY_GRID_ITEMS[grid].width - 1 - 2,
    y: QTY_GRID_ITEMS[grid].height - 1 - 2,
  };
}
