import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MatchEntity } from './db/Match.entity';
import { MatchMembershipEntity } from './db/MatchMembership.entity';
import { MatchService } from './match.service';

@Module({
  imports: [TypeOrmModule.forFeature([MatchEntity, MatchMembershipEntity])],
  providers: [MatchService],
})
export class MatchModule {}
