import {
  Entity,
  BaseEntity,
  PrimaryColumn,
  Column,
  OneToMany,
  OneToOne,
  JoinColumn,
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
  bgioServerInternalUrl!: string;

  @Column()
  bgioServerExternalUrl!: string;

  @Column()
  bgioMatchId: string;

  @OneToMany(() => MatchMembershipEntity, (membership) => membership.match)
  public playerMemberships!: MatchMembershipEntity[];

  @OneToOne(() => RoomEntity, (room) => room.match)
  public room?: RoomEntity;

  @OneToOne(() => RoomEntity)
  @JoinColumn()
  public nextRoom?: RoomEntity;
}
