import { GameMode } from 'components/App/Game/GameModePicker';
import FourInARowThumbnail from './media/thumbnail.png';
import { IGameDef } from 'games';
import instructions from './instructions.md';

export const fourinarowGameDef: IGameDef = {
  code: 'fourinarow',
  name: 'Four in a Row',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: FourInARowThumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  description: 'Also Known as Connect Four',
  descriptionTag: `Four in a Row is a two-player connection game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.`,
  instructions: {
    videoId: 'utXzIFEVPjA',
    text: instructions,
  },
  config: () => import('./config'),
};
