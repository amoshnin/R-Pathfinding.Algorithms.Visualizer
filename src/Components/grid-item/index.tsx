// PLUGINS IMPORTS //
import React, {useContext} from 'react';

// COMPONENTS IMPORTS //
import Icon from './icon';

// EXTRA IMPORTS //
import {DispatchContext} from 'components/config/contexts';
import * as utils from 'components/grid-item/utils';
import './styles.scss';

// TYPE IMPORTS //
import {AgentState, GridItemStatus, GridTypeNames} from 'shared/types';

/////////////////////////////////////////////////////////////////////////////

// TODO: se o grid item for source/target, arrastá-lo, mas sem drag and drop, usar onMouseEnter e onMouseLeave um anulando o outro
// TODO: renderizar por cima em caso de mudanca de status para animar do jeito que quero

type PropsType = {
  id: AgentState;
  grid: GridTypeNames;
  status: GridItemStatus;
  isSourceOrTarget: 'source' | 'target' | null;
  mouseIsPressed: () => boolean;
};

const GridItem: React.FC<PropsType> = props => {
  const {id, grid, status, isSourceOrTarget, mouseIsPressed} = props;

  const {dispatch} = useContext(DispatchContext);

  function toggle() {
    if (isSourceOrTarget === null)
      dispatch({
        type: 'toggle',
        payload: {agentState: id},
      });
  }

  const commonChildProps = {
    className: ['node', `node-${status}`].join(' '),
    'data-tooltip': `(${id.x}, ${id.y})`, // TODO

    // o evento mouseDown em svg é disparado depois do mouseDown em rect/polygon, por causa do bubbling, então nao usei mouseIsPressed
    onMouseDown: () => {
      toggle();
    },
    onMouseEnter: () => {
      if (mouseIsPressed()) toggle();
    },
  };

  if (grid === 'square') {
    const {x, y} = utils.squareAnchorPoint(id);
    const side = utils.squareSide();

    // calcula o ponto central do icone
    const sideIcon = side * (4 / 4);
    const cxIcon = x + side / 2;
    const cyIcon = y + side / 2;

    return (
      <>
        <rect {...commonChildProps} x={x} y={y} width={side} height={side} />
        {isSourceOrTarget && (
          <Icon
            type={isSourceOrTarget}
            cx={cxIcon}
            cy={cyIcon}
            side={sideIcon}
          />
        )}
      </>
    );
  }
  if (grid === 'triangle') {
    const points = utils.trianglePoints(id);

    // calcula o ponto central do icone
    const side = utils.triangleSide();
    const height = utils.triangleHeight(side);
    const [{x, y}] = points;
    const sideIcon = height * (7 / 11);
    const cxIcon = x + height * (2 / 3) * ((id.x + id.y) % 2 === 0 ? 1 : -1);
    const cyIcon = y;

    return (
      <>
        <polygon
          {...commonChildProps}
          points={points.map(p => `${p.x},${p.y}`).join(' ')}
        />
        {isSourceOrTarget && (
          <Icon
            type={isSourceOrTarget}
            cx={cxIcon}
            cy={cyIcon}
            side={sideIcon}
          />
        )}
      </>
    );
  }
  return <></>;
};

export default GridItem;
export const MemoizedGridItem = React.memo(GridItem);
