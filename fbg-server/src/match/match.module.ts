import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchEntity } from './db/Match.entity';
import { MatchMembershipEntity } from './db/MatchMembership.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MatchEntity, MatchMembershipEntity])],
})
export class MatchModule {}
