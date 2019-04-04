import { expect } from 'chai';
import { getSound, SeabattleSound } from './sound';
import { GameMode } from '../../App/Game/GameModePicker';

const gameArgsOnline = {
  gameCode: 'seabattle',
  mode: GameMode.OnlineFriend,
  matchCode: 'foo',
  playerID: '0',
};

test('should not play sound if it is not an update', () => {
  const action = {
    type: 'MAKE_MOVE',
  };
  expect(getSound(gameArgsOnline, undefined, action)).to.equal(null);
});

test('should not play sound if it is unrelated update', () => {
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
  SeabattleSound(gameArgsOnline)({})(jest.fn())(action);
});

(window as any).HTMLMediaElement.prototype.play = () => {
  // Do nothing.
};

test('HIT salvo should play hit sound', () => {
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
  SeabattleSound(gameArgsOnline)({})(jest.fn())(action);
});

test('MISS salvo should play miss sound', () => {
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
          { hit: false }, // this one
        ],
      },
    },
  };
  expect(getSound(gameArgsOnline, undefined, action)).to.equal('miss');
  SeabattleSound(gameArgsOnline)({})(jest.fn())(action);
});
