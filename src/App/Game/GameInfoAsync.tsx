import { asyncComponent } from 'react-async-component';

const GameInfoAsync = asyncComponent({
  resolve: () => import('./GameInfo'),
});

export default GameInfoAsync;
