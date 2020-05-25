import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field((type) => Int, { nullable: true })
  id?: number;

  @Field((type) => String, { nullable: false })
  nickname: string;

  @Field((type) => String, { nullable: true })
  jwtToken?: string;
}
