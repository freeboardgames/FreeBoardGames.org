import { forwardRef, Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtStrategy } from '../internal/auth/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './db/User.entity';
import { UsersResolver } from './users.resolver';
import { AuthModule } from '../internal/auth/auth.module';
import { RoomsModule } from '../rooms/rooms.module';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), AuthModule, forwardRef(() => RoomsModule)],
  providers: [UsersResolver, UsersService, JwtStrategy],
  exports: [UsersService],
})
export class UsersModule {}
