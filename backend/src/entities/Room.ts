import { Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class RoomDbEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
}

export interface Room {
  id: number;
  users: User[];
}
