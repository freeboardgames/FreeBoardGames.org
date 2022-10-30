/* eslint-disable no-console */
import CardContainer from './CardContainer';
import { ICard, playerEnum, stageEnum, phaseEnum } from './game';
import { cardEnum, std_crib_deck } from './deals';

const cards: ICard[] = [std_crib_deck[cardEnum.DK], std_crib_deck[cardEnum.DQ], std_crib_deck[cardEnum.DJ]];

const gameState = {
  playerID: playerEnum.north,
  stage: stageEnum.thePlay,
  phase: phaseEnum.gamePlay,
  cutTie: false,
};
const handlers = {
  handleFlip: () => {
    console.log('flip');
  },
  handleDeal: () => {
    console.log('deal');
  },
  handlePlay: () => {
    console.log('play');
  },
  handleCrib: (idx: number) => {
    console.log('crib idx', idx);
  },
  handleCutDeal: (idx: number) => {
    console.log('cut deal:', idx);
  },
  handleCutTurn: (idx: number) => {
    console.log('cut turn', idx);
  },
  handleRotateTurn: () => {
    console.log('cut deal');
  },
};
export default {
  component: CardContainer,
  title: 'Games/cardtable/topcontainer',
};

export const topContainer = {
  args: {
    description: 'Top Container',
    name: 'North Hand',
    cards,
    collaborator: {
      gameState,
      handlers,
    },
    concealed: false,
  },
};
