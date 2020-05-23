import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { MatchModule } from './match/match.module';
import { HealthzController } from './healthz.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

const CONNECTION: any = process.env.POSTGRES_URL
  ? {
      type: 'postgres',
      url: process.env.POSTGRES_URL,
      ssl: true,
      extra: {
        max: 22,
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
      logging: true,
    }),
    GraphQLModule.forRoot({
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), '../common/gql/schema.gql'),
      context: ({ req }) => ({ req }),
    }),
    UsersModule,
    RoomsModule,
    MatchModule,
  ],
  controllers: [HealthzController],
})
export class AppModule {}
