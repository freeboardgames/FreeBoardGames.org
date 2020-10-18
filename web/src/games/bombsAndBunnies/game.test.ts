import { getMaxPlayerBet, IG } from './game';
import IPlayer from './player';
import { CardType } from './cardType';

const defaultPlayer: IPlayer = {
  bet: 0,
  betSkipped: false,
  hand: [CardType.Bunny, CardType.Bunny, CardType.Bunny, CardType.Bomb],
  id: '0',
  stack: [],
  revealedStack: [],
  wins: 0,
};

const defaultG: IG = {
  currentBet: 0,
  minBet: 1,
  maxBet: 0,
  players: [],
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

  expect(getMaxPlayerBet(G)).toEqual(2);
});
