// PLUGINS IMPORTS //
import React from 'react';

// COMPONENTS IMPORTS //
import {memoComparison} from 'Helpers/Functions';

// EXTRA IMPORTS //
import './Node.css';

// REDUX IMPORTS //
import {NodeType} from 'Redux/types';

/////////////////////////////////////////////////////////////////////////////

type VoidNodeMouseHandlerType = (row: number, column: number) => void;
interface PropsType {
  node: NodeType;
  isFinish: boolean;
  isStart: boolean;
  onMouseDown: VoidNodeMouseHandlerType;
  onMouseEnter: VoidNodeMouseHandlerType;
  onMouseUp: () => void;
}

const Node: React.FC<PropsType> = props => {
  const extraClassName = props.isFinish
    ? 'node-finish'
    : props.isStart
    ? 'node-start'
    : props.node.isWall
    ? 'node-wall'
    : '';

  return (
    <div
      id={`node-${props.node.row}-${props.node.column}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => props.onMouseDown(props.node.row, props.node.column)}
      onMouseEnter={() => props.onMouseEnter(props.node.row, props.node.column)}
      onMouseUp={() => props.onMouseUp()}></div>
  );
};

export default React.memo(Node, memoComparison);
