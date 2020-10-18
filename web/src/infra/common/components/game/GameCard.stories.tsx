import { GameCard } from './GameCard';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';

export default {
  title: 'Infrastructure/Common/Game/GameCard',
};

const GAME_DEF_TEST: IGameDef = {
  code: 'foocode',
  name: 'foo name',
  imageURL: 'http://www.biotoday.bio/wp-content/uploads/sites/2/2016/01/500x250.png',
  description: 'foo desc',
  descriptionTag: 'foo tag',
  status: IGameStatus.PUBLISHED,
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

export const Example = () => <GameCard game={GAME_DEF_TEST} />;
export const AsLink = () => <GameCard game={GAME_DEF_TEST} isLink={true} />;
