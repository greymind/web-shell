import * as React from 'react';
import './Hello.css';
import { Dispatch } from './Hello.reducers';

export type Props = {
  name: string;
  level: number;
} & Dispatch;

class Hello extends React.Component<Props> {
  render() {
    if (this.props.level <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {this.props.name + getExclamationMarks(this.props.level)}
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