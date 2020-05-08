import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestingModule } from '@nestjs/testing';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: ':memory:',
      autoLoadEntities: true,
      synchronize: true,
      logging: false,
    }),
  ],
})
export class FakeDbModule {}

export function closeDbConnection(module: TestingModule) {
  const connection = module.get<Connection>(Connection);
  if (connection.isConnected) {
    connection.close();
  }
}
