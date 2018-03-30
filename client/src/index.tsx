import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose, StoreEnhancerStoreCreator } from 'redux';
import { Provider } from 'react-redux';

import { Link, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware, ConnectedRouter } from 'connected-react-router';

import * as LogRocket from 'logrocket';
import DevTools from './dev-tools';
import { hot } from 'react-hot-loader';

import reducers from './store/reducers';
import { StoreState } from './store';

import Hello from './Hello/Hello.container';
import Goodbye from './Goodbye/Goodbye';

import './index.css';

LogRocket.init('jqnfct/web-shell-dev');

const preloadedState = {
  app: {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  }
};

const history = createHistory();

const navigationMiddleware = routerMiddleware(history);

const enhancer = compose(
  applyMiddleware(
    navigationMiddleware,
    LogRocket.reduxMiddleware()
  ) as (next: StoreEnhancerStoreCreator<StoreState>) => StoreEnhancerStoreCreator<StoreState>,
  DevTools.instrument(),
);

const store = createStore<StoreState>(connectRouter(history)(reducers), preloadedState, enhancer);

if (module.hot) {
  module.hot.accept(['./store/reducers'], () => {
    store.replaceReducer(connectRouter(history)(reducers));
  });
}

// tslint:disable-next-line:no-console
// history.listen((location) => console.log(location));

const App = () => (
  <div>
    <nav>
      <Link to="/hello">Hello</Link>
      <Link to="/goodbye">Goodbye</Link>
    </nav>
    <div>
      <Route path="/hello" component={Hello} />
      <Route path="/goodbye" component={Goodbye} />
    </div>
  </div>
);

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
