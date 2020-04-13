const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import { IGameDef } from '../index';
import { GameMode } from '../../components/App/Game/GameModePicker';
import instructions from './instructions.md';

export const secretcodesGameDef: IGameDef = {
  code: 'secretcodes',
  name: 'Secret Codes',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.LocalFriend }, { mode: GameMode.OnlineFriend }],
  minPlayers: 3,
  maxPlayers: 20,
  description: 'Similar to Codenames',
  descriptionTag: `Play Secret Codes, a free online game\
 similar to the board game Codenames! you can play multi-player\
 from three and up to twenty players online!`,
  instructions: {
    videoId: 'zQVHkl8oQEU',
    text: instructions,
  },
  config: () => import('./config'),
};
