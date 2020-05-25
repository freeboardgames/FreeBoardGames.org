import { InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  nickname: string;
}
