import React from 'react';
import LobbyGameCard from 'components/Lobby/LobbyGameCard';
import { Room } from 'dto/Room';
import { GAMES_MAP } from 'games';

const MIN_CARD_WIDTH = '370px';
const MAX_CARD_WIDTH = '375px';

interface Props {
  rooms: Room[];
}

class GamesWithRooms extends React.Component<Props, {}> {
  render() {
    const gamesWithRooms = this._getGamesWithRooms();
    const cards = gamesWithRooms.map((gameCode, idx) => (
      <div
        key={`gwr-${idx}`}
        style={{
          textDecoration: 'none',
          flex: 1,
          minWidth: MIN_CARD_WIDTH,
          maxWidth: MAX_CARD_WIDTH,
          margin: '8px',
        }}
      >
        <LobbyGameCard game={GAMES_MAP[gameCode]} rooms={this._roomsForGame(gameCode)} />
      </div>
    ));
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
      if (room.players.length > 0 && !gameCodes.includes(room.gameCode)) {
        gameCodes.push(room.gameCode);
      }
    }
    return gameCodes;
  };
}

export default GamesWithRooms;
