const Thumbnail = require('./media/thumbnail.png?lqip-colors');
import {IGameDef} from '../index';
import {GameMode} from '../../components/App/Game/GameModePicker';
import instructions from './instructions.md';

export const codenamesGameDef: IGameDef = {
    code: 'codenames',
    name: 'Codenames',
    imageURL: Thumbnail,
    modes: [{ mode: GameMode.OnlineFriend }],
    minPlayers: 1, // TODO set to min of 3
    maxPlayers: 20,
    description: 'The board game Codenames',
    descriptionTag: `Play Codenames, a free online game\
 based on the board game Codenames! you can play multi-player\
 from three and up to thirty players online!`,
    instructions: {
       videoId: 'fF0lnDygoes',
       text: instructions,
    },
    config: () => import('./config'),
};
