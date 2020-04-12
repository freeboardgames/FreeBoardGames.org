import { Entity, Column, BaseEntity } from 'typeorm';

@Entity()
export class UserDeviceDbEntity extends BaseEntity {
  @Column({ unique: true })
  token!: string;
}
