import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CounterApp from './CounterApp';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

