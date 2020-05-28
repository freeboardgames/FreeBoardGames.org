import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RoomMembership } from './RoomMembership.gql';

@ObjectType()
export class Room {
  @Field((type) => Int, { nullable: true })
  id?: number;

  gameCode: string;
  capacity: number;
  isPublic: boolean;

  @Field((type) => String, { nullable: true })
  matchId?: string;

  @Field((type) => Number, { nullable: true })
  userId?: number;

  @Field((type) => [RoomMembership])
  userMemberships: RoomMembership[];
}
