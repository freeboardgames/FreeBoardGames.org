import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RoomInput {
  @Field((type) => String)
  gameCode: string;

  @Field((type) => Number)
  capacity: number;

  @Field((type) => Boolean)
  isPublic: boolean;
}
