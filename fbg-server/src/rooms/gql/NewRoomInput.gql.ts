import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewRoomInput {
  gameCode: string;
  capacity: number;
  isPublic: boolean;
}
