// PLUGINS IMPORTS //
import React from 'react';

// COMPONENTS IMPORTS //
import {Grid} from 'Components';

// EXTRA IMPORTS //
import {memoComparison} from 'Helpers/Functions';

/////////////////////////////////////////////////////////////////////////////

type PropsType = {};

const App: React.FC<PropsType> = () => {
  return (
    <div>
      <Grid />
    </div>
  );
};

export default React.memo(App, memoComparison);
