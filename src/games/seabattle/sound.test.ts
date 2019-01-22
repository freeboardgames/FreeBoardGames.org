import { expect } from 'chai';
import { getSound, SeabattleSound } from './sound';

test('should not play sound if it is not an update', () => {
  const action = {
    type: 'MAKE_MOVE',
  };
  expect(getSound(action)).to.equal(null);
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
  expect(getSound(action)).to.equal(null);
  SeabattleSound({})(jest.fn())(action);
});

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
  expect(getSound(action)).to.equal('hit');
  SeabattleSound({})(jest.fn())(action);
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
  expect(getSound(action)).to.equal('miss');
});
