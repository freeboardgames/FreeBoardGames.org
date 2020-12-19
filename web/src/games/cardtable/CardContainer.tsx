import React, { FunctionComponent } from 'react';
import { ICard } from './game';
import css from './CardContainer.css';

interface ICardContainerProps {
  cards: ICard[];
  deck?: boolean;
  flipped?: boolean;
  concealed?: boolean;
  turn?: boolean;
  name: string;
  className?: string;
}

const CardContainer: FunctionComponent<ICardContainerProps> = (props: ICardContainerProps) => {
  let tileData = props.cards;
  let privacy = props.concealed && !props.turn;
  let view = props.flipped ? !privacy : privacy;

  const handleClick = (evt: React.MouseEvent, idx: number) => {
    evt.preventDefault();
    evt.stopPropagation();
    alert(`you clicked : ${idx}`);
  };

  let tileList = tileData.map((tile, index) => (
    <img
      onClick={(evt) => handleClick(evt, index)}
      key={tile.id}
      className={css.fitpicture}
      src={require(`${view ? './media/png/gray_back.png' : tile.img}`)}
      alt={tile.id}
    />
  ));
  if (props.deck) {
    tileList.length = 1;
  }

  return (
    <div className={css.cardcontainer}>
      <div className={css.grid}>{tileList}</div>
    </div>
  );
};

export default CardContainer;
