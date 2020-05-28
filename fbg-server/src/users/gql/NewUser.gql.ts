import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NewUser {
  jwtToken: string;
}
