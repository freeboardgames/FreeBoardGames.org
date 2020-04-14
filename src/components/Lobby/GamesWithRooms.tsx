import React from 'react';
import LobbyGameCard from 'components/Lobby/LobbyGameCard';
import { Room } from 'entities/Room';
import { GAMES_MAP } from 'games';

const CARD_STYLE = {
  textDecoration: 'none',
  flex: 1,
  minWidth: '370px',
  maxWidth: '375px',
  margin: '8px',
};

interface Props {
  rooms: Room[];
  wantGameCode?: string;
}

class GamesWithRooms extends React.Component<Props, {}> {
  render() {
    const gamesWithRooms = this._getGamesWithRooms();

    // if our user selected a game, show that first:
    let cardsForWantedGame: JSX.Element[] = [];
    let otherCards: JSX.Element[] = [];
    gamesWithRooms.forEach((gameCode, idx) => {
      if (this.props.wantGameCode === gameCode) {
        cardsForWantedGame.push(
          <div key={`gwr-${idx}`} style={CARD_STYLE}>
            <LobbyGameCard game={GAMES_MAP[gameCode]} rooms={this._roomsForGame(gameCode)} />
          </div>,
        );
      } else {
        otherCards.push(
          <div key={`gwr-${idx}`} style={CARD_STYLE}>
            <LobbyGameCard game={GAMES_MAP[gameCode]} rooms={this._roomsForGame(gameCode)} />
          </div>,
        );
      }
    });
    const cards = cardsForWantedGame.concat(otherCards);
    return (
      <div
        style={{
          margin: '0 4px',
          display: 'flex',
          flexWrap: 'wrap',
          // TODO: Do we want to center the rooms?
          // alignItems: 'center',
          // justifyContent: 'center',
        }}
      >
        {cards}
      </div>
    );
  }

  _roomsForGame = (gameCode: string) => {
    return this.props.rooms.filter((room) => room.gameCode === gameCode);
  };

  _getGamesWithRooms = () => {
    const gameCodes = [];
    for (const room of this.props.rooms) {
      if (room.users.length > 0 && !gameCodes.includes(room.gameCode)) {
        gameCodes.push(room.gameCode);
      }
    }
    return gameCodes;
  };
}

export default GamesWithRooms;
