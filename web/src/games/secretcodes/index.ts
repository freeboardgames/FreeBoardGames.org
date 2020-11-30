const Thumbnail = require('./media/thumbnail.png');
import { IGameDef, IGameStatus } from 'gamesShared/definitions/game';
import { GameMode } from 'gamesShared/definitions/mode';
import instructions from './instructions.md';

export const secretcodesGameDef: IGameDef = {
  code: 'secretcodes',
  name: "Shreeji's Secret",
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.LocalFriend }, { mode: GameMode.OnlineFriend }],
  minPlayers: 4,
  maxPlayers: 20,
  description: 'એવું secret જે શ્રીજી ની કૃપા થી જ મળશે',
  descriptionTag: `Play Sahaj Secret, a free online game\
 that can be used to learn Vachnamrut and other satsang books in,\
 a fun way.`,
  instructions: {
    videoId: 'J8RWBooJivg',
    text: instructions,
  },
  status: IGameStatus.PUBLISHED,
  config: () => import('./config'),
};

export default secretcodesGameDef;
