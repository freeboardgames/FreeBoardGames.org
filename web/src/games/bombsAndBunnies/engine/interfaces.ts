export enum Phases {
    initial_placement = 'initial_placement',
    place_or_bet = 'place_or_bet',
    bet = 'bet',
    reveal = 'reveal',
    penalty = 'penalty',
    result = 'result',
  }

export interface IG {
    players: IPlayer[];
    minBet: number;
    maxBet: number;
    currentBet: number;
    bombPlayerId: string | null;
    failedRevealPlayerId: string | null;
    lastWinningPlayerId: string | null;
    discardPile: CardStyle[];
  }

  export interface IPlayer {
    id: string;
    cardStyle: CardStyle;
    hand: CardType[];
    stack: CardType[];
    revealedStack: CardType[];
    wins: number;
    bet: null | number;
    betSkipped: boolean;
    isOut: boolean;
  }
  
  export enum CardType {
    Bunny,
    Bomb,
  }
  
  export enum CardStyle {
    Style1,
    Style2,
    Style3,
    Style4,
    Style5,
    Style6,
  }
  