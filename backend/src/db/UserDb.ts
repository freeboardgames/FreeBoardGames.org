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

@Entity()
export class UserDb extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany((type) => UserDeviceDb, (userDevice) => userDevice.user)
  devices!: UserDeviceDb[];

  @Column()
  nickname!: string;

  @ManyToMany((type) => RoomDb, (room) => room.users, {
    cascade: true,
  })
  @JoinTable()
  rooms!: RoomDb[];
}
