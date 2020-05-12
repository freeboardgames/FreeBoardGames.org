import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { RoomMembershipEntity } from '../../rooms/db/RoomMembership.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @OneToMany((type) => RoomMembershipEntity, (membership) => membership.user)
  public roomMemberships!: RoomMembershipEntity[];
}
