// PLUGINS IMPORTS //
import React from 'react';
import styled from 'styled-components';

// COMPONENTS IMPORTS //
import Pathfinder from 'components/pathfinder';
import {SocialCorner} from 'ui';

// EXTRA IMPORTS //
import './styles.scss';

// TYPE IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {};
const App: React.FC<PropsType> = () => {
  return (
    <WrapperView>
      <SocialCorner
        size={50}
        href="https://Artem711.github.io/R-PathfindingAlgorithmsVisualizer"
      />
      <Pathfinder />
      <Footer>Copyright &copy; 2021 Artem Moshnin. All rights reserved.</Footer>
    </WrapperView>
  );
};

// STYLES //
const WrapperView = styled.div`
  height: 100vh;
  width: 100vw;

  background: var(--background);
  font-family: 'Inter', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI',
    'Helvetica Neue', sans-serif;
`;

const Footer = styled.footer`
  margin-top: 6px;
  text-align: center;
  font-size: 10px;
  color: gray;
`;

export default App;
