// PLUGINS IMPORTS //
import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';

// COMPONENTS IMPORTS //
import App from './App';

// EXTRA IMPORTS //

// REDUX IMPORTS //
import {Provider} from 'react-redux';
import {store} from 'Redux/store';

/////////////////////////////////////////////////////////////////////////////

ReactDOM.render(
  <Provider store={store}>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />
    <App />
  </Provider>,
  document.getElementById('root'),
);
