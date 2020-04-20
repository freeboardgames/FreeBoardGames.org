import { v4 as uuidv4 } from 'uuid';
import { UserDeviceDb } from '../../db/UserDeviceDb';

export class UserDeviceService {
  public static async newDevice(): Promise<UserDeviceDb> {
    const userDeviceDbEntity = new UserDeviceDb();
    const token = uuidv4();
    userDeviceDbEntity.token = token;
    await userDeviceDbEntity.save();
    return userDeviceDbEntity;
  }
}
