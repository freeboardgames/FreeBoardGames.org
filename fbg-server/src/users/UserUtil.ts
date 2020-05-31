import { UserEntity } from './db/User.entity';
import { User } from './gql/User.gql';

export function userEntityToUser(userEntity: UserEntity): User {
  return { id: userEntity.id, nickname: userEntity.nickname };
}
