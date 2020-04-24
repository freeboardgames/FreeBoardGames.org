import { Handle } from '../Handle';
import { RoomService } from './services/RoomService';
import express from 'express';
import { UserService } from '../user/services/UserService';
import { Room } from '../../../common/dto/Room';

/** returns room information, and also serves as a check-in/keepalive for players */
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
      // join the room if it is not full, and the user is not already in it
      if (roomDbEntity.users.length < roomDbEntity.capacity) {
        const userInRoom = await RoomService.isUserInRoom(roomDbEntity, userDbEntity);
        if (!userInRoom) {
          await RoomService.joinRoom(roomDbEntity, userDbEntity);
        }
      }
      const room: Room = { ...roomDbEntity, currentUserId: userDbEntity.id };
      res.send(room);
    });
  }
}
