import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { JoinRoom_joinRoom } from 'gqlTypes/JoinRoom';

import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction,
  Tooltip,
} from '@material-ui/core';

interface IListPlayersProps {
  roomMetadata: JoinRoom_joinRoom;
  userId?: number;
  editNickname: () => void;
  leaveRoom: () => void;
  removeUser: (userId: number) => () => void;
}

export class ListPlayers extends React.Component<IListPlayersProps, {}> {
  render() {
    const metadata = this.props.roomMetadata;
    const creator = metadata.userMemberships.find((membership) => membership.isCreator);
    const isCreator = creator?.user.id === this.props.userId;
    const playersList = metadata.userMemberships.map((membership, idx: number) => {
      let secondaryAction;
      if (membership.user.id == this.props.userId) {
        secondaryAction = (
          <ListItemSecondaryAction>
            <Tooltip title="Edit nickname" placement="top">
              <Button data-testid="editNickname" onClick={this.props.editNickname}>
                <EditIcon />
              </Button>
            </Tooltip>
            <Tooltip title="Leave room" placement="top">
              <Button data-testid="leaveRoom" onClick={this.props.leaveRoom}>
                <ExitToAppIcon />
              </Button>
            </Tooltip>
          </ListItemSecondaryAction>
        );
      } else if (isCreator) {
        secondaryAction = (
          <ListItemSecondaryAction>
            <Tooltip title="Remove user" placement="top">
              <Button data-testid="removeUser" onClick={this.props.removeUser(membership.user.id)}>
                <RemoveCircleIcon />
              </Button>
            </Tooltip>
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
