import React, { FunctionComponent } from 'react';
import { ICard } from './game';
import css from './CardContainer.module.css';

interface ICardContainerProps {
  cards: ICard[];
  deck?: boolean;
  flipped?: boolean;
  concealed?: boolean;
  turn?: boolean;
  name: string;
  className?: string;
}

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
const CardContainer: FunctionComponent<ICardContainerProps> = (props: ICardContainerProps) => {
  let tileData = props.cards;
  let privacy = props.concealed && !props.turn;
  let view = props.flipped ? !privacy : privacy;

  let tileList = tileData.map((tile) => (
    <img
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
