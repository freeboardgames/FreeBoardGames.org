const Thumbnail = require('./media/thumbnail.png');
import { GameMode } from 'components/App/Game/GameModePicker';
import { IGameDef } from 'games';
import instructions from './instructions.md';

export const soupOfLettersGameDef: IGameDef = {
  code: 'soupofletters',
  name: 'Soup of Letters',
  imageURL: Thumbnail,
  modes: [{ mode: GameMode.LocalFriend }], // { mode: GameMode.OnlineFriend }, 
  minPlayers: 1,
  maxPlayers: 4,
  description: "Always more fun with friends.",
  descriptionTag: `Soup of letters, Alphabet soup. Find words in puzzel game.`,
  instructions: {
    // videoId: '_XVs7CmSXTw',
    text: instructions,
  },
  config: () => import('./config'),
  // aiConfig: () => import('./ai'),
};