import { ObjectType } from '@nestjs/graphql';
import { User } from '../../users/gql/User.gql';

@ObjectType()
export class RoomMembership {
  isCreator: boolean;
  position: number;
  user: User;
}
