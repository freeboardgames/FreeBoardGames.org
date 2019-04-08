import { expect } from 'chai';
import { getSound, SeabattleSound } from './sound';
import { GameMode } from '../../App/Game/GameModePicker';

const gameArgsOnline = {
  gameCode: 'seabattle',
  mode: GameMode.OnlineFriend,
  matchCode: 'foo',
  playerID: '0',
};

const gameArgsAI = { ...gameArgsOnline, mode: GameMode.AI };

const mockStateDict: any = {
  G: {
    ships: [],
    salvos: [],
  },
  ctx: {
    numPlayers: 2,
    turn: 0,
    currentPlayer: '0',
    actionPlayers: [
      '0',
      '1',
    ],
    currentPlayerMoves: 0,
    playOrder: [
      '0',
      '1',
    ],
    playOrderPos: 0,
    stats: {
      turn: {
        numMoves: {},
        allPlayed: false,
      },
      phase: {
        numMoves: {},
        allPlayed: false,
      },
    },
    allPlayed: false,
    phase: 'setup',
    prevPhase: 'default',
    allowedMoves: [
      'setShips',
    ],
  },
};
const mockStateFn = jest.fn();
mockStateFn.mockReturnValue(mockStateDict);
const mockStore = { getState: mockStateFn };

test('should not play sound if it is not an update - online friend', () => {
  const action = {
    type: 'MAKE_MOVE',
  };
  expect(getSound(gameArgsOnline, undefined, action)).to.equal(null);
});

test('should not play sound if it is unrelated update - online friend', () => {
  const action = {
    type: 'UPDATE',
    deltalog: [
      {
        action: {
          type: 'GAME_EVENT',
        },
      },
    ],
  };
  expect(getSound(gameArgsOnline, undefined, action)).to.equal(null);
  SeabattleSound(gameArgsOnline)(mockStore)(jest.fn())(action);
});

(window as any).HTMLMediaElement.prototype.play = () => {
  // Do nothing.
};

test('HIT salvo should play hit sound - online friend', () => {
  const action = {
    type: 'UPDATE',
    deltalog: [
      {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'salvo',
          },
        },
      },
      {
        action: {
          type: 'GAME_EVENT',
        },
      },
    ],
    state: {
      G: {
        salvos: [
          { hit: false },
          { hit: true }, // this one
        ],
      },
    },
  };
  expect(getSound(gameArgsOnline, undefined, action)).to.equal('hit');
  SeabattleSound(gameArgsOnline)(mockStore)(jest.fn())(action);
});

test('MISS salvo should play miss sound - AI', () => {
  const action = {
    type: 'UPDATE',
    payload: {
      type: 'salvo',
    },
    deltalog: [
      {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'salvo',
          },
        },
      },
      {
        action: {
          type: 'GAME_EVENT',
        },
      },
    ],
    state: {
      G: {
        salvos: [
          { hit: false },
          { hit: false }, // this one
        ],
      },
    },
  };
  const mockMissState = { ...mockStateDict, G: { ships: [], salvos: [{ hit: false }] } };
  expect(getSound(gameArgsAI, mockMissState, action)).to.equal('miss');
});

test('unrelated salvo should not play sound - AI', () => {
  const action = {
    type: 'UPDATE',
    payload: {
      type: 'foo',
    },
    deltalog: [
      {
        action: {
          type: 'MAKE_MOVE',
          payload: {
            type: 'salvo',
          },
        },
      },
      {
        action: {
          type: 'GAME_EVENT',
        },
      },
    ],
    state: {
      G: {
        salvos: [
          { hit: false },
          { hit: false }, // this one
        ],
      },
    },
  };
  const mockMissState = { ...mockStateDict, G: { ships: [], salvos: [{ hit: true }] } };
  expect(getSound(gameArgsAI, mockMissState, action)).to.equal(null);
});
