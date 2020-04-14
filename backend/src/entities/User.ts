import { Entity, Column, BaseEntity, ManyToMany, JoinTable, PrimaryColumn } from 'typeorm';
import { RoomDbEntity, Room } from './Room';

@Entity()
export class UserDbEntity extends BaseEntity {
  @PrimaryColumn({ unique: true })
  nickname!: string;

  @Column()
  credential!: string;

  @ManyToMany((type) => RoomDbEntity, (roomDbEntity) => roomDbEntity.users, {
    cascade: true,
  })
  @JoinTable()
  rooms!: RoomDbEntity[];
}

export interface User {
  nickname: string;
  credential: string;
  rooms: Room[];
}

// export class UserService {
//   public static async
// }
