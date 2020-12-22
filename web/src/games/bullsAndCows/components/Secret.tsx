import * as React from 'react';
import css from '../Board.module.css';

import { Image } from '../images';
import { IColour } from '../service';

interface SecretProps {
  secret: IColour[];
}

const Secret = ({ secret }: SecretProps) => (
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
