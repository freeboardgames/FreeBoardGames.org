import * as React from 'react';
import { IAuction } from '../definitions';
import { BAuction } from './auction';

interface InnerWrapper {
  numberCards: number;
  auction: IAuction;
}

export class BCenter extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <div>
        number of animal cards left : {this.props.numberCards}
        <BAuction auction={this.props.auction}></BAuction>
      </div>
    );
  }
}
