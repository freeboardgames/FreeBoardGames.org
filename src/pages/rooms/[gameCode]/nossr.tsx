import React from 'react';
import FreeBoardGamesBar from 'components/App/FreeBoardGamesBar';
import Typography from '@material-ui/core/Typography';
import GamesWithRooms from 'components/Lobby/GamesWithRooms';
import { LobbyService } from 'components/Lobby/LobbyService';
import { Room } from 'dto/Room';
import { withRouter } from 'next/router';
import MessagePage from 'components/App/MessagePageClass';
import TryAgainReloadButton from 'components/App/TryAgainReloadButton';

interface Props {
  router: any;
}

interface State {
  rooms: Room[];
  error: boolean;
}

class Rooms extends React.Component<Props, State> {
  state = { rooms: [], error: false };
  render() {
    if (this.state.error)
      return (
        <MessagePage message={'Failed to load rooms.'} type={'error'} actionComponent={<TryAgainReloadButton />} />
      );
    const gameCode = this.props.router.query.gameCode;
    return (
      <FreeBoardGamesBar FEATURE_FLAG_readyForDesktopView nicknameRequired>
        <div style={{ marginBottom: '16px' }}>
          <Typography
            component="h2"
            variant="h6"
            style={{ marginBottom: '24px', marginTop: '24px', marginLeft: '6px' }}
          >
            Rooms
          </Typography>
          <GamesWithRooms wantGameCode={gameCode} rooms={this.state.rooms} />
        </div>
      </FreeBoardGamesBar>
    );
  }

  async componentDidMount() {
    try {
      const rooms = await LobbyService.list();
      this.setState((oldState) => ({ ...oldState, rooms }));
    } catch (e) {
      this.setState((oldState) => ({ ...oldState, error: true }));
    }
  }
}

export default withRouter(Rooms as any);
