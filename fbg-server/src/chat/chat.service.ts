import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { RoomsService } from '../rooms/rooms.service';
import { MatchService } from '../match/match.service';
import { UsersService } from '../users/users.service';
import { PubSub } from 'graphql-subscriptions';
import { SendMessageInput } from './gql/SendMessageInput.gql';
import { Message } from './gql/Message.gql';
import Filter from 'bad-words';

@Injectable()
export class ChatService {
  constructor (
    private roomsService: RoomsService,
    private matchService: MatchService,
    private usersService: UsersService,
    private pubSub: PubSub,
  ) {}

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
    const messageContent = new Filter().clean(messageInput.message);
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
}