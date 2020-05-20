import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { MatchModule } from './match/match.module';
const CONNECTION: any = process.env.POSTGRES_URL
  ? {
      type: 'postgres',
      url: process.env.POSTGRES_URL,
    }
  : {
      type: 'sqlite',
      database: 'dev.db',
    };

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...CONNECTION,
      autoLoadEntities: true,
      synchronize: true,
      logging: false,
    }),
    UsersModule,
    RoomsModule,
    MatchModule,
  ],
})
export class AppModule {}
