import * as React from 'react';
import Card from './card';

interface ICardProps {
  card: Card;
  click?: any;
}

export default class CardComponent extends React.Component<ICardProps, {}> {
  render() {
    const values: any = {
      1: '#ffffff',
      2: '#3498db',
      3: '#f1c40f',
      5: '#e74c3c',
      7: '#8e44ad',
    };
    const style: any = {
      width: 80,
      height: 80,
      background: values[this.props.card.value],
      float: 'left',
      color: 'black',
    };

    return (
      <div
        onClick={this.props.click}
        style={style}
      >
        <div
          style={{
            textAlign: 'center',
            lineHeight: '20px',
          }}
        >
          {this.props.card.value}
        </div>
        <div
          style={{
            textAlign: 'center',
            lineHeight: '60px',
            verticalAlign: 'middle',
            fontSize: '3em',
          }}
        >
          {this.props.card.number}
        </div>
      </div>
    );
  }
}
