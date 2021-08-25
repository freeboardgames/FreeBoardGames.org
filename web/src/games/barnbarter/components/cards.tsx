import * as React from 'react';
import { ICard } from '../definitions';

interface InnerWrapper {
  cards: ICard[];
  key: string;
}

export class BCard extends React.Component<InnerWrapper, {}> {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            {this.props.cards.map((card, index) => {
              return (
                <td key={this.props.key + '_' + index}>
                  |{card.name} 🏆{card.value}|
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    );
  }
}
