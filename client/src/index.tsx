import App from './App/App.container';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import * as LogRocket from 'logrocket';
import { persistState } from 'redux-devtools';
import DevTools, { getDebugSessionKey } from './dev/dev-tools';
import reduxFreeze from 'redux-freeze';

import { reducers, dispatchFunctionsFactory } from './store/reducer';

import './index.css';
import { StoreBuilder } from './store/utilities';

LogRocket.init('jqnfct/web-shell-dev');

const history = createHistory();

const navigationMiddleware = routerMiddleware(history);

const enhancer = compose(
  applyMiddleware(
    navigationMiddleware,
    process.env.NODE_ENV !== 'production' ? reduxFreeze : noop => noop,
    LogRocket.reduxMiddleware()
  ),
  DevTools.instrument(),
  persistState(getDebugSessionKey()),
);

const store = createStore(connectRouter(history)(reducers), enhancer);
StoreBuilder.enhanceDispatcher(store, dispatchFunctionsFactory);

if (module.hot) {
  module.hot.accept(['./store/reducer'], () => {
    store.replaceReducer(connectRouter(history)(reducers));
    StoreBuilder.enhanceDispatcher(store, dispatchFunctionsFactory);
  });
}

// tslint:disable-next-line:no-console
// history.listen((location) => console.log(location));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
        <DevTools />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')!
);

registerServiceWorker();
