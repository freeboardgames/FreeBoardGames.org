import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/gql/User.gql';

@ObjectType()
export class RoomMembership {
  isCreator: boolean;
  user: User;
}
