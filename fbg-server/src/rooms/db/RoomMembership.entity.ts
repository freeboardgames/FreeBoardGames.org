import {
  Entity,
  BaseEntity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../users/db/User.entity';
import { RoomEntity } from './Room.entity';

@Entity()
export class RoomMembershipEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'double precision' })
  public lastSeen!: number;

  @Column({ default: false })
  public isCreator!: boolean;

  @ManyToOne(() => UserEntity, (user) => user.roomMemberships)
  public user!: UserEntity;

  @ManyToOne(() => RoomEntity, (room) => room.userMemberships)
  public room!: RoomEntity;
}

export interface UserDevice {
  token: string;
}
