import { GameCardWithOverlay } from './GameCardWithOverlay';
import { IGameDef } from 'gamesShared/definitions/game';
import { MobileCarousel } from 'infra/common/components/carousel/MobileCarousel';

export default {
  title: 'Infrastructure/Lobby/GameCardWithOverlay',
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

export const InCarousel = () => (
  <MobileCarousel>
    <div style={{ textDecoration: 'none', minWidth: '250px', width: '250px', margin: '8px' }}>
      <GameCardWithOverlay game={GAME_DEF_TEST} />
    </div>
    <div style={{ textDecoration: 'none', minWidth: '250px', width: '250px', margin: '8px' }}>
      <GameCardWithOverlay game={GAME_DEF_TEST} />
    </div>
    <div style={{ textDecoration: 'none', minWidth: '250px', width: '250px', margin: '8px' }}>
      <GameCardWithOverlay game={GAME_DEF_TEST} />
    </div>
    <div style={{ textDecoration: 'none', minWidth: '250px', width: '250px', margin: '8px' }}>
      <GameCardWithOverlay game={GAME_DEF_TEST} />
    </div>
    <div style={{ textDecoration: 'none', minWidth: '250px', width: '250px', margin: '8px' }}>
      <GameCardWithOverlay game={GAME_DEF_TEST} />
    </div>
  </MobileCarousel>
);
