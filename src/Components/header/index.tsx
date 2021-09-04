// PLUGINS IMPORTS //
import React, {useContext} from 'react';
import styled from 'styled-components';

// COMPONENTS IMPORTS //
import {Tabs, TabsItem, Button, Select} from 'ui';

// EXTRA IMPORTS //
import {ReactComponent as TriangleSolidIcon} from 'assets/icons/triangle-solid.svg';
import {ReactComponent as TriangleOutlineIcon} from 'assets/icons/triangle-outline.svg';
import {ReactComponent as SquareSolidIcon} from 'assets/icons/square-solid.svg';
import {ReactComponent as SquareOutlineIcon} from 'assets/icons/square-outline.svg';
import {ReactComponent as PlayIcon} from 'assets/icons/play.svg';
import {ReactComponent as PauseIcon} from 'assets/icons/pause.svg';

import data from './data';
// import {useCarbonAds} from 'shared/hooks';
import {DispatchContext} from 'components/config/contexts';
// import './carbon-ads.scss';

// TYPE IMPORTS //
import {AvailButton} from 'components/types';
import {SearchAlgoNames} from 'shared/types';
import {GridTypeNames} from 'shared/algorithms/types';

/////////////////////////////////////////////////////////////////////////////

type StateReturn<T> = [T, (value: T) => void];
type PropsType = {
  grid: StateReturn<GridTypeNames>;
  searchAlgo: StateReturn<SearchAlgoNames>;
  delay: StateReturn<number>;
  availButton: AvailButton;
  onStart: () => void;
};
const Header: React.FC<PropsType> = props => {
  const [grid, setGrid] = props.grid;
  const [searchAlgo, setSearchAlgo] = props.searchAlgo;
  const [delay, setDelay] = props.delay;

  const {dispatch} = useContext(DispatchContext);
  // const {adsEl} = useCarbonAds();

  return (
    <WrapperView>
      {/* <div ref={adsEl} /> */}
      <FormView>
        <div style={{display: 'flex'}}>
          <Select
            defaultValue={searchAlgo}
            // tooltip="Pick a search algorithm"
            onChange={e => setSearchAlgo(e.target.value as SearchAlgoNames)}
            options={Object.entries(data).map(([key, value]) => [
              key,
              value.name,
            ])}
          />
          {props.availButton === 'start' && (
            <Button
              tooltip="Visualize"
              Icon={<PlayIcon width="22" height="22" />}
              onClick={props.onStart}
            />
          )}
          {props.availButton === 'continue' && (
            <Button
              tooltip="Continue"
              Icon={<PlayIcon width="22" height="22" />}
              onClick={() => dispatch({type: 'continue'})}
            />
          )}
          {props.availButton === 'pause' && (
            <Button
              tooltip="Pause"
              Icon={<PauseIcon width="22" height="22" />}
              onClick={() => dispatch({type: 'pause'})}
            />
          )}
        </div>
        <Tabs
          defaultValue={grid}
          onChange={value => setGrid(value as GridTypeNames)}>
          <TabsItem
            value="triangle"
            tooltip="View on triangle grid"
            Icon={{
              checked: <TriangleSolidIcon />,
              unchecked: <TriangleOutlineIcon />,
            }}
          />
          <TabsItem
            value="square"
            tooltip="View on square grid"
            Icon={{
              checked: <SquareSolidIcon />,
              unchecked: <SquareOutlineIcon />,
            }}
          />
        </Tabs>
        <Tabs
          defaultValue={String(delay)}
          onChange={value => setDelay(Number(value))}>
          <TabsItem
            value={'20'}
            label="Fast"
            tooltip="Speed up the visualization"
          />
          <TabsItem value={'100'} label="Normal" />
          <TabsItem
            value={'180'}
            label="Slow"
            tooltip="Speed down the visualization"
          />
        </Tabs>
        <Button
          label="Reset"
          tooltip="Clear grid"
          onClick={() => dispatch({type: 'reset', payload: {grid}})}
        />
        <Button
          label="Clear"
          tooltip="Clear path"
          onClick={() => dispatch({type: 'clear'})}
        />
      </FormView>
    </WrapperView>
  );
};

// STYLES //
const WrapperView = styled.div`
  display: flex;
  padding: 7px;
  padding-bottom: 14px;
`;

const FormView = styled.form.attrs({onSubmit: e => e.preventDefault()})`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-right: 10px;
`;

export default Header;
