import { Entity, Column, BaseEntity, PrimaryColumn } from 'typeorm';

@Entity()
export class UserDBEntity extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column({ unique: true })
  username!: string;

  @Column()
  passwordHash!: string;
}
