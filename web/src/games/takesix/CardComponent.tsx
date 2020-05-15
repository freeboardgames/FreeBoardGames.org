import * as React from 'react';
import Card from './card';
import css from './CardComponent.css';
import Typography from '@material-ui/core/Typography';

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

    return (
      <div
        onClick={this.props.click}
        className={css.Card}
        style={{
          background: values[this.props.card.value],
        }}
      >
        <Typography
          className="CardValue"
          style={{
            textAlign: 'center',
            lineHeight: '20px',
          }}
          variant="body2"
        >
          {this.props.card.value}
        </Typography>
        <Typography
          className="CardNumber"
          style={{
            textAlign: 'center',
            lineHeight: '45px',
            verticalAlign: 'middle',
          }}
          variant="h4"
        >
          {this.props.card.number}
        </Typography>
      </div>
    );
  }
}
