import { Resolver, Mutation, Args, Subscription, Int } from '@nestjs/graphql';
import { User } from '../users/gql/User.gql';
import { Room } from './gql/Room.gql';
import { NewRoomInput } from './gql/NewRoomInput.gql';
import { NewRoom } from './gql/NewRoom.gql';
import { RoomsService } from './rooms.service';
import { CurrentUser, GqlAuthGuard } from '../internal/auth/GqlAuthGuard';
import { UseGuards } from '@nestjs/common';
import { roomEntityToRoom } from './RoomUtil';
import { PubSub } from 'graphql-subscriptions';

@Resolver(() => Room)
export class RoomsResolver {
  constructor(private roomsService: RoomsService, private pubSub: PubSub) {}

  @Mutation(() => NewRoom)
  @UseGuards(GqlAuthGuard)
  async newRoom(
    @CurrentUser() currentUser: User,
    @Args({ name: 'room', type: () => NewRoomInput }) room: NewRoomInput,
  ): Promise<{ roomId: string }> {
    const roomEntity = await this.roomsService.newRoom(room, currentUser.id);
    return { roomId: roomEntity.id };
  }

  @Mutation(() => Room)
  @UseGuards(GqlAuthGuard)
  async joinRoom(
    @CurrentUser() currentUser: User,
    @Args({ name: 'roomId', type: () => String }) roomId: string,
  ): Promise<Room> {
    const userId = currentUser.id;
    const roomEntity = await this.roomsService.joinRoom(userId, roomId);
    const room = roomEntityToRoom(roomEntity);
    return { ...room, userId };
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async leaveRoom(
    @CurrentUser() currentUser: User,
    @Args({ name: 'roomId', type: () => String }) roomId: string,
  ): Promise<boolean> {
    await this.roomsService.leaveRoom(currentUser.id, roomId);
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async removeFromRoom(
    @CurrentUser() currentUser: User,
    @Args({ name: 'roomId', type: () => String }) roomId: string,
    @Args({ name: 'userIdToBeRemoved', type: () => Int })
    userIdToBeRemoved: number,
  ): Promise<boolean> {
    await this.roomsService.removeFromRoom(
      currentUser.id,
      userIdToBeRemoved,
      roomId,
    );
    return true;
  }

  @Subscription(() => Room)
  roomMutated(
    @Args({ name: 'roomId', type: () => String }) roomId: string,
  ): AsyncIterator<unknown, any, undefined> {
    return this.pubSub.asyncIterator(`room/${roomId}`);
  }
}
