import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserDBEntity extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  passwordHash!: string;
}
