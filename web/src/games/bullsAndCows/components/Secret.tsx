import * as React from 'react';
import css from './BullsAndCows.module.css';

import { Image } from '../images';
import { IColour } from '../service';

export interface ISecretProps {
  secret: IColour[];
}

const Secret = ({ secret }: ISecretProps) => (
  <div className={`${css.attempt} ${css.result}`}>
    <span className={css.number}>CODE:</span>
    {secret.map((secretValue, position) => (
      <span className={css.digit} key={position}>
        <Image img={secretValue.img} hex={secretValue.hex} />
      </span>
    ))}
  </div>
);

export default Secret;
