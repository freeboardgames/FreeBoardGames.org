import {
  User,
  NewUserResponse,
  NewUserResponseStatus,
  RenameUserResponse,
  RenameUserResponseStatus,
} from '../../../../common/dto/User';
import { UserDb } from '../../db/UserDb';
import { UserDeviceDb } from '../../db/UserDeviceDb';

export class UserService {
  public static async newUser(user: User, userDeviceDbEntity: UserDeviceDb): Promise<NewUserResponse> {
    const nickname = user.nickname;
    if (nickname.length < 1 || nickname.length > 12) {
      return { status: NewUserResponseStatus.BadNickname };
    }

    const userDbEntity = new UserDb();
    userDbEntity.nickname = nickname;
    await userDbEntity.save();

    if (userDeviceDbEntity) {
      userDeviceDbEntity.user = userDbEntity;
      await userDeviceDbEntity.save();
    }
    return {
      status: NewUserResponseStatus.Success,
      token: userDeviceDbEntity.token,
    };
  }

  public static async renameUser(userDbEntity: UserDb, newNickname: string): Promise<RenameUserResponse> {
    if (!this.isNickNameValid(newNickname)) {
      return { status: RenameUserResponseStatus.BadNickname };
    }
    userDbEntity.nickname = newNickname;
    userDbEntity.save();
    return { status: RenameUserResponseStatus.Success };
  }

  public static async getUserDbEntityFromToken(token: string) {
    const userDevice = await UserDeviceDb.findOne({ where: { token }, relations: ['user'] });
    return userDevice?.user;
  }

  private static async isNickNameValid(nickname: string) {
    if (nickname.length < 1 || nickname.length > 12) {
      return false;
    }
    return true;
  }
}
