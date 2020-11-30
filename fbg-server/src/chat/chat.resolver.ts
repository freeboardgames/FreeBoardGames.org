import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Resolver, Mutation, Args, Subscription, Int } from '@nestjs/graphql';
import { Message } from './gql/Message.gql';
import { PubSub } from 'graphql-subscriptions';
import { ChatService } from './chat.service';
import { VALID_CHANNEL_TYPES } from './types';
import { UseGuards } from '@nestjs/common';
import { CurrentUser, GqlAuthGuard } from '../internal/auth/GqlAuthGuard';
import { User } from '../users/gql/User.gql';
import { SendMessageInput } from './gql/SendMessageInput.gql';

@Resolver(() => Message)
export class ChatResolver {
  constructor(private chatService: ChatService, private pubSub: PubSub) {}

  
  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)
  async sendMessage(
    @CurrentUser() currentUser: User,
    @Args({ name: 'message', type: () => SendMessageInput }) messageInput: SendMessageInput,
    userIdToBeRemoved: number,
  ): Promise<boolean> {
    await this.chatService.sendMessage(
      currentUser.id,
      messageInput
    );
    return true;
  }

  @Subscription(() => Message)
  chatMutated(@Args('channelType') channelType: string, @Args('channelId') channelId: string): AsyncIterator<unknown, any, undefined> {
    if (!VALID_CHANNEL_TYPES.has(channelType)) {
        throw new HttpException(
            `Invalid channel type: ${channelType}`,
            HttpStatus.BAD_REQUEST,
          );
    }
    if (channelId.trim().length == 0) {
        throw new HttpException(
            `Invalid channel id: ${channelId}`,
            HttpStatus.BAD_REQUEST,
          );
    }
    return this.pubSub.asyncIterator(`chat/${channelType}/${channelId}`);
  }
}