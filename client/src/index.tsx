import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Hello from './Hello/Hello.container';
import { createStore } from 'redux';
import { enthusiasm } from './Hello/Hello.reducers';
import { StoreState } from './Store/index';
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

const composeEnhancers = devToolsEnhancer;

const preloadedState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

const store = createStore<StoreState>(enthusiasm, preloadedState, composeEnhancers({}));

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root')!
);

registerServiceWorker();
