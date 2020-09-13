import ICard from './card';

export default interface IPlayer {
  passed?: boolean;
  bid?: number;
  selectedCard?: ICard;
  money: number;
  buildings: ICard[];
  checks: ICard[];
  newCard?: ICard;
  spentCard?: ICard;
  spentMoney?: number;
}
