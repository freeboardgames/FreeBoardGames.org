import React from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { List, ListItem, ListItemText, ListSubheader, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Room } from 'dto/Room';

interface Props {
  rooms: Room[];
}

export class ListRooms extends React.Component<Props, {}> {
  render() {
    const rooms = this.props.rooms;
    const roomsList = rooms.map((room: Room, idx: number) => {
      const icon = room.users.length === room.capacity ? <VisibilityIcon /> : <NavigateNextIcon />;
      return (
        <ListItem button key={`room-${idx}`}>
          <ListItemText
            style={{ marginLeft: '16px' }}
            primary={`Room #${idx + 1}`}
            secondary={`${room.users.length}/${room.capacity}`}
          />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete">
              {icon}
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      );
    });

    return (
      <div>
        <List subheader={<ListSubheader>Rooms</ListSubheader>}>{roomsList}</List>
      </div>
    );
  }
}
