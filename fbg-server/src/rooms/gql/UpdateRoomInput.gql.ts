import { InputType } from '@nestjs/graphql';

@InputType()
export class UpdateRoomInput {
  roomId: string;
  gameCode: string;
  capacity: number;
}
