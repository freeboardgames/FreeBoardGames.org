import { v4 as uuidv4 } from 'uuid';
import { UserDeviceDbEntity } from '../entities/UserDevice';

export class UserDeviceService {
  public static async newDevice(): Promise<UserDeviceDbEntity> {
    // TODO(JasonHarrison) are we checking for dups?
    // const existingNickname = (await UserDbEntity.count({ where: { nickname: user.nickname } })) > 0;
    // if (existingNickname) {
    //   return { result: CheckinResponseStatus.NicknameInUse };
    // }
    const userDeviceDbEntity = new UserDeviceDbEntity();
    const token = uuidv4();
    userDeviceDbEntity.token = token;
    await userDeviceDbEntity.save();
    return userDeviceDbEntity;
  }

  // public static async getUserFromToken(token: string) {
  //   const user = await UserDbEntity.findOne({ where: { token } });
  //   if (!user) {
  //     return undefined;
  //   }
  //   const userDto: User = { nickname: user.nickname, rooms: user.rooms };
  // }
}
