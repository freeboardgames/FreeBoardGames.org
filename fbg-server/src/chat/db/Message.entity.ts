import {
  Entity,
  BaseEntity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  Index,
} from 'typeorm';
import { UserEntity } from '../../users/db/User.entity';

export type MessageChannelNamespace = "MATCH" | "ROOM"; 

@Entity()
export class MessageEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column({ type: 'double precision' })
  timestamp!: number;

  @Index()
  @Column({ type: 'varchar' })
  channelNamespace!: MessageChannelNamespace;

  @Index()
  @Column()
  channelId!: string;

  @ManyToOne(() => UserEntity, (user) => user.roomMemberships)
  public author!: UserEntity;

  @Column()
  text!: string;
}

