import { Entity, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from 'dto/User';

@Entity()
export class MatchDbEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;
}

export interface Match {
  id: number;
  users: User[];
}
