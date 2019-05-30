import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { IRoomMetadata, IPlayerInRoom } from './LobbyService';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, ListSubheader } from '@material-ui/core';

interface IListPlayersProps {
  roomMetadata: IRoomMetadata;
}

export class ListPlayers extends React.Component<IListPlayersProps, {}> {
  render() {
    const playersList = this.props.roomMetadata.players.map((player: IPlayerInRoom, idx: number) => {
      return (
        <ListItem key={`player-${idx}`}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={player.name} />
        </ListItem>
      );
    });
    const waitingList = [];
    for (let i = 0; i < this.props.roomMetadata.numberOfPlayers - playersList.length; i++) {
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
