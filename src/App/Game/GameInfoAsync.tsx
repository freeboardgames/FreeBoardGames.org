import getAsync from '../Async';

const GameInfoAsync = getAsync('Game Info', () => import('./GameInfo'));

export default GameInfoAsync;
