import { Field, ObjectType } from '@nestjs/graphql';
import { RoomMembership } from './RoomMembership.gql';

@ObjectType()
export class Room {
  @Field(() => String, { nullable: true })
  id?: string;

  gameCode: string;
  capacity: number;
  isPublic: boolean;

  @Field(() => String, { nullable: true })
  matchId?: string;

  @Field(() => Number, { nullable: true })
  userId?: number;

  @Field(() => [RoomMembership])
  userMemberships: RoomMembership[];
}
