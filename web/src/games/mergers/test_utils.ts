import { Game } from 'boardgame.io';
import { Client } from 'boardgame.io/client';
import { Local } from 'boardgame.io/multiplayer';
import { Hotels } from './hotels';
import { Hotel, IG } from './types';

export interface MergersScenarioConfig {
  phase?: string;
  stage?: string;
  hotels?: Hotel[][];
}

/**
 * Facilitates setting up a test grid, by:
 *
 * - Filling in IDs based on hotel position
 * - Setting any hotels with chains as "hasBeenPlaced"
 */
export function fillInTestHotels(hotels: Hotel[][]): Hotel[][] {
  for (let r = 0; r < hotels.length; r++) {
    for (let c = 0; c < hotels[r].length; c++) {
      const hotel = hotels[r][c];
      hotel.id = `${c + 1}-${Hotels.rowToLetter(r)}`;
      if (hotel.chain) {
        hotel.hasBeenPlaced = true;
      }
    }
  }
  return hotels;
}

/** Get clients for a multiplayer test, and start them, with an optional setup function */
export function getMultiplayerTestClients(numPlayers: number = 2, scenario: Game<IG>) {
  const spec = {
    game: scenario,
    multiplayer: Local(),
    numPlayers,
  };

  const clients = [];
  for (let i = 0; i < numPlayers; i++) {
    clients.push(
      Client({
        ...spec,
        playerID: `${i}`,
      }),
    );
  }

  clients.forEach((client) => {
    client.start();
  });

  return clients;
}
