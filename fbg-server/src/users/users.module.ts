import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtStrategy } from './jwt.strategy';
import { JWT_SECRET } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
// import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './db/User.entity';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule,
    JwtModule.register({
      secret: JWT_SECRET,
    }),
  ],
  providers: [UsersResolver, UsersService, JwtStrategy],
  exports: [UsersService],
})
export class UsersModule {}
