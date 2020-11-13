import { getMaxPlayerBet, IG } from './game';
import IPlayer from './player';
import { CardType, CardStyle } from './card';

const defaultPlayer: IPlayer = {
  cardStyle: CardStyle.Style1,
  bet: 0,
  betSkipped: false,
  hand: [CardType.Bunny, CardType.Bunny, CardType.Bunny, CardType.Bomb],
  id: '0',
  stack: [],
  revealedStack: [],
  wins: 0,
  isOut: false,
};

const defaultG: IG = {
  bombPlayerId: null,
  failedRevealPlayerId: null,
  lastWinningPlayerId: null,
  currentBet: 0,
  minBet: 1,
  maxBet: 0,
  players: [],
  discardPile: [],
};

test('max player bet is 2', () => {
  let G: IG = {
    ...defaultG,
    players: [
      {
        ...defaultPlayer,
        bet: 1,
      },
      {
        ...defaultPlayer,
        bet: 2,
      },
    ],
  };

  expect(getMaxPlayerBet(G.players)).toEqual(2);
});
