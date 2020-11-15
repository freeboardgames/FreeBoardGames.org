import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import EditIcon from '@material-ui/icons/Edit';
import { JoinRoom_joinRoom } from 'gqlTypes/JoinRoom';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import css from './ListPlayers.css';

import {
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListSubheader,
  ListItemSecondaryAction,
  Tooltip,
} from '@material-ui/core';
import { GAMES_MAP } from 'games';

interface IListPlayersProps {
  roomMetadata: JoinRoom_joinRoom;
  userId?: number;
  editNickname: () => void;
  removeUser: (userId: number) => () => void;
  changeCapacity: (delta: number) => () => void;
}

export class ListPlayers extends React.Component<IListPlayersProps, {}> {
  render() {
    const metadata = this.props.roomMetadata;
    const occupancy = metadata.userMemberships.length;
    const capacity = metadata.capacity;
    return (
      <div style={{position: 'relative'}}>
        <List subheader={<ListSubheader>Players ({occupancy}/{capacity})</ListSubheader>}>
          <div style={{maxHeight: '309px', overflowY: 'auto'}}>
            {this.renderPlayersList()}
            {this.renderWaitingList()}
          </div>
        </List>
        {this.renderCapacityButtons()}
      </div>
    );
  }

  renderPlayersList() {
    const metadata = this.props.roomMetadata;
    const creator = metadata.userMemberships.find((membership) => membership.isCreator);
    const isCreator = creator?.user.id === this.props.userId;
    return metadata.userMemberships.map((membership, idx: number) => {
      let secondaryAction;
      if (membership.user.id == this.props.userId) {
        secondaryAction = (
          <ListItemSecondaryAction>
            <Tooltip title="Edit nickname" placement="top">
              <Button data-testid="editNickname" onClick={this.props.editNickname}>
                <EditIcon />
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
  }

  renderWaitingList() {
    const metadata = this.props.roomMetadata;
    const occupancy = metadata.userMemberships.length;
    const capacity = metadata.capacity;
    const waitingList = [];
    for (let i = 0; i < capacity - occupancy; i++) {
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
    return waitingList;
  }

  renderCapacityButtons() {
    const metadata = this.props.roomMetadata;
    const occupancy = metadata.userMemberships.length;
    const gameDef = GAMES_MAP[metadata.gameCode];
    const minCapacity = Math.max(gameDef.minPlayers, occupancy);
    const maxCapacity = gameDef.maxPlayers;
    if (minCapacity === maxCapacity) {
      return;
    }
    const capacity = metadata.capacity;
    return (
      <ButtonGroup size="small" className={css.CapacityButtons}>
        <Button onClick={this.props.changeCapacity(-1)} disabled={capacity - 1 < minCapacity}>
          <RemoveIcon />
        </Button>
        <Button onClick={this.props.changeCapacity(+1)} disabled={capacity + 1 > maxCapacity}>
          <AddIcon />
        </Button>
      </ButtonGroup>
    );
  }
}
