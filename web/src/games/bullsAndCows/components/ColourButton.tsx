import * as React from 'react';
import css from '../Board.module.css';

import { Image } from '../images';
import { IColour } from '../service';

interface ColourButtonProps {
  currentColourId: number;
  colour: IColour;
  onClick: (colourId: number) => void;
}

const ColourButton = ({ currentColourId, colour, onClick }: ColourButtonProps) => (
  <button
    className={`${css.digit} ${currentColourId === colour.id ? css.selected : ''}`}
    key={colour.id}
    onClick={() => onClick(colour.id)}
  >
    {(colour && <Image className={css.svg} img={colour.img} hex={colour.hex} />) || ''}
  </button>
);

export default ColourButton;
