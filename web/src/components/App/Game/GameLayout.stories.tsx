import {GameLayout} from './GameLayout';
import { IGameArgs } from './GameBoardWrapper';
import { GameMode } from './GameModePicker';

export default {
  component: GameLayout,
  title: 'Button',
};

const gameArgs: IGameArgs = {gameCode: 'fooGame', mode: GameMode.LocalFriend};

export const layout = () => <GameLayout gameArgs={gameArgs}>Test</GameLayout>;