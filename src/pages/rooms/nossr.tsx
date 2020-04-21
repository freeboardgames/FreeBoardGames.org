import React from 'react';
import { LobbyService } from 'components/Lobby/LobbyService';
import { Room } from 'dto/Room';
import MessagePage from 'components/App/MessagePageClass';
import TryAgainReloadButton from 'components/App/TryAgainReloadButton';
import { RoomsPage } from 'components/Lobby/RoomsPage';

interface State {
  rooms: Room[];
  error: boolean;
}

class Rooms extends React.Component<{}, State> {
  state = { rooms: [], error: false };
  render() {
    if (this.state.error)
      return (
        <MessagePage message={'Failed to load rooms.'} type={'error'} actionComponent={<TryAgainReloadButton />} />
      );
    return <RoomsPage rooms={this.state.rooms} />;
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

export default Rooms;
