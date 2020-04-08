import React from 'react';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import Typography from '@material-ui/core/Typography';
import GamesWithRooms from 'components/Lobby/GamesWithRooms';
import { LobbyService } from 'components/Lobby/LobbyService';
import { Room } from 'dto/Room';

interface Props {
  rooms: Room[];
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
          <GamesWithRooms rooms={this.props.rooms} />
        </div>
      </FreeBoardGamesBar>
    );
  }
  static async getInitialProps() {
    const rooms = await LobbyService.list();
    return { rooms };
  }
}

export default Rooms;
