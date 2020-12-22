import * as React from 'react';
import css from '../Board.module.css';

import { Image } from '../images';
import { IColour } from '../service';

interface ColourCodeProps {
  colour: IColour;
  currentColourId: number;
  position: number;
  onClick: (currentColourId: number, position: number) => void;
}

const ColourCode = ({ colour, currentColourId, onClick, position }: ColourCodeProps) => (
    <button
    className={css.digit}
    key={position}
    onClick={() => onClick(currentColourId, position)}
    style={{ backgroundColor: !colour ? 'grey' : 'transparent' }}
  >
    {(colour && <Image className={css.svg} img={colour.img} hex={colour.hex} />) || ''}
  </button>
);

export default ColourCode;
