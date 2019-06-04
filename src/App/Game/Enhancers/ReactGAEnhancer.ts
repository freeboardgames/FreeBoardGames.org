import { IGameArgs } from '../GameBoardWrapper';
import ReactGA from 'react-ga';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ReactGAEnhancerEvent = (gameArgs: IGameArgs) => (store: any) => (next: any) => (action: any) => {
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
