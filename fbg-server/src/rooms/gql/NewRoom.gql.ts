import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NewRoom {
  @Field((type) => String)
  roomId: string;
}
