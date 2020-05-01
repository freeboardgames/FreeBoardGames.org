import {
  Entity,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { RoomDb } from './RoomDb';
import { UserDeviceDb } from './UserDeviceDb';
import { UserInRoomDb } from './UserInRoomDb';

@Entity()
export class UserDb extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany((type) => UserDeviceDb, (userDevice) => userDevice.user)
  devices!: UserDeviceDb[];

  @Column()
  nickname!: string;

  @OneToMany((type) => UserInRoomDb, (userinRoomDb) => userinRoomDb.user)
  public userInRooms!: UserInRoomDb[];
}
