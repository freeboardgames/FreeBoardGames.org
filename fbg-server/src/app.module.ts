import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { MatchModule } from './match/match.module';
import { HealthzController } from './healthz.controller';
const CONNECTION: any = process.env.POSTGRES_URL
  ? {
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
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
  controllers: [HealthzController],
})
export class AppModule {}
