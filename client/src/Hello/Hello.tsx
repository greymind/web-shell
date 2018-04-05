import * as React from 'react';
import './Hello.css';
import { helloReducer, HelloState } from './Hello.reducers';

export type Dispatch = typeof helloReducer.__dispatchType;

export type Props = HelloState & Dispatch;

class Hello extends React.Component<Props> {
  render() {
    if (this.props.enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {this.props.languageName + getExclamationMarks(this.props.enthusiasmLevel)}
        </div>
        <div>
          <button onClick={this.props.decrementEnthusiasm}>-</button>
          <button onClick={this.props.incrementEnthusiasm}>+</button>
        </div>
      </div>
    );
  }
}

export default Hello;

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}