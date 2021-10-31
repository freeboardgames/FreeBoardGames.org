import { IPlayerInRoom } from 'gamesShared/definitions/player';
import { gameDecorator } from '../decorators/game';
import { Log, Moves } from '../interfaces';
import { BLog } from './blog';
export default {
  title: 'Games/Zoo Parade/Components/BLog',
  decorators: [gameDecorator],
};
const log: Log[] = [
  {
    player: '0',
    move: Moves.moveDiscard,
    cardColor: 1,
    cardValue: 2,
  },
  {
    player: '0',
    move: Moves.movePlay,
    cardColor: 3,
    cardValue: 1,
    success: false,
  },
];
const players: IPlayerInRoom[] = [
  {
    name: 'Foo',
    playerID: 0,
  },
];
export const Example = () => <BLog log={log} players={players} keyPropagation={'foo'} />;
export const LastOnly = () => <BLog lastOnly log={log} players={players} keyPropagation={'foo'} />;
