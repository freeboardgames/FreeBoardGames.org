import * as React from 'react';
import css from '../Board.module.css';

import { Image } from '../images';
import { IAttempt } from '../service';

interface AttemptProps {
  attempt: IAttempt;
  index: string;
}
const getHintValue = (hint: number) => {
  if (hint === 1) {
    return '✓';
  } else if (hint === 0) {
    return 'X';
  } else {
    return '∅';
  }
};

const Attempt = ({ attempt, index }: AttemptProps) => (
  <div className={css.attempt}>
    <span className={css.number}>{index}.</span>
    {attempt.combination.map((combinationValue, position) => (
      <span className={css.digit} key={position}>
        <Image img={combinationValue.img} hex={combinationValue.hex} />
      </span>
    ))}
    <div className={css.hints}>
      {attempt.hints.map((value, position) => (
        <span className={`${css.digit} ${css.hint}`} key={position}>
          {getHintValue(value)}
        </span>
      ))}
    </div>
  </div>
);

export default Attempt;
