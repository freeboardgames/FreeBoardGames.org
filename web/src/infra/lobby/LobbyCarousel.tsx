import React from 'react';
import { Carousel } from 'infra/common/components/carousel/Carousel';
import { GameCardWithOverlay } from './GameCardWithOverlay';
import { gql } from 'apollo-boost';
import { GetLobby } from 'gqlTypes/GetLobby';
import { useQuery } from '@apollo/react-hooks';
import { GAMES_MAP } from 'games';
import { Typography, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { getGroupedRoomsDisplay } from './LobbyUtil';
import { NewRoomModal } from './NewRoomModal';

const LOBBIES_QUERY = gql`
  query GetLobby {
    lobby {
      rooms {
        id
        gameCode
        capacity
        userMemberships {
          isCreator
        }
      }
    }
  }
`;

const LOBBIES_SUBSCRIPTION = gql`
  subscription SubscribeToLobby {
    lobbyMutated {
      rooms {
        id
        gameCode
        capacity
        userMemberships {
          isCreator
        }
      }
    }
  }
`;

interface Props {
  data: GetLobby;
  subscribeToRoomMutations: any;
}

interface State {
  showNewRoomModal: boolean;
}

export class LobbyCarousel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { showNewRoomModal: false };
  }

  componentDidMount() {
    this.props.subscribeToRoomMutations();
  }

  render() {
    const grouped = getGroupedRoomsDisplay(this.props.data.lobby);
    const gameCards = grouped.map((rooms, index) => {
      return (
        <div key={index} style={{ textDecoration: 'none', minWidth: '250px', width: '250px', margin: '8px' }}>
          <GameCardWithOverlay rooms={rooms} game={GAMES_MAP[rooms[0].gameCode]} />
        </div>
      );
    });
    return (
      <>
        {this.state.showNewRoomModal && <NewRoomModal handleClickaway={this._toggleNewRoomModal} />}
        <Typography display="inline" component="h2" variant="h6" style={{ marginBottom: '16px', marginLeft: '6px' }}>
          Play now
        </Typography>
        <Button
          variant="contained"
          color="primary"
          style={{ float: 'right' }}
          startIcon={<AddIcon />}
          onClick={this._toggleNewRoomModal}
        >
          New Room
        </Button>
        <Carousel>{gameCards}</Carousel>
      </>
    );
  }

  _toggleNewRoomModal = () => {
    this.setState((prevState) => ({ ...prevState, showNewRoomModal: !prevState.showNewRoomModal }));
  };
}

export default function LobbyCarouselWithData() {
  const { subscribeToMore, ...result } = useQuery<GetLobby>(LOBBIES_QUERY);
  // if we are connected, render the carousel:
  if (result.data) {
    return (
      <LobbyCarousel
        subscribeToRoomMutations={() => {
          subscribeToMore({
            document: LOBBIES_SUBSCRIPTION,
            updateQuery: (prev, { subscriptionData }) => {
              if (!subscriptionData.data) return prev;
              return Object.assign({}, prev, {
                // FIXME
                lobby: { rooms: (subscriptionData.data as any).lobbyMutated.rooms },
              });
            },
          });
        }}
        data={result.data}
      />
    );
  }
  return null;
}
