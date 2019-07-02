import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import 'normalize.css';
import './index.scss';
import App from './components/App';
import Reducer from './containers/store/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
