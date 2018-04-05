import { hot } from 'react-hot-loader';
import * as React from 'react';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Hello from './Hello/Hello.container';
import Goodbye from './Goodbye/Goodbye';
import { isDevMode } from './utils';

const logo = require('./logo.svg');

const App = () => {
  return (
    <div className="App">
      <nav>
        <Link to="/hello">Hello</Link>
        &nbsp;
          <Link to="/goodbye">Goodbye</Link>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        To get started, edit <code>src/App.tsx</code> and save to reload.
        {
          isDevMode() ? <span>dev</span> : <span />
        }
      </p>
      <div>
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
      </div>
    </div>
  );
};

const HotApp = hot(module)(App);
export default HotApp;
