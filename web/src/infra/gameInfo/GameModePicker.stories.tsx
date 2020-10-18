import { GameModePicker } from './GameModePicker';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

export default {
  title: 'Infrastructure/Game Info/GameModePicker',
};

const GAME_DEF_TEST: IGameDef = {
  code: 'foocode',
  name: 'foo name',
  imageURL: 'foo.jpg',
  description: 'foo desc',
  descriptionTag: 'foo tag',
  status: IGameStatus.PUBLISHED,
  modes: [{ mode: GameMode.AI }, { mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  instructions: {
    videoId: 'dQw4w9WgXcQ',
  },
  config: () => {
    return null as any;
  },
  minPlayers: 2,
  maxPlayers: 3,
};

export const example = () => (
  <Provider store={configureMockStore()({})}>
    <GameModePicker gameDef={GAME_DEF_TEST} />
  </Provider>
);
