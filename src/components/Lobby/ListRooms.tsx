import React from 'react';
import { List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import { Room } from 'dto/Room';

interface Props {
  rooms: Room[];
}

export class ListRooms extends React.Component<Props, {}> {
  render() {
    const rooms = this.props.rooms;
    const roomsList = rooms.map((room: Room, idx: number) => {
      return (
        <ListItem button key={`room-${idx}`}>
          <ListItemText
            style={{ marginLeft: '16px' }}
            primary={`Room #${idx + 1}`}
            secondary={`${room.users.length}/${room.capacity}`}
          />
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
