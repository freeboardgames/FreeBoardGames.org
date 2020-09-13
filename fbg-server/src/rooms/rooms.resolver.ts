import { Resolver, Mutation, Args, Subscription, Int } from '@nestjs/graphql';
import { Room } from './gql/Room.gql';
import { NewRoomInput } from './gql/NewRoomInput.gql';
import { NewRoom } from './gql/NewRoom.gql';
import { RoomsService } from './rooms.service';
import { CurrentUser, GqlAuthGuard } from '../internal/auth/GqlAuthGuard';
import { UseGuards } from '@nestjs/common';
import { roomEntityToRoom } from './RoomUtil';
import { PubSub } from 'graphql-subscriptions';

@Resolver((of) => Room)
export class RoomsResolver {
  constructor(private roomsService: RoomsService, private pubSub: PubSub) {}

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
  async joinRoom(
    @CurrentUser() currentUser,
    @Args({ name: 'roomId', type: () => String }) roomId: string,
  ) {
    const userId = currentUser.id;
    const roomEntity = await this.roomsService.joinRoom(userId, roomId);
    const room = roomEntityToRoom(roomEntity);
    return { ...room, userId };
  }

  @Mutation((returns) => Boolean)
  @UseGuards(GqlAuthGuard)
  async leaveRoom(
    @CurrentUser() currentUser,
    @Args({ name: 'roomId', type: () => String }) roomId: string,
  ) {
    await this.roomsService.leaveRoom(currentUser.id, roomId);
    return true;
  }

  @Mutation((returns) => Boolean)
  @UseGuards(GqlAuthGuard)
  async removeFromRoom(
    @CurrentUser() currentUser,
    @Args({ name: 'roomId', type: () => String }) roomId: string,
    @Args({ name: 'userIdToBeRemoved', type: () => Int })
    userIdToBeRemoved: number,
  ) {
    await this.roomsService.removeFromRoom(
      currentUser.id,
      userIdToBeRemoved,
      roomId,
    );
    return true;
  }

  @Subscription((returns) => Room)
  roomMutated(
    @Args({ name: 'roomId', type: () => String }) roomId: string,
    @Args({ name: 'jwt', type: () => String, nullable: true }) jwt?: string,
  ) {
    return this.pubSub.asyncIterator(`room/${roomId}`);
  }
}
