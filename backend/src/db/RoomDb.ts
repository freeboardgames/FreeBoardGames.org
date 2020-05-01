import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { UserDb } from './UserDb';
import { UserInRoomDb } from './UserInRoomDb';

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

  @OneToMany((type) => UserInRoomDb, (userinRoomDb) => userinRoomDb.room)
  public usersInRoom!: UserInRoomDb[];
}
