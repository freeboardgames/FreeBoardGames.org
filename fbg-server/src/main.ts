import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import {Transport, MicroserviceOptions} from '@nestjs/microservices';
import {join} from 'path';
import { grpcClientOptions } from './grpc-client.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  await app.startAllMicroservicesAsync();


  await app.listen(3001);
}
bootstrap();
