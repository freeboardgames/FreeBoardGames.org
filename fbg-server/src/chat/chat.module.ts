import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageEntity } from './db/Message.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([MessageEntity]),
  ],
  providers: [],
})
export class ChatModule {}

