import { PubSub } from "graphql-subscriptions";
import { IS_PROD } from "./util";
import { RedisPubSub } from 'graphql-redis-subscriptions';
import Redis from 'ioredis';
import { Module } from '@nestjs/common';

export const FBG_PUB_SUB = 'FbgPubSub';

@Module({
  providers: [
    {
      provide: FBG_PUB_SUB,
      useFactory: () => {
        if (!IS_PROD) {
          return new PubSub();
        }
        const options = {
          host: process.env.FBG_REDIS_HOST,
          port: process.env.FBG_REDIS_PORT,
          password: process.env.FBG_REDIS_PASSWORD,
        };

        return new RedisPubSub({
          publisher: new Redis(options),
          subscriber: new Redis(options),
        });
      }
    },
  ],
  exports: [FBG_PUB_SUB]
})
export class FbgPubSubModule {}