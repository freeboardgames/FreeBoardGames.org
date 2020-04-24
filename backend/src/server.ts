import { createConnection } from 'typeorm';
import express from 'express';
import 'reflect-metadata';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import { UserDb } from './db/UserDb';
import { RoomDb } from './db/RoomDb';
import { RoomService } from './room/services/RoomService';
import { UserService } from './user/services/UserService';
import { NewUserHandle } from './user/NewUserHandle';
import { RenameUserHandle } from './user/RenameUserHandle';
import { Handle } from './Handle';
import { UserDeviceDb } from './db/UserDeviceDb';
import { Room } from '../../common/dto/Room';
import { HealthzHandle } from './HealtzHandle';
import { NewRoomHandle } from './room/NewRoomHandle';
import { ListRoomsHandle } from './room/ListRoomsHandle';
import { GetRoomHandle } from './room/GetRoomHandle';

const csrfProtection = csrf({ cookie: true });

const HANDLES: Handle[] = [
  new HealthzHandle(csrfProtection),
  new NewUserHandle(csrfProtection),
  new RenameUserHandle(csrfProtection),
  new NewRoomHandle(csrfProtection),
  new ListRoomsHandle(csrfProtection),
  new GetRoomHandle(csrfProtection),
];

const ENTITIES = [UserDb, UserDeviceDb, RoomDb];

const PORT = 8002;

const dbConnectionOptions: any = {
  type: 'sqlite',
  // database: ":memory:",
  database: 'test.db',
  entities: ENTITIES,
  synchronize: true,
  logging: true,
};

async function serve() {
  const app: express.Application = express();
  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(cookieParser());

  // :method :url :status :response-time ms - :res[content-length]
  // GET /myroute 200 339.051 ms - 242
  // was dev
  const method = ':date[iso] :remote-addr   :method :url :status   :response-time ms (:res[content-length])';

  app.use(
    morgan(method, {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      skip: (req: any, _res: any) => req.url === '/healthz',
    }),
  );

  await createConnection(dbConnectionOptions);

  for (const handle of HANDLES) {
    handle.install(app);
  }

  app.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log('listening on port ' + PORT);
  });
}

if (typeof module !== 'undefined' && !module.parent) {
  serve();
}
