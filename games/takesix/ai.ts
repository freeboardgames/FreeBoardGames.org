import { IAIConfig } from '../index';
import { IG, getCards, isAllowedDeck } from './game';
import { IGameCtx } from '@freeboardgame.org/boardgame.io/core';

interface IPlayState {
  G: IG;
  ctx: IGameCtx;
}

class TakeSixBot {
  async play(state: IPlayState, playerID: string) {
    if (state.ctx.phase === 'CARD_SELECT') {
      // const randomCard = Math.floor(state.G.players[playerID as any].cards.length * Math.random());  // https://github.com/babel/minify/issues/904
      const randomCard = (state.G.players[playerID as any].cards.length * Math.random()) << 0;
      return this.makeSelectCardMove(randomCard, playerID);
    } else {
      const deckId = this.getBestDeck(state.G, playerID);
      return this.makeSelectDeckMove(deckId, playerID);
    }
  }

  getBestDeck(G: IG, playerID: string): number {
    const { card, lastCards } = getCards(G, playerID);
    if (card.number < lastCards[0].number) {
      return G.decks
        .map((deck, i) => ({ value: deck.reduce((acc, card) => acc + card.value, 0), id: i }), 0)
        .sort((a, b) => a.value - b.value)[0].id;
    } else {
      return G.decks.findIndex((deck, i) => isAllowedDeck(G, i, playerID));
    }
  }

  makeSelectCardMove(cardId: number, playerID: string) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'selectCard', args: [cardId], playerID } } };
  }

  makeSelectDeckMove(deckId: number, playerID: string) {
    return { action: { type: 'MAKE_MOVE', payload: { type: 'selectDeck', args: [deckId], playerID } } };
  }
}

const config: IAIConfig = {
  bgioAI: () => {
    return {
      bot: TakeSixBot,
    };
  },
};
export default config;
