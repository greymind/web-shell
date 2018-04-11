import App from './App/App.container';
import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose, StoreEnhancerStoreCreator } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import history from './helpers/history';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

// import * as LogRocket from 'logrocket';
import { persistState } from 'redux-devtools';
import DevTools, { getDebugSessionKey } from './dev/dev-tools';

import { StoreState } from './store/state';
import { rootReducer } from './store/reducer';

import 'typeface-roboto';
import { isDevMode } from './helpers/utilities';

// LogRocket.init('jqnfct/web-shell-dev');

const navigationMiddleware = routerMiddleware(history);

const middleware = [
  thunk,
  navigationMiddleware,
];

const devMiddleware = [];
if (isDevMode()) {
  const reduxFreeze = require('redux-freeze');
  devMiddleware.push(reduxFreeze);
}

const enhancers = [];
if (isDevMode()) {
  enhancers.push(
    DevTools.instrument(),
    persistState(getDebugSessionKey()),
  );
}

const enhancer = compose(
  applyMiddleware(
    ...middleware,
    ...devMiddleware,
    // LogRocket.reduxMiddleware()
  ) as (next: StoreEnhancerStoreCreator<StoreState>) => StoreEnhancerStoreCreator<StoreState>,
  ...enhancers
);

const store = createStore<StoreState>(connectRouter(history)(rootReducer), enhancer);

if (module.hot) {
  module.hot.accept(['./store/reducer'], () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="Index-root">
        <App />
        {isDevMode()
          ? <DevTools />
          : <div />
        }
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')!
);

registerServiceWorker();
