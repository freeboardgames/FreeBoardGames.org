import { Field, Int, ObjectType } from '@nestjs/graphql';
import { RoomMembership } from './RoomMembership.gql';

@ObjectType()
export class Room {
  @Field((type) => Int, { nullable: true })
  id?: number;

  @Field((type) => String)
  gameCode: string;

  @Field((type) => Int)
  capacity: number;

  @Field((type) => Boolean)
  isPublic: boolean;

  @Field((type) => String, { nullable: true })
  matchId?: string;

  @Field((type) => Number, { nullable: true })
  userId?: number;

  @Field((type) => [RoomMembership])
  userMemberships: RoomMembership[];
}
