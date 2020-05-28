import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int, { nullable: true })
  id?: number;
  nickname: string;
}
