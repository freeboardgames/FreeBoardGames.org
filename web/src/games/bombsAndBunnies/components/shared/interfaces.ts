export enum CardStyle {
  Style1,
  Style2,
  Style3,
  Style4,
  Style5,
  Style6,
}

export enum CardType {
  Bunny,
  Bomb,
}

export interface IPlayerProps {
  id: string;
  name: string;
  cardStyle: CardStyle;
  hand: CardType[];
  stack: CardType[];
  revealedStack: CardType[];
  wins: number;
  bet: null | number;
  betSkipped: boolean;
  isDiscarding: boolean;
  isBeingPunished: boolean;
  isOut: boolean;
}
