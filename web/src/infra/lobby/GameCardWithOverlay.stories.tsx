import { GameCardWithOverlay, RoomDisplay } from './GameCardWithOverlay';
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import { MobileCarousel } from 'infra/common/components/carousel/MobileCarousel';
import { DesktopCarousel } from 'infra/common/components/carousel/DesktopCarousel';

export default {
  title: 'Infrastructure/Lobby/GameCardWithOverlay',
};

const GAME_DEF_TEST: IGameDef = {
  code: 'foocode',
  name: 'foo name',
  contributors: ['foo'],
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

const ROOMS_EXAMPLE: RoomDisplay[] = [
  {
    id: 'foo1',
    name: 'Monkey',
    occupancy: 1,
    capacity: 2,
    gameCode: 'foocode',
  },
  {
    id: 'foo2',
    name: 'Ferret',
    occupancy: 1,
    capacity: 2,
    gameCode: 'foocode',
  },
  {
    id: 'foo3',
    name: 'Elephant',
    occupancy: 2,
    capacity: 3,
    gameCode: 'foocode',
  },
  {
    id: 'foo4',
    name: 'Horse',
    occupancy: 1,
    capacity: 2,
    gameCode: 'foocode',
  },
  {
    id: 'foo5',
    name: 'Dog',
    occupancy: 1,
    capacity: 2,
    gameCode: 'foocode',
  },
  {
    id: 'foo5',
    name: 'Cat',
    occupancy: 2,
    capacity: 3,
    gameCode: 'foocode',
  },
];

const example = (
  <div style={{ textDecoration: 'none', flex: 1, minWidth: '250px', width: '250px', margin: '8px' }}>
    <GameCardWithOverlay game={GAME_DEF_TEST} rooms={ROOMS_EXAMPLE} />
  </div>
);

export const Example = () => example;

export const InDesktopCarousel = () => <DesktopCarousel>{[...Array(10)].map(() => example)}</DesktopCarousel>;

export const InMobileCarousel = () => <MobileCarousel>{[...Array(10)].map(() => example)}</MobileCarousel>;
