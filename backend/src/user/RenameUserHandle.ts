import { Handle } from '../Handle';
import { UserService } from './services/UserService';
import express from 'express';

export class RenameUserHandle extends Handle {
  install(app: express.Application) {
    app.post('/api/users/rename', async (req, res) => {
      const { token, newNickname } = req.body;
      if (!newNickname) {
        res.status(400).send();
        return;
      }
      const userDbEntity = await UserService.getUserDbEntityFromToken(token);
      if (!token || !userDbEntity) {
        res.status(401).send();
        return;
      }
      const newUserResponse = await UserService.renameUser(userDbEntity, newNickname);
      res.send(newUserResponse);
    });
  }
}
