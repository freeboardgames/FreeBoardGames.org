import ChessThumbnail from './media/thumbnail.png';
import { GameMode } from '../../components/App/Game/GameModePicker';
import { IGameModeExtraInfoSlider } from '../../components/App/Game/GameModePicker';
import { IGameDef } from '../../games';
import instructions from './instructions.md';

export const chessGameDef: IGameDef = {
  code: 'chess',
  name: 'Chess',
  imageURL: ChessThumbnail,
  minPlayers: 2,
  maxPlayers: 2,
  modes: [
    {
      mode: GameMode.AI,
      extraInfo: { type: 'slider', min: 1, max: 8 } as IGameModeExtraInfoSlider,
    },
    { mode: GameMode.OnlineFriend },
    { mode: GameMode.LocalFriend },
  ],
  description: 'International Rules',
  descriptionTag: `Play an online Chess game in your browser against a\
 top chess computer. You can set the computer level from 1 to 8,\
 from easy to grandmaster. You can also easily share a link and play\
 chess with a friend online, or you can share your device and play\
 with a friend locally !`,
  instructions: {
    videoId: 'fKxG8KjH1Qg',
    text: instructions,
  },
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};
