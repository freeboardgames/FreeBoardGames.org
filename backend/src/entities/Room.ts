import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { UserDbEntity } from './User';

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
