import { GameLayout } from './GameLayout';
import { GameMode } from 'gamesShared/definitions/mode';

export default {
  title: 'Games (shared)/Components/FBG/GameLayout',
};

const scores = [
  { playerID: '0', score: 100 },
  { playerID: '1', score: 200 },
  { playerID: '2', score: 300 },
];

const players = [
  { playerID: 0, name: 'Bob' },
  { playerID: 1, name: 'Alice' },
  { playerID: 2, name: 'Joe' },
];

export const example = () => <GameLayout gameArgs={{ gameCode: 'chess', mode: GameMode.LocalFriend }} />;
