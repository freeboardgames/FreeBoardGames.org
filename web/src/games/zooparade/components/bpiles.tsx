import React from 'react';
import { ICard } from '../interfaces';
import { BCard } from './bcard';

interface InnerWrapper {
  piles: ICard[][];

  keyPropagation: string;
}

export class BPiles extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <>
        {this.props.piles.map((pile, index) => {
          if (pile.length === 0) {
            return (
              <BCard card={null} empty={index} key={this.props.keyPropagation + 'BPiles' + index.toString()}></BCard>
            );
          }
          return (
            <BCard
              card={pile[pile.length - 1]}
              empty={null}
              key={this.props.keyPropagation + 'BPiles' + index.toString()}
            ></BCard>
          );
        })}
      </>
    );
  }
}
