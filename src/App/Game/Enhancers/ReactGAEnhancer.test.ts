import ReactGAEnhancer from './ReactGAEnhancer';
import { expect } from 'chai';
import { GameMode } from '../GameModePicker';
import { IGameArgs } from '../GameBoardWrapper';

describe('Alert Layer', () => {
  const gameArgs: IGameArgs = { gameCode: 'foogame', mode: GameMode.AI };
  const action = { type: 'NOT_UPDATE' };
  const nextMock = jest.fn();
  it('sanity check', () => {
    ReactGAEnhancer(gameArgs)()(nextMock)(action);
    expect(nextMock.mock.calls.length).to.equal(1);
  });
});
