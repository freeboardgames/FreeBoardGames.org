import { expect } from 'chai';
import { playSeabattleSound } from './sound';
import { GameMode } from '../../App/Game/GameModePicker';

// mock functions for HTMLMediaElement
// https://github.com/jsdom/jsdom/issues/2155#issuecomment-366703395
(window as any).HTMLMediaElement.prototype.load = () => { /* do nothing */ };
(window as any).HTMLMediaElement.prototype.play = () => { /* do nothing */ };
(window as any).HTMLMediaElement.prototype.pause = () => { /* do nothing */ };
(window as any).HTMLMediaElement.prototype.addTextTrack = () => { /* do nothing */ };

const gameArgsOnline = {
  gameCode: 'seabattle',
  mode: GameMode.OnlineFriend,
  matchCode: 'foo',
  playerID: '0',
};

const gameArgsAI = { ...gameArgsOnline, mode: GameMode.AI };
const mockStateFn = jest.fn();
const mockStore = { getState: mockStateFn };

test('should not play sound if it is not an update - online friend', () => {
  const action = {
    type: 'MAKE_MOVE',
  };
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
  playSeabattleSound('HIT');
});

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
  playSeabattleSound('HIT');
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
  const mockMissState: any = { G: { ships: [], salvos: [{ hit: false }] } };
  playSeabattleSound('HIT');
});
