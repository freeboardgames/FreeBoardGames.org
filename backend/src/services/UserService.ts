import { UserDbEntity } from '../entities/User';
import { v4 as uuidv4 } from 'uuid';
import { User, CheckinResponseStatus, CheckinResponse as NewUserResponse } from '../../../common/dto/User';
import { UserDevice, UserDeviceDbEntity } from '../entities/UserDevice';

export class UserService {
  public static async newUser(user: User, userDeviceDbEntity: UserDeviceDbEntity): Promise<NewUserResponse> {
    // TODO(JasonHarrison) are we checking for dups?
    // const existingNickname = (await UserDbEntity.count({ where: { nickname: user.nickname } })) > 0;
    // if (existingNickname) {
    //   return { result: CheckinResponseStatus.NicknameInUse };
    // }
    const nickname = user.nickname;
    if (nickname.length < 1 || nickname.length > 12) {
      return { status: CheckinResponseStatus.BadNickname };
    }

    const userDbEntity = new UserDbEntity();
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
    const user = await UserDbEntity.findOne({ where: { token } });
    return user;
    // const userDto: User = {
    //   id: user.id,
    //   nickname: user.nickname,
    //   rooms: user.rooms,
    // };
    // return userDto;
  }
}
