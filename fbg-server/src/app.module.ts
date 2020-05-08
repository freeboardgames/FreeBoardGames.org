import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'dev.db',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
    }),
    UsersModule,
  ],
})
export class AppModule { }
