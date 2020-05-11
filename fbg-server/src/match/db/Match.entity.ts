import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { MatchMembershipEntity } from './MatchMembership.entity';
import { RoomEntity } from '../../rooms/db/Room.entity';

@Entity()
export class MatchEntity extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  gameCode!: string;

  @Column()
  bgioServerUrl!: string;

  @Column()
  bgioMatchId: string;

  @OneToMany(
    type => MatchMembershipEntity,
    membership => membership.match,
  )
  public playerMemberships!: MatchMembershipEntity[];

  @OneToOne(type => RoomEntity)
  public room!: RoomEntity;
}
