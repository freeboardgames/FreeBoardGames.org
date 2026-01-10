import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import EditIcon from '@mui/icons-material/Edit';
import { JoinRoomMutation } from 'gqlTypes/generated';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { isCreator } from './RoomMetadataHelper';

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
} from '@mui/material';
import { getGameDefinition } from 'infra/game';
import { withTranslation, WithTranslation } from 'infra/i18n';
import { compose } from 'recompose';

interface IListPlayersInnerProps extends WithTranslation {}

interface IListPlayersOutterProps {
  roomMetadata: JoinRoomMutation['joinRoom'];
  userId?: number;
  editNickname: () => void;
  shuffleUsers: () => () => void;
  moveUpUser: (userId: number) => () => void;
  removeUser: (userId: number) => () => void;
  changeCapacity: (delta: number) => () => void;
}

const enhance = compose<IListPlayersInnerProps, IListPlayersOutterProps>(withTranslation('ListPlayers'));

export const ListPlayers = enhance(
  class ListPlayers extends React.Component<IListPlayersInnerProps & IListPlayersOutterProps, {}> {
    render() {
      const { t } = this.props;
      const metadata = this.props.roomMetadata;
      const occupancy = metadata.userMemberships.length;
      const capacity = metadata.capacity;
      return (
        <div style={{ position: 'relative' }}>
          <List subheader={<ListSubheader>{t('players', { occupancy, capacity })}</ListSubheader>}>
            <div style={{ maxHeight: '309px', overflowY: 'auto' }}>
              {this.renderPlayersList()}
              {this.renderWaitingList()}
            </div>
          </List>
          {this.renderCapacityButtons()}
        </div>
      );
    }

    renderPlayersList() {
      const { t, roomMetadata: metadata } = this.props;
      const currentUserIsCreator = isCreator(metadata, this.props.userId);
      metadata.userMemberships.sort((m1, m2) => m1.position - m2.position);

      return metadata.userMemberships.map((membership, idx: number) => {
        let secondaryAction;
        let moveUpButton;
        if (idx > 0 && currentUserIsCreator) {
          moveUpButton = (
            <Tooltip title={t('move_up_user')} placement="top">
              <Button data-testid="moveUpUser" onClick={this.props.moveUpUser(membership.user.id)}>
                <ArrowUpwardIcon />
              </Button>
            </Tooltip>
          );
        }
        if (membership.user.id == this.props.userId) {
          secondaryAction = (
            <ListItemSecondaryAction>
              {moveUpButton}
              <Tooltip title={t('edit_nickname')} placement="top">
                <Button data-testid="editNickname" onClick={this.props.editNickname}>
                  <EditIcon />
                </Button>
              </Tooltip>
            </ListItemSecondaryAction>
          );
        } else if (currentUserIsCreator) {
          secondaryAction = (
            <ListItemSecondaryAction>
              {moveUpButton}
              <Tooltip title={t('remove_user')} placement="top">
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
      const { t } = this.props;
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
              <b>{t('waiting_for_player')}</b>
            </ListItemText>
          </ListItem>,
        );
      }
      return waitingList;
    }

    renderCapacityButtons() {
      const t = this.props.t;
      const metadata = this.props.roomMetadata;
      let allDisabled = false;
      if (!isCreator(metadata, this.props.userId)) {
        allDisabled = true;
      }
      const occupancy = metadata.userMemberships.length;
      const gameDef = getGameDefinition(metadata.gameCode);
      const minCapacity = Math.max(gameDef.minPlayers, occupancy);
      const maxCapacity = gameDef.maxPlayers;
      const capacity = metadata.capacity;
      let shuffleButton;
      if (isCreator(metadata, this.props.userId)) {
        shuffleButton = (
          <Tooltip title={t('shuffle_users')} placement="top">
            <Button data-testid="shuffleUsers" onClick={this.props.shuffleUsers()}>
              <ShuffleIcon />
            </Button>
          </Tooltip>
        );
      }
      return (
        <ButtonGroup size="small" style={{ top: '8px', right: '8px', position: 'absolute', zIndex: 10 }}>
          {shuffleButton}
          <Button onClick={this.props.changeCapacity(-1)} disabled={allDisabled || capacity - 1 < minCapacity}>
            <RemoveIcon />
          </Button>
          <Button onClick={this.props.changeCapacity(+1)} disabled={allDisabled || capacity + 1 > maxCapacity}>
            <AddIcon />
          </Button>
        </ButtonGroup>
      );
    }
  },
);
