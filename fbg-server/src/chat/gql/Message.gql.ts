import { Field, ObjectType } from '@nestjs/graphql';
import { ChannelType } from '../types';

@ObjectType()
export class Message { 
  @Field(() => String, { nullable: false })
  channelType: ChannelType;
  channelId: string;
  userId: number;
  userNickname: string;
  isoTimestamp: string;
  message: string;
}
