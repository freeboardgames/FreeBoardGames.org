import { Handle } from '../Handle';
import { RoomService } from './services/RoomService';
import express from 'express';
import { UserService } from '../user/services/UserService';
import { Room } from '../../../common/dto/Room';

export class GetRoomHandle extends Handle {
  install(app: express.Application) {
    // TODO csrfProtection
    app.post('/api/room/:id', async (req, res) => {
      const { token } = req.body;
      const userDbEntity = await UserService.getUserDbEntityFromToken(token);
      if (!token || !userDbEntity) {
        res.status(401).send();
        return;
      }
      const id = Number(req.params.id);
      const roomDbEntity = await RoomService.getRoom(id);
      if (!roomDbEntity) {
        res.status(404).send();
        return;
      }
      const room: Room = { ...roomDbEntity, currentUser: userDbEntity };
      res.send(room);
    });
  }
}
