import {
  Entity,
  Column,
  BaseEntity,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserDb } from './UserDb';

@Entity()
export class UserDeviceDb extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  token!: string;

  @ManyToOne((type) => UserDb, (user) => user.devices)
  user!: UserDb;
}

export interface UserDevice {
  token: string;
}
