import { UserDb } from '../../db/UserDb';
import { User, CheckinResponseStatus, CheckinResponse as NewUserResponse } from '../../../../common/dto/User';
import { UserDeviceDb } from '../../db/UserDeviceDb';

export class UserService {
  public static async newUser(user: User, userDeviceDbEntity: UserDeviceDb): Promise<NewUserResponse> {
    const nickname = user.nickname;
    if (nickname.length < 1 || nickname.length > 12) {
      return { status: CheckinResponseStatus.BadNickname };
    }

    const userDbEntity = new UserDb();
    userDbEntity.nickname = nickname;
    await userDbEntity.save();

    if (userDeviceDbEntity) {
      userDeviceDbEntity.user = userDbEntity;
      await userDeviceDbEntity.save();
    }
    return {
      status: CheckinResponseStatus.Success,
      token: userDeviceDbEntity.token,
    };
  }

  public static async getUserDbEntityFromToken(token: string) {
    const userDevice = await UserDeviceDb.findOne({ where: { token }, relations: ['user'] });
    return userDevice?.user;
  }
}
