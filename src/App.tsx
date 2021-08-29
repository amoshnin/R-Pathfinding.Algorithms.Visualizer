// PLUGINS IMPORTS //
import React from 'react';

// COMPONENTS IMPORTS //
import {Navbar, Infobar, Grid} from 'Components';

// EXTRA IMPORTS //
import {memoComparison} from 'Helpers/Functions';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {};

const App: React.FC<PropsType> = () => {
  return (
    <div>
      <Navbar />
      <Infobar />
      <Grid />
    </div>
  );
};

export default React.memo(App, memoComparison);
