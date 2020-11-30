import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import { setupLogging } from './util/logging';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  setupLogging(app, 'fbg-server');
  app.use(cookieParser());
  const isProd = process.env.NODE_ENV === 'production';
  if (isProd) {
    app.use(csurf({ cookie: true }));
  } else {
    app.enableCors();
  }

  await app.listen(3001);
}
bootstrap();
