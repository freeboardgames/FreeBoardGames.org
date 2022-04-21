import { Injectable, HttpStatus, HttpException, Inject } from '@nestjs/common';
import { RoomsService } from '../rooms/rooms.service';
import { MatchService } from '../match/match.service';
import { UsersService } from '../users/users.service';
import { PubSub } from 'graphql-subscriptions';
import { SendMessageInput } from './gql/SendMessageInput.gql';
import { Message } from './gql/Message.gql';
import Filter from 'bad-words';
import { FBG_PUB_SUB } from '../internal/FbgPubSubModule';
import { ChannelType } from './types';
import { RoomEntity } from 'src/rooms/db/Room.entity';

const MAX_MESSAGE_LENGTH = 280;

@Injectable()
export class ChatService {
  constructor(
    private roomsService: RoomsService,
    private matchService: MatchService,
    private usersService: UsersService,
    @Inject(FBG_PUB_SUB) private pubSub: PubSub,
  ) { }

  public async sendMessage(userId: number, messageInput: SendMessageInput): Promise<void> {
    if (messageInput.channelType === 'room') {
      await this.checkUserInRoom(userId, messageInput.channelId);
    } else if (messageInput.channelType === 'match') {
      await this.checkUserInMatch(userId, messageInput.channelId);
    } else {
      throw new HttpException(
        `Invalid channel type: ${messageInput.channelType}`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const user = await this.usersService.getById(userId);
    const userNickname = user.nickname;
    const isoTimestamp = new Date().toISOString();
    let messageContent;
    if (await this.checkChannelIsPublic(messageInput.channelType, messageInput.channelId)) {
      try {
        messageContent = new Filter().clean(messageInput.message);
      } catch {
        messageContent = messageInput.message;
      }
    } else {
      messageContent = messageInput.message;
    }
    messageContent = (messageContent || '').substring(0, MAX_MESSAGE_LENGTH);
    messageContent = messageContent.replace(/[\r\n]+/gm, '');
    const message: Message = {
      channelType: messageInput.channelType,
      channelId: messageInput.channelId,
      userId,
      userNickname,
      isoTimestamp,
      message: messageContent
    };
    await this.notifyMessage(message);
  }

  async notifyMessage(message: Message): Promise<void> {
    await this.pubSub.publish(`chat/${message.channelType}/${message.channelId}`, {
      chatMutated: message
    });
  }

  private async checkUserInRoom(userId: number, roomId: string) {
    const roomEntity = await this.roomsService.getRoomEntity(roomId);
    const membership = roomEntity.userMemberships.find(
      (m) => m.user.id === userId,
    );
    if (!membership) {
      throw new HttpException(
        `You need to be a room member in order to send messages.`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async checkUserInMatch(userId: number, matchId: string) {
    const matchEntity = await this.matchService.getMatchEntity(matchId);
    const membership = matchEntity.playerMemberships.find(
      (m) => m.user.id === userId,
    );
    if (!membership) {
      throw new HttpException(
        `You need to be a player in this match in order to send messages.`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async checkChannelIsPublic(channelType: ChannelType, channelId: string) {
    let roomEntity: RoomEntity;
    if (channelType === 'match') {
      const matchEntity = await this.matchService.getMatchEntity(channelId);
      roomEntity = matchEntity.room;
      if (!roomEntity)
        return true;
    } else { // If it's not a match, it has to be a room
      roomEntity = await this.roomsService.getRoomEntity(channelId);
    }
    return roomEntity.isPublic;
  }
}