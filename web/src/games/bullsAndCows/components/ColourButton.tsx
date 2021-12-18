import * as React from 'react';
import css from './BullsAndCows.module.css';

import { Image } from '../images';
import { IColour } from '../service';

export interface IColourButtonProps {
  currentColourId: number;
  colour: IColour;
  onClick: (colourId: number) => void;
}

const ColourButton = ({ currentColourId, colour, onClick }: IColourButtonProps) => {
  const setColourInPosition = () => onClick(colour.id);

  return (
    <button
      className={`${css.digit} ${currentColourId === colour?.id ? css.selected : ''}`}
      onClick={setColourInPosition}
    >
      {(colour && <Image className={css.svg} img={colour.img} hex={colour.hex} />) || ''}
    </button>
  );
};

export default ColourButton;
