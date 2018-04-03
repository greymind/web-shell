import { hot } from 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose, StoreEnhancerStoreCreator } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import * as LogRocket from 'logrocket';
import DevTools from './dev-tools';

import reducers from './store/reducers';
import { StoreState, initialState } from './store';

import App from './App';

import './index.css';

LogRocket.init('jqnfct/web-shell-dev');

const history = createHistory();

const navigationMiddleware = routerMiddleware(history);

const enhancer = compose(
  applyMiddleware(
    navigationMiddleware,
    LogRocket.reduxMiddleware()
  ) as (next: StoreEnhancerStoreCreator<StoreState>) => StoreEnhancerStoreCreator<StoreState>,
  DevTools.instrument(),
);

const store = createStore<StoreState>(connectRouter(history)(reducers), initialState, enhancer);

if (module.hot) {
  module.hot.accept(['./store/reducers'], () => {
    store.replaceReducer(connectRouter(history)(reducers));
  });
}

// tslint:disable-next-line:no-console
// history.listen((location) => console.log(location));

const HotApp = hot(module)(App);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <HotApp />
        <DevTools />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')!
);

registerServiceWorker();
