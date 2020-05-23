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

  @Column()
  public isCreator!: boolean;

  @ManyToOne((type) => UserEntity, (user) => user.roomMemberships)
  public user!: UserEntity;

  @ManyToOne((type) => RoomEntity, (room) => room.userMemberships)
  public room!: RoomEntity;
}

export interface UserDevice {
  token: string;
}
