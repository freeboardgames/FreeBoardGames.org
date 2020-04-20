import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { UserDb } from './UserDb';

@Entity()
export class RoomDb extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  capacity!: number;

  @Column()
  gameCode!: string;

  @Column()
  unlisted!: boolean;

  @ManyToMany((type) => UserDb, (userDb) => userDb.rooms)
  users!: UserDb[];
}
