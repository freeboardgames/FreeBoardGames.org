import { Field, ObjectType } from '@nestjs/graphql';
import { Room } from './Room.gql';

@ObjectType()
export class Lobby {
  @Field((type) => [Room])
  rooms: Room[];
}
