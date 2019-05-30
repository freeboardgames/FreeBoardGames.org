import * as React from 'react';
import { IG } from './game';
import { CardComponent } from './CardComponent';

interface IPlayerHandProps {
  G: IG;
  playerID: string;
  selectCard: (index: number) => void;
}

export class PlayerHand extends React.Component<IPlayerHandProps, {}> {
  _selectCard = (i: number) => () => this.props.selectCard(i);

  render() {
    return (
      <div
        style={{
          width: 400,
          height: 160,
          marginTop: '20px',
        }}
      >
        {this.props.G.players[this.props.playerID as any].cards.map((card, index: number) => (
          <CardComponent key={card.number} click={this._selectCard(index)} card={card} />
        ))}
      </div>
    );
  }
}
