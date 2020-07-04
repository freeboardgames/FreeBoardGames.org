import React from 'react';
import { ICard } from '../interfaces';
import { BCard } from './bcard';

interface InnerWrapper {
  onClick: () => void;
  card: ICard;
}

export class BTrash extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <button onClick={this.props.onClick}>
        <BCard card={this.props.card} empty={this.props.card ? null : -1} />
      </button>
    );
  }
}
