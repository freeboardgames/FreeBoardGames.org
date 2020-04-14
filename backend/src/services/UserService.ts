import { UserDbEntity, User } from '../entities/User';
import { v4 as uuidv4 } from 'uuid';

export class UserService {
  public static async checkIn(user: User): Promise<CheckinResponse> {
    const existingNickname = (await UserDbEntity.count({ where: { nickname: user.nickname } })) > 0;
    if (existingNickname) {
      return { result: CheckinResponseStatus.NicknameInUse };
    }
    const userDbEntity = new UserDbEntity();
    userDbEntity.nickname = user.nickname;
    const credential = uuidv4();
    userDbEntity.credential = credential;
    await userDbEntity.save();
    return { result: CheckinResponseStatus.Success, credential };
  }
}

export interface CheckinResponse {
  result: CheckinResponseStatus;
  credential?: string;
}

export enum CheckinResponseStatus {
  Success = 'success',
  NicknameInUse = 'nicknameinuse',
}
