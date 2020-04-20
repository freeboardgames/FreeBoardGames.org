import { Handle } from '../Handle';
import { User } from '../../../common/dto/User';
import { UserDeviceService } from './services/UserDeviceService';
import { UserService } from './services/UserService';
import express from 'express';

export class UserHandle extends Handle {
  install(app: express.Application) {
    app.post('/api/users', async (req, res) => {
      const { nickname } = req.body;
      if (!nickname) {
        res.status(400).send();
        return;
      }
      const userDto: User = { nickname };
      // create new userdevice
      const userDevice = await UserDeviceService.newDevice();

      // create new user
      const newUserResponse = await UserService.newUser(userDto, userDevice);
      res.send(newUserResponse);
    });
  }
}
