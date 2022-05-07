import { Resolver, Mutation, Args, Subscription, Int } from '@nestjs/graphql';
import { User } from '../users/gql/User.gql';
import { Room } from './gql/Room.gql';
import { NewRoomInput } from './gql/NewRoomInput.gql';
import { UpdateRoomInput } from './gql/UpdateRoomInput.gql';
import { NewRoom } from './gql/NewRoom.gql';
import { RoomsService } from './rooms.service';
import { CurrentUser, GqlAuthGuard } from '../internal/auth/GqlAuthGuard';
import { UseGuards, Inject } from '@nestjs/common';
import { roomEntityToRoom } from './RoomUtil';
import { PubSub } from 'graphql-subscriptions';
import { FBG_PUB_SUB } from '../internal/FbgPubSubModule';

@Resolver(() => Room)
export class RoomsResolver {
  constructor(private roomsService: RoomsService, @Inject(FBG_PUB_SUB) private pubSub: PubSub) {}

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

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async moveUserUp(
    @CurrentUser() currentUser: User,
    @Args({ name: 'roomId', type: () => String }) roomId: string,
    @Args({ name: 'userIdToBeMovedUp', type: () => Int })
    userIdToBeMovedUp: number,
  ): Promise<boolean> {
    await this.roomsService.moveUserUp(
      currentUser.id,
      userIdToBeMovedUp,
      roomId,
    );
    return true;
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async updateRoom(
    @CurrentUser() currentUser: User,
    @Args({ name: 'room', type: () => UpdateRoomInput }) room: UpdateRoomInput,
  ): Promise<boolean> {
    await this.roomsService.updateRoom(
      currentUser.id,
      room
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
