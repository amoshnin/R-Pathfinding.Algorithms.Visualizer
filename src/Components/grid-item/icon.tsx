// PLUGINS IMPORTS //
import React from 'react';

// COMPONENTS IMPORTS //
import {ReactComponent as SourceIcon} from 'assets/icons/location-source.svg';
import {ReactComponent as TargetIcon} from 'assets/icons/location-target.svg';

// EXTRA IMPORTS //

// TYPE IMPORTS //

/////////////////////////////////////////////////////////////////////////////

const Icons = {source: SourceIcon, target: TargetIcon};

type TypeProps = {
  type: 'source' | 'target';
  cx: number;
  cy: number;
  side: number;
};

const Icon: React.FC<TypeProps> = props => {
  const {type, cx, cy, side} = props;

  const Icon = Icons[type];
  const x = cx - side / 2;
  const y = cy - side / 2;

  return <Icon x={x} y={y} width={side} height={side} color="black" />;
};

export default Icon;
