import { Handle } from '../Handle';
import { UserService } from '../user/services/UserService';
import { Room } from '../../../common/dto/Room';
import { RoomService } from './services/RoomService';
import express from 'express';

export class NewRoomHandler extends Handle {
  install(app: express.Application) {
    app.post('/api/rooms', async (req, res) => {
      const { gameCode, capacity, unlisted, token } = req.body;
      if (!gameCode || !capacity || !token || typeof unlisted === 'undefined') {
        res.status(400).send();
        return;
      }
      const userDbEntity = await UserService.getUserDbEntityFromToken(token);
      if (!userDbEntity) {
        res.status(401).send();
        return;
      }
      const roomDto: Room = { gameCode, capacity, unlisted };
      const room = await RoomService.newRoom(userDbEntity, roomDto);
      res.send(room);
    });
  }
}
