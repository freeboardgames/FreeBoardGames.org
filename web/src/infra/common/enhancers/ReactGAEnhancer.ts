import { IGameArgs } from 'gamesShared/definitions/game';
import ReactGA from 'react-ga';

const ReactGAEnhancerEvent = (gameArgs: IGameArgs) => () => (next: any) => (action: any) => {
  if (action.type !== 'UPDATE') {
    ReactGA.event({
      category: 'ReactGAEnhancer',
      label: gameArgs.gameCode,
      action: action.type,
    });
  }
  return next(action);
};

export default ReactGAEnhancerEvent;
