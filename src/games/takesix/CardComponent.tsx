import * as React from 'react';
import Card from './card';

export interface ICardProps {
  card: Card;
  click?: () => void;
}

export class CardComponent extends React.Component<ICardProps, {}> {
  render() {
    const values: any = {
      1: '#ffffff',
      2: '#3498db',
      3: '#f1c40f',
      5: '#e74c3c',
      7: '#8e44ad',
    };
    const style: any = {
      maxWidth: '70px',
      width: '20%',
      background: values[this.props.card.value],
      float: 'left',
      color: 'black',
      cursor: 'pointer',
    };

    return (
      <div onClick={this.props.click} style={style}>
        <div
          className="CardValue"
          style={{
            textAlign: 'center',
            lineHeight: '20px',
          }}
        >
          {this.props.card.value}
        </div>
        <div
          className="CardNumber"
          style={{
            textAlign: 'center',
            lineHeight: '50px',
            verticalAlign: 'middle',
            fontSize: '2.5em',
          }}
        >
          {this.props.card.number}
        </div>
      </div>
    );
  }
}
