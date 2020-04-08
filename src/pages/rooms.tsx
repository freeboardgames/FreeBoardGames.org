import React from 'react';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import Typography from '@material-ui/core/Typography';
import RoomCard from 'components/Lobby/RoomCard';
import { GAMES_LIST } from 'games';

class Rooms extends React.Component<{}, {}> {
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
          <div style={{ margin: '0 4px', display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ textDecoration: 'none', flex: 1, minWidth: '300px', maxWidth: '380px', margin: '8px' }}>
              <RoomCard game={GAMES_LIST[0]} capacity={2} players={['Jason']} />
            </div>
            <div style={{ textDecoration: 'none', flex: 1, minWidth: '300px', maxWidth: '380px', margin: '8px' }}>
              <RoomCard game={GAMES_LIST[0]} capacity={2} players={['Jason']} />
            </div>
            <div style={{ textDecoration: 'none', flex: 1, minWidth: '300px', maxWidth: '380px', margin: '8px' }}>
              <RoomCard game={GAMES_LIST[0]} capacity={2} players={['Jason']} />
            </div>
            <div style={{ textDecoration: 'none', flex: 1, minWidth: '300px', maxWidth: '380px', margin: '8px' }}>
              <RoomCard game={GAMES_LIST[0]} capacity={2} players={['Jason']} />
            </div>
            <div style={{ textDecoration: 'none', flex: 1, minWidth: '300px', maxWidth: '380px', margin: '8px' }}>
              <RoomCard game={GAMES_LIST[0]} capacity={2} players={['Jason']} />
            </div>
            <div style={{ textDecoration: 'none', flex: 1, minWidth: '300px', maxWidth: '380px', margin: '8px' }}>
              <RoomCard game={GAMES_LIST[0]} capacity={2} players={['Jason']} />
            </div>
          </div>
        </div>
      </FreeBoardGamesBar>
    );
  }
}

export default Rooms;
