import { GameLayout } from './GameLayout';
import { GameMode } from 'gamesShared/definitions/mode';

export default {
  title: 'Games (shared)/Components/FBG/GameLayout',
};

export const example = () => <GameLayout gameArgs={{ gameCode: 'chess', mode: GameMode.LocalFriend }} />;
