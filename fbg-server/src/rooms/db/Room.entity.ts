import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { RoomMembershipEntity } from './RoomMembership.entity';

@Entity()
export class RoomEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  capacity!: number;

  @Column()
  gameCode!: string;

  @Column()
  isPublic!: boolean;

  @OneToMany(
    type => RoomMembershipEntity,
    membership => membership.room,
  )
  public userMemberships!: RoomMembershipEntity[];
}
