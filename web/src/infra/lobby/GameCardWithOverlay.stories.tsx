import { GameCardWithOverlay } from './GameCardWithOverlay';
import { IGameDef } from 'gamesShared/definitions/game';
import { MobileCarousel } from 'infra/common/components/carousel/MobileCarousel';
import { DesktopCarousel } from 'infra/common/components/carousel/DesktopCarousel';

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

const example = (
  <div style={{ textDecoration: 'none', flex: 1, minWidth: '250px', width: '250px', margin: '8px' }}>
    <GameCardWithOverlay game={GAME_DEF_TEST} />
  </div>
);

export const Example = () => example;

export const InDesktopCarousel = () => <DesktopCarousel>{[...Array(10)].map(() => example)}</DesktopCarousel>;

export const InMobileCarousel = () => <MobileCarousel>{[...Array(10)].map(() => example)}</MobileCarousel>;
