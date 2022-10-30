import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardContainer from './CardContainer';
import css from './CardContainer.module.css';
import { CardTableGame, phaseEnum, playerEnum, stageEnum } from './game';
import { Client } from 'boardgame.io/client';
import { cardEnum } from './deals';

// mock functions for HTMLMediaElement
// https://github.com/jsdom/jsdom/issues/2155#issuecomment-366703395
(window as any).HTMLMediaElement.prototype.load = () => {
  /* do nothing */
};
(window as any).HTMLMediaElement.prototype.play = () => {
  /* do nothing */
};
(window as any).HTMLMediaElement.prototype.pause = () => {
  /* do nothing */
};
(window as any).HTMLMediaElement.prototype.addTextTrack = () => {
  /* do nothing */
};

Enzyme.configure({ adapter: new Adapter() });

test('game state UX no foreign clickers', () => {
  const testCards = [{ id: cardEnum.D6, faced: false, rank: 32 }];

  const client = Client({
    game: CardTableGame,
  });

  const collaborator = {
    handlers: {
      handleDeal: client.moves.deal,
      handlePlay: client.moves.play,
      handleCrib: client.moves.putToCrib,
      handleCutDeal: jest.fn().mockName('hCutDealMock'),
      handleCutTurn: client.moves.cutShowTurn,
      handleFlip: client.moves.flipCrib,
      handleRotateTurn: client.moves.rotateTurnToDeal,
    },
    gameState: { playerID: playerEnum.north, phase: phaseEnum.gamePlay, stage: stageEnum.dealHand, cutTie: false },
  };

  const cards = Enzyme.mount(<CardContainer cards={testCards} name="North Hand" collaborator={collaborator} />);

  // UI should not allow clicks from other containers to activate the cut
  let card = cards.find(`.${css.grid} Card`);
  card.simulate('click');

  //only clicks originating from cards in the deck should invoke hCutForDeal
  expect(collaborator.handlers.handleCutDeal.mock.calls.length).toBe(0);
});
