import { Client } from 'boardgame.io/client';
import { ECardState } from './definations';
import { MemoryMatchGame } from './game';

let client;

describe('Memory Match Game Rules', () => {
  beforeEach(() => {
    client = Client({
      game: { ...MemoryMatchGame },
    }) as any;
  });

  it('should not change turn when one card is clicked', () => {
    const startPlayer = client.getState().ctx.currentPlayer;
    client.moves.cardClicked(0);
    const { currentPlayer } = client.getState().ctx;
    expect(startPlayer).toEqual(currentPlayer);
  });

  it('should not change turn when two same cards are clicked', () => {
    const startPlayer = client.getState().ctx.currentPlayer;
    expect(startPlayer).toEqual('0');
    const { cards } = client.getState().G;
    client.moves.cardClicked(cards[0].id);
    const sameCard = cards.filter((c) => c.name === cards[0].name && c.id !== cards[0].id)[0];
    client.moves.cardClicked(sameCard.id);
    expect(client.getState().ctx.currentPlayer).toEqual('0');
  });

  it('should change turn when two different cards are clicked', () => {
    const startPlayer = client.getState().ctx.currentPlayer;
    expect(startPlayer).toEqual('0');
    const { cards } = client.getState().G;
    const aCard = cards.filter((c) => c.name !== cards[0].name)[0];
    client.moves.cardClicked(aCard.id);
    const bCard = cards.filter((c) => c.name !== aCard.name && c.name !== cards[0].name)[0];
    client.moves.cardClicked(bCard.id);
    client.moves.hideShownCards();
    expect(client.getState().ctx.currentPlayer).toEqual('1');
  });

  it('should hide all SHOWn cards', () => {
    let { cards } = client.getState().G;
    client.moves.cardClicked(cards[0].id);
    if (cards[0].name !== cards[1].name) {
      client.moves.cardClicked(cards[1].id);
    } else {
      client.moves.cardClicked(cards[2].id);
    }
    cards = client.getState().G.cards;
    expect(cards[0].state).toEqual(ECardState.SHOWN);
    client.moves.hideShownCards();
    cards = client.getState().G.cards;
    expect(cards[0].state).toEqual(ECardState.HIDDEN);
  });

  it('should declare draw when equal images are found', () => {
    let { cards } = client.getState().G;
    let cardNames = new Set(cards.map((c) => c.name));
    let counter = cardNames.size;
    let total = 0;
    cardNames.forEach((cName) => {
      total += 1;
      const namedCards = cards.filter((c) => c.name === cName);
      client.moves.cardClicked(namedCards[0].id);
      client.moves.cardClicked(namedCards[1].id);
      if (total < counter) {
        const aCard = cards.filter((c) => c.name !== namedCards[0].name)[0];
        client.moves.cardClicked(aCard.id);
        const bCard = cards.filter((c) => c.name !== namedCards[0].name && c.name !== aCard.name)[0];
        client.moves.cardClicked(bCard.id);
        client.moves.hideShownCards();
      }
    });
    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ draw: true });
  });

  it('should declare player 1 as the winner', () => {
    let { cards } = client.getState().G;
    let cardNames = Array.from(new Set(cards.map((c) => c.name)));
    const aCards = cards.filter((c) => c.name === cardNames[0]);
    client.moves.cardClicked(aCards[0].id);
    client.moves.cardClicked(aCards[1].id);
    const bCards = cards.filter((c) => c.name === cardNames[1]);
    const cCards = cards.filter((c) => c.name === cardNames[2]);
    client.moves.cardClicked(bCards[0].id);
    client.moves.cardClicked(cCards[0].id);
    client.moves.hideShownCards();
    cardNames.shift();
    cardNames.forEach((cName) => {
      const namedCards = cards.filter((c) => c.name === cName);
      client.moves.cardClicked(namedCards[0].id);
      client.moves.cardClicked(namedCards[1].id);
    });
    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ winner: '1' });
  });
});
