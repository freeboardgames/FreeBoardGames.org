import { Handle } from '../Handle';
import { RoomService } from './services/RoomService';
import express from 'express';

export class GetRoomHandle extends Handle {
  install(app: express.Application) {
    // TODO csrfProtection
    app.get('/api/room/:id', async (req, res) => {
      const id = Number(req.params.id);
      const room = await RoomService.getRoom(id);
      if (!room) {
        res.status(404).send();
        return;
      }
      res.send(room);
    });
  }
}
