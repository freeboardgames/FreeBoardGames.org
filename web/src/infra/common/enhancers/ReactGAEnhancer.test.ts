import ReactGAEnhancer from './ReactGAEnhancer';
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameArgs } from 'gamesShared/definitions/game';
import ReactGA from 'react-ga';

describe('ReactGAEnhancer', () => {
  const gameArgs: IGameArgs = { gameCode: 'foogame', mode: GameMode.AI };
  it('should call next() without calling ReactGA.event() if action.type = UPDATE', () => {
    const action = { type: 'UPDATE' };
    const nextMock = jest.fn();
    ReactGAEnhancer(gameArgs)()(nextMock)(action);
    expect(nextMock).toHaveBeenCalled();
    expect(ReactGA.event as any).not.toHaveBeenCalled();
  });

  it('should call next() AND call ReactGA.event() if action.type = NOT_UPDATE', () => {
    const action = { type: 'NOT_UPDATE' };
    const nextMock = jest.fn();
    ReactGAEnhancer(gameArgs)()(nextMock)(action);
    expect(ReactGA.event as any).toHaveBeenCalledWith({
      action: 'NOT_UPDATE',
      category: 'ReactGAEnhancer',
      label: 'foogame',
    });
  });
});
