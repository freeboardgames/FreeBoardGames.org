import React from 'react';
import { ICard } from '../interfaces';
import css from './bscore.css';

interface ScoreProps {
  piles: ICard[][];
}

export class BScore extends React.Component<ScoreProps, {}> {
  render() {
    let score = this.props.piles.map((pile) => pile.filter((card) => card !== null).length).reduce((a, b) => a + b, 0);

    return <h3 className={css.text}>Score: {score}</h3>;
  }
}
