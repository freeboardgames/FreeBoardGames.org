import { Module } from '@nestjs/common';
import { KnexModule } from 'nestjs-knex';
import { UsersController } from '../users/users.controller';

@Module({
    imports: [
        KnexModule.forRoot({
            config: {
                client: "sqlite3",
                useNullAsDefault: true,
                connection: ':memory:',
            },
        }),
    ],
    controllers: [UsersController],
})
export class AppModule {}
