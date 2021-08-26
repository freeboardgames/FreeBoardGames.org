import * as React from 'react';
import { ICard } from '../definitions';

interface InnerWrapper {
  cards: ICard[];
  highlightCard: number;
  ownerID: number;
  onClick: any;
  _key: string;
}

export class BCard extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            {this.props.cards.map((card, index) => {
              return (
                <td
                  key={this.props._key + '_' + index}
                  onClick={() => {
                    this.props.onClick === null ? () => {} : this.props.onClick(index);
                  }}
                >
                  <div style={this.props.highlightCard == index ? { color: 'red' } : {}}>
                    |{card.name} 🏆 {card.value}|
                  </div>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    );
  }
}
