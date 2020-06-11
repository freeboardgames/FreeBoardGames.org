import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from './constants';
import { PassportModule } from '@nestjs/passport';
import { SubscriptionAuth } from './SubscriptionAuth';
import { FbgJwtService } from './FbgJwtService';

@Module({
  imports: [
    JwtModule.register({
      secret: JWT_SECRET,
    }),
    PassportModule,
  ],
  providers: [SubscriptionAuth, FbgJwtService],
  exports: [SubscriptionAuth, FbgJwtService],
})
export class AuthModule {}
