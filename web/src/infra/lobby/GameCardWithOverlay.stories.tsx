import { GameCardWithOverlay } from './GameCardWithOverlay';
import { IGameDef } from 'gamesShared/definitions/game';

export default {
  title: 'Infrastructure/Infra/Lobby/GameCardWithOverlay',
};

const GAME_DEF_TEST: IGameDef = {
  code: 'foocode',
  name: 'foo name',
  imageURL: 'http://www.biotoday.bio/wp-content/uploads/sites/2/2016/01/500x250.png',
  description: 'foo desc',
  descriptionTag: 'foo tag',
  modes: [],
  instructions: {
    videoId: 'dQw4w9WgXcQ',
  },
  config: () => {
    return null as any;
  },
  minPlayers: 2,
  maxPlayers: 3,
};

export const Example = () => (
  <div style={{ textDecoration: 'none', flex: 1, width: '250px', margin: '8px' }}>
    <GameCardWithOverlay game={GAME_DEF_TEST} />
  </div>
);
