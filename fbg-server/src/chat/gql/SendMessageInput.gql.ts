import { Field, InputType } from '@nestjs/graphql';
import { ChannelType } from '../types';

@InputType()
export class SendMessageInput {
  @Field(() => String, { nullable: false })
  channelType: ChannelType;
  channelId: string;
  message: string;
}
