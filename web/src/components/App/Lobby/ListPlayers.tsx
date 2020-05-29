import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EditIcon from '@material-ui/icons/Edit';
import { CheckinRoom_checkinRoom } from 'gqlTypes/CheckinRoom';

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
  roomMetadata: CheckinRoom_checkinRoom;
  userId?: number;
  editNickname: () => void;
}

export class ListPlayers extends React.Component<IListPlayersProps, {}> {
  render() {
    const metadata = this.props.roomMetadata;
    const playersList = metadata.userMemberships.map((membership, idx: number) => {
      let secondaryAction;
      if (membership.user.id == this.props.userId) {
        secondaryAction = (
          <ListItemSecondaryAction>
            <Button data-testid="editNickname" onClick={this.props.editNickname}>
              <EditIcon />
            </Button>
          </ListItemSecondaryAction>
        );
      }
      return (
        <ListItem key={`player-${idx}`}>
          <ListItemAvatar>
            <Avatar>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={membership.user.nickname} />
          {secondaryAction}
        </ListItem>
      );
    });
    const waitingList = [];
    for (let i = 0; i < metadata.capacity - metadata.userMemberships.length; i++) {
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
