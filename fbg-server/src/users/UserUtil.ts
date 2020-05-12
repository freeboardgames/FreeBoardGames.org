import { UserEntity } from './db/User.entity';
import { User } from '../dto/users/User';

export function userEntityToUser(userEntity: UserEntity): User {
  return { id: userEntity.id, nickname: userEntity.nickname };
}
