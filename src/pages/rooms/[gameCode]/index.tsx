import React from 'react';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import Typography from '@material-ui/core/Typography';
import RoomCard from 'components/Lobby/RoomCard';
import RoomList from 'components/Lobby/RoomList';
import { LobbyService } from 'components/Lobby/LobbyService';
import { Room } from 'dto/Room';
import { GAMES_MAP, IGameDef } from 'games';
import { generatePageError } from 'next-with-error';

interface Props {
  rooms: Room[];
  showGameFirst: IGameDef;
}

class Rooms extends React.Component<Props, {}> {
  render() {
    return (
      <FreeBoardGamesBar FEATURE_FLAG_readyForDesktopView>
        <div style={{ marginBottom: '16px' }}>
          <Typography
            component="h2"
            variant="h6"
            style={{ marginBottom: '24px', marginTop: '24px', marginLeft: '6px' }}
          >
            Rooms
          </Typography>
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
            <RoomList showGameFirst={this.props.showGameFirst} rooms={this.props.rooms} />
          </div>
        </div>
      </FreeBoardGamesBar>
    );
  }
  static async getInitialProps({ query, res }) {
    const gameCode = query.gameCode as string;
    const gameDef: IGameDef = GAMES_MAP[gameCode];
    if (!gameDef && res) {
      return generatePageError(404);
    }
    const rooms = await LobbyService.list();
    return { rooms, showGameFirst: gameDef };
  }
}

export default Rooms;
