import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import csurf from 'csurf';
import { setupLogging } from './util/logging';
import { PORT } from './constants';
import { IS_PROD } from './internal/util';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  setupLogging(app, 'fbg-server');
  app.use(cookieParser());
  if (IS_PROD) {
    const csrf = csurf({ cookie: true });
    const conditionalCSRF = function (req, res, next) {
      if (req.ip === "::ffff:127.0.0.1" || req.ip === "127.0.0.1") {
        next();
      } else {
        csrf(req, res, next);
      }
    }
    app.use(conditionalCSRF);
  } else {
    app.enableCors();
  }

  await app.listen(PORT);
}
bootstrap();
