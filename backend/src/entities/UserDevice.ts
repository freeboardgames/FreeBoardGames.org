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
import { UserDbEntity } from './User';

@Entity()
export class UserDeviceDbEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  token!: string;

  @ManyToOne((type) => UserDbEntity, (user) => user.devices)
  user!: UserDbEntity;
}

export interface UserDevice {
  token: string;
}
