import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditIcon from '@material-ui/icons/Edit';
import { IRoomMetadata, IPlayerInRoom } from './LobbyService';
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction,
} from '@material-ui/core';

interface IListPlayersProps {
  roomMetadata: IRoomMetadata;
  editNickname: () => void;
}

export class ListPlayers extends React.Component<IListPlayersProps, {}> {
  render() {
    const metadata = this.props.roomMetadata;
    const playersList = metadata.players.map((player: IPlayerInRoom, idx: number) => {
      return (
        <ListItem key={`player-${idx}`}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={player.name} />
          <ListItemSecondaryAction>
            <Button data-testid="editNickname" onClick={this.props.editNickname}>
              <EditIcon />
            </Button>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });
    const waitingList = [];
    for (let i = 0; i < metadata.numberOfPlayers - playersList.length; i++) {
      waitingList.push(
        <ListItem key={`waiting-${i}`}>
          <ListItemAvatar>
            <Avatar>
              <AccessTimeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText>
            <b>Waiting for player...</b>
          </ListItemText>
        </ListItem>,
      );
    }
    return (
      <div>
        <List subheader={<ListSubheader>Players</ListSubheader>}>
          {playersList}
          {waitingList}
        </List>
      </div>
    );
  }
}
