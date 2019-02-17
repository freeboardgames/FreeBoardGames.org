import Game from './Game';
import { asyncComponent } from 'react-async-component';

const GameAsync = asyncComponent({
  resolve: () => import('./Game'),
});

export default GameAsync;
