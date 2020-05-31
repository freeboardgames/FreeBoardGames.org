import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { Room } from './gql/Room.gql';
import { NewRoomInput } from './gql/NewRoomInput.gql';
import { NewRoom } from './gql/NewRoom.gql';
import { RoomsService } from './rooms.service';
import { CurrentUser, GqlAuthGuard } from '../users/gql-auth-guard';
import { UseGuards } from '@nestjs/common';

@Resolver((of) => Room)
export class RoomsResolver {
  constructor(private roomsService: RoomsService) {}

  @Mutation((returns) => NewRoom)
  @UseGuards(GqlAuthGuard)
  async newRoom(
    @CurrentUser() currentUser,
    @Args({ name: 'room', type: () => NewRoomInput }) room: NewRoomInput,
  ) {
    const roomEntity = await this.roomsService.newRoom(room, currentUser.id);
    return { roomId: roomEntity.id };
  }

  @Mutation((returns) => Room)
  @UseGuards(GqlAuthGuard)
  async checkinRoom(
    @CurrentUser() currentUser,
    @Args({ name: 'roomId', type: () => String }) roomId: string,
  ) {
    const userId = currentUser.id;
    return this.roomsService.checkin(userId, roomId);
  }
}
