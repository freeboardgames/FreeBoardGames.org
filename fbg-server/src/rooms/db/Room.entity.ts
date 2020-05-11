import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { RoomMembershipEntity } from './RoomMembership.entity';
import { MatchEntity } from '../../match/db/Match.entity';

@Entity()
export class RoomEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  capacity!: number;

  @Column()
  gameCode!: string;

  @Column()
  isPublic!: boolean;

  @OneToMany(
    type => RoomMembershipEntity,
    membership => membership.room,
  )
  public userMemberships!: RoomMembershipEntity[];

  @OneToOne(type => MatchEntity)
  @JoinColumn()
  public match?: MatchEntity;
}
