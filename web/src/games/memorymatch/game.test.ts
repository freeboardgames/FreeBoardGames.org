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

  it('should change turn when two same cards are clicked', () => {
    const startPlayer = client.getState().ctx.currentPlayer;
    const { cards } = client.getState().G;
    client.moves.cardClicked(cards[0].id);
    const sameCard = cards.filter((c) => c.name === cards[0].name && c.id !== cards[0].id)[0];
    client.moves.cardClicked(sameCard.id);
    expect(startPlayer).toEqual('0');
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
    cardNames.forEach((cName) => {
      const namedCards = cards.filter((c) => c.name === cName);
      client.moves.cardClicked(namedCards[0].id);
      client.moves.cardClicked(namedCards[1].id);
    });
    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ draw: true });
  });

  it('should declare player 1 as the winner', () => {
    let { cards } = client.getState().G;
    let cardNames = Array.from(new Set(cards.map((c) => c.name)));
    // remove first and third try and add it end
    cardNames.push(cardNames[0]);
    cardNames.push(cardNames[2]);
    cardNames[0] = '_skip_';
    cardNames[2] = '_skip_';
    // click matching paris and skip where necessary
    cardNames.forEach((cName) => {
      if (cName === '_skip_') {
        // make fake call to hide-cards to change turn
        client.moves.hideShownCards();
      } else {
        const namedCards = cards.filter((c) => c.name === cName);
        client.moves.cardClicked(namedCards[0].id);
        client.moves.cardClicked(namedCards[1].id);
      }
    });
    const { ctx } = client.getState();
    expect(ctx.gameover).toEqual({ winner: '1' });
  });
});
