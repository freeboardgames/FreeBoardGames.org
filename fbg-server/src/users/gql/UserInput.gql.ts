import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field((type) => String)
  nickname: string;
}
