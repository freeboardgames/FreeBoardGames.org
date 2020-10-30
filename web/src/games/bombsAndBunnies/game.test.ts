import { getMaxPlayerBet, IG } from './game';
import IPlayer from './player';
import { CardType } from './cardType';
<<<<<<< HEAD
import { CardStyle } from './CardComponent';

const defaultPlayer: IPlayer = {
  cardStyle: CardStyle.Style1,
=======

const defaultPlayer: IPlayer = {
>>>>>>> upstream/master
  bet: 0,
  betSkipped: false,
  hand: [CardType.Bunny, CardType.Bunny, CardType.Bunny, CardType.Bomb],
  id: '0',
  stack: [],
  revealedStack: [],
  wins: 0,
};

const defaultG: IG = {
<<<<<<< HEAD
  bombPlayerId: null,
  failedRevealPlayerId: null,
=======
>>>>>>> upstream/master
  currentBet: 0,
  minBet: 1,
  maxBet: 0,
  players: [],
<<<<<<< HEAD
  discardPile: [],
=======
>>>>>>> upstream/master
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

<<<<<<< HEAD
  expect(getMaxPlayerBet(G.players)).toEqual(2);
=======
  expect(getMaxPlayerBet(G)).toEqual(2);
>>>>>>> upstream/master
});
