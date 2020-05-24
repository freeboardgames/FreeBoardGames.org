import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

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
