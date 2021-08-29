// PLUGINS IMPORTS //
import React from 'react';

// COMPONENTS IMPORTS //
import {Grid} from 'Components';

// EXTRA IMPORTS //
import {memoComparison} from 'Helpers/Functions';
import Navbar from 'Components/Navbar';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {};

const App: React.FC<PropsType> = () => {
  return (
    <div>
      <Navbar />
      <Grid />
    </div>
  );
};

export default React.memo(App, memoComparison);
