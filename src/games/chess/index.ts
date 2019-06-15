import ChessThumbnail from './media/thumbnail.png';
import { GameMode } from '../../App/Game/GameModePicker';
import { IGameModeExtraInfoSlider } from '../../App/Game/GameModePicker';
import { IGameDef } from '../../games';

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
  description: 'metadata.chess.description',
  descriptionTag: 'metadata.chess.descriptionTag',
  instructions: {
    videoId: 'fKxG8KjH1Qg',
  },
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};
