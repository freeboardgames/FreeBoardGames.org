import React from 'react';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import Typography from '@material-ui/core/Typography';
import RoomCard from 'components/Lobby/RoomCard';
import { LobbyService } from 'components/Lobby/LobbyService';
import { Room } from 'dto/Room';
import { GAMES_MAP, IGameDef } from 'games';

const MIN_CARD_WIDTH = '370px';
const MAX_CARD_WIDTH = '375px';

interface Props {
  rooms: Room[];
  showGameFirst?: IGameDef;
}

class RoomList extends React.Component<Props, {}> {
  render() {
    const roomList = this.props.rooms.map((room, idx) => (
      <div
        key={idx}
        style={{
          textDecoration: 'none',
          flex: 1,
          minWidth: MIN_CARD_WIDTH,
          maxWidth: MAX_CARD_WIDTH,
          margin: '8px',
        }}
      >
        <RoomCard room={room} />
      </div>
    ));
    return roomList;
    // return (
    //   <FreeBoardGamesBar FEATURE_FLAG_readyForDesktopView>
    //     <div style={{ marginBottom: '16px' }}>
    //       <Typography
    //         component="h2"
    //         variant="h6"
    //         style={{ marginBottom: '24px', marginTop: '24px', marginLeft: '6px' }}
    //       >
    //         Rooms
    //       </Typography>
    //       <div
    //         style={{
    //           margin: '0 4px',
    //           display: 'flex',
    //           flexWrap: 'wrap',
    //           // TODO: Do we want to center the rooms?
    //           // alignItems: 'center',
    //           // justifyContent: 'center',
    //         }}
    //       >
    //         {roomList}
    //       </div>
    //     </div>
    //   </FreeBoardGamesBar>
    // );
  }
}

export default RoomList;
