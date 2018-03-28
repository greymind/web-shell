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
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Goodbye from './Goodbye/Goodbye';

const composeEnhancers = devToolsEnhancer;

const preloadedState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

const store = createStore<StoreState>(enthusiasm, preloadedState, composeEnhancers({}));

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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')!
);

registerServiceWorker();
