import getAsync from '../Async';

const GameAsync = getAsync('Game', () => import('./Game'));

export default GameAsync;
