import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { User, UserDbEntity } from './User';

@Entity()
export class RoomDbEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  capacity!: number;

  @Column()
  gameCode!: string;

  @Column()
  unlisted!: boolean;

  @ManyToMany((type) => UserDbEntity, (userDbEntity) => userDbEntity.rooms)
  users!: UserDbEntity[];
}

export interface Room {
  id?: number;
  capacity: number;
  gameCode: string;
  unlisted: boolean;
  users?: User[];
}
