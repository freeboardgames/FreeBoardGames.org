import { InputType } from '@nestjs/graphql';

@InputType()
export class NewUserInput {
  nickname: string;
}
