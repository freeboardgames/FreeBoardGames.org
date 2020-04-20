import { Handle } from '../Handle';
import { RoomService } from './services/RoomService';
import express from 'express';

export class ListRoomsHandle extends Handle {
  install(app: express.Application) {
    app.get('/api/rooms', this.csrfProtection, async (_req, res) => {
      const rooms = await RoomService.listRooms();
      res.send(rooms);
    });
  }
}
