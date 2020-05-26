import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/gql/User.gql';

@ObjectType()
export class RoomMembership {
  @Field((type) => Boolean)
  isCreator: boolean;

  @Field((type) => User)
  user: User;
}
