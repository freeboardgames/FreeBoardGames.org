import { Entity, Column, BaseEntity } from 'typeorm';

@Entity()
export class UserDbEntity extends BaseEntity {
  @Column({ unique: true })
  nickname!: string;

  @Column()
  credential!: string;
}