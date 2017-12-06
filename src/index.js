import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import App from './components/App';
import rootReducer from './reducers/rootReducer'

const target = document.getElementById('root');

const store = createStore(
  rootReducer
);

render(
  <Provider store={ store }>
    <div>
      <App />
    </div>
  </Provider>,
  target
);
