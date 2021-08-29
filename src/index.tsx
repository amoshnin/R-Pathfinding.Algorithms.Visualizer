// PLUGINS IMPORTS //
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// COMPONENTS IMPORTS //
import App from './App';

// EXTRA IMPORTS //

// REDUX IMPORTS //
import {Provider} from 'react-redux';
import {store} from 'Redux/store';

/////////////////////////////////////////////////////////////////////////////

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
