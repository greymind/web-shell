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

import * as LogRocket from 'logrocket';
import { persistState } from 'redux-devtools';
import DevTools, { getDebugSessionKey } from './dev/dev-tools';
import reduxFreeze from 'redux-freeze';

import { StoreState } from './store/state';
import { rootReducer } from './store/reducer';

import 'typeface-roboto';

LogRocket.init('jqnfct/web-shell-dev');

const navigationMiddleware = routerMiddleware(history);

const enhancer = compose(
  applyMiddleware(
    thunk,
    navigationMiddleware,
    process.env.NODE_ENV !== 'production' ? reduxFreeze : noop => noop,
    LogRocket.reduxMiddleware()
  ) as (next: StoreEnhancerStoreCreator<StoreState>) => StoreEnhancerStoreCreator<StoreState>,
  DevTools.instrument(),
  persistState(getDebugSessionKey()),
);

const store = createStore<StoreState>(connectRouter(history)(rootReducer), enhancer);

if (module.hot) {
  module.hot.accept(['./store/reducer'], () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });
}

// tslint:disable-next-line:no-console
// history.listen((location) => console.log(location));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className="Index-root">
        <App />
        <DevTools />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')!
);

registerServiceWorker();
