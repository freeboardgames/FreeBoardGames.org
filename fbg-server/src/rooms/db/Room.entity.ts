import {
  Entity,
  BaseEntity,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
  PrimaryColumn,
} from 'typeorm';
import { RoomMembershipEntity } from './RoomMembership.entity';
import { MatchEntity } from '../../match/db/Match.entity';

@Entity()
export class RoomEntity extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  capacity!: number;

  @Column()
  gameCode!: string;

  @Column()
  isPublic!: boolean;

  @OneToMany(() => RoomMembershipEntity, (membership) => membership.room)
  public userMemberships!: RoomMembershipEntity[];

  @OneToOne(() => MatchEntity, (match) => match.room)
  @JoinColumn()
  public match?: MatchEntity;
}
