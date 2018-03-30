import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Hello from './Hello/Hello.container';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { enthusiasm } from './Hello/Hello.reducers';
import { StoreState } from './Store/index';
import { Provider } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import Goodbye from './Goodbye/Goodbye';

import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import * as LogRocket from 'logrocket';

LogRocket.init('jqnfct/web-shell-dev');

const composeEnhancers = compose();

const preloadedState = {
  app: {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  }
};

const history = createHistory();

const navigationMiddleware = routerMiddleware(history);

const reducers = combineReducers<StoreState>({
  app: enthusiasm,
  router: routerReducer
});

const store = createStore<StoreState>(reducers, preloadedState, composeEnhancers(
  applyMiddleware(
    navigationMiddleware,
    LogRocket.reduxMiddleware()
  )
));

// tslint:disable-next-line:no-console
history.listen((location) => console.log(location));

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

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')!
);

registerServiceWorker();
