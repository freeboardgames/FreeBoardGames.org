export default interface ICard {
  number: number;
  value: number;
  showing: boolean;
}

export interface IBuildingCard extends ICard {
  building: boolean;
}

export interface IMoneyCard extends ICard {
  money: boolean;
}
