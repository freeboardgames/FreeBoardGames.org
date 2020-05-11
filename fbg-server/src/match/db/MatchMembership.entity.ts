import {
  Entity,
  BaseEntity,
  ManyToOne,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../users/db/User.entity';
import { MatchEntity } from './Match.entity';

@Entity()
export class MatchMembershipEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column()
  public bgioSecret!: string;

  @ManyToOne(
    type => UserEntity,
    user => user.roomMemberships,
  )
  public user!: UserEntity;

  @ManyToOne(
    type => MatchEntity,
    room => room.playerMemberships,
  )
  public match!: MatchEntity;
}

export interface UserDevice {
  token: string;
}
