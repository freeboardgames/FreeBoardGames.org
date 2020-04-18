const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { IGameDef } from '../index';
import { GameMode } from '../../components/App/Game/GameModePicker';
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
    videoId: 'zQVHkl8oQEU',
    text: instructions,
  },
  config: () => import('./config'),
};
