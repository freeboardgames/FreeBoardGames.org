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
import { RoomDbEntity } from './Room';
import { UserDeviceDbEntity } from './UserDevice';

@Entity()
export class UserDbEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany((type) => UserDeviceDbEntity, (userDevice) => userDevice.user)
  devices!: UserDeviceDbEntity[];

  @Column()
  nickname!: string;

  @ManyToMany((type) => RoomDbEntity, (roomDbEntity) => roomDbEntity.users, {
    cascade: true,
  })
  @JoinTable()
  rooms!: RoomDbEntity[];
}
