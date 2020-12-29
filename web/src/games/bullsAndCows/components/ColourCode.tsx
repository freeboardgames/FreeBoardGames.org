import * as React from 'react';
import css from '../Board.module.css';

import { Image } from '../images';
import { IColour } from '../service';

export interface IColourCodeProps {
  colour: IColour;
  currentColourId: number;
  position: number;
  onClick: (currentColourId: number, position: number) => void;
}

const ColourCode = ({ colour, currentColourId, onClick, position }: IColourCodeProps) => {
  const selectColour = () => onClick(currentColourId, position);

  return (
    <button
      className={css.digit}
      key={position}
      onClick={selectColour}
      style={{ backgroundColor: !colour ? 'grey' : 'transparent' }}
    >
      {(colour && <Image className={css.svg} img={colour.img} hex={colour.hex} />) || ''}
    </button>
  );
};

export default ColourCode;
