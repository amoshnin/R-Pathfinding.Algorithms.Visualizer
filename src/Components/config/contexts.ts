// PLUGINS IMPORTS //
import React from 'react';

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

// TYPE IMPORTS //
import {Action} from 'components/types';

/////////////////////////////////////////////////////////////////////////////

export const DispatchContext = React.createContext<{
  dispatch: React.Dispatch<Action>;
}>({dispatch: () => {}});
