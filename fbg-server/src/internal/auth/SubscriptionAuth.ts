import { withCancel } from '../../util/GqlUtil';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './definitions';

@Injectable()
export class SubscriptionAuth {
  constructor(private readonly jwtService: JwtService) {}

  onUserDisconnect<T>(
    asyncIterator: AsyncIterator<T | undefined>,
    jwt: string | undefined,
    onDisconnect: (userId: number | undefined) => void,
  ): AsyncIterator<T | undefined> {
    let userId;
    if (jwt) {
      const jwtPayload: JwtPayload = this.jwtService.decode(jwt) as any;
      userId = jwtPayload.userId;
    }
    return withCancel(asyncIterator, () => {
      onDisconnect(userId);
    });
  }
}
