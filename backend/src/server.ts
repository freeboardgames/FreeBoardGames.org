import { createConnection } from 'typeorm';
import express from 'express';
import 'reflect-metadata';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import { UserDbEntity, User } from './entities/User';
import { RoomDbEntity, Room } from './entities/Room';
import { RoomService } from './services/RoomService';
import { UserService } from './services/UserService';

const PORT = 8002;

const csrfProtection = csrf({ cookie: true });

const dbConnectionOptions: any = {
  type: 'sqlite',
  database: ':memory:',
  entities: [UserDbEntity, RoomDbEntity],
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

  app.get('/healthz', function (_req, res) {
    res.send('OK');
  });

  app.post('/api/users', async (req, res) => {
    const { nickname } = req.body;
    if (!nickname) {
      res.status(400).send();
      return;
    }
    const user: User = { nickname };
    const result = await UserService.checkIn(user);
    res.send(result);
  });

  /** list rooms */
  app.get('/api/rooms', csrfProtection, async (_req, res) => {
    const rooms = await RoomService.listRooms();
    res.send(rooms);
  });

  // TODO csrfProtection
  app.post('/api/rooms/new', async (req, res) => {
    const { gameCode, capacity, unlisted } = req.body;
    if (!gameCode || !capacity || typeof unlisted === 'undefined') {
      res.status(400).send();
      return;
    }
    const roomDto: Room = { gameCode, capacity, unlisted };
    const room = await RoomService.newRoom(roomDto);
    res.send(room);
  });

  app.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log('listening on port ' + PORT);
  });
}

if (typeof module !== 'undefined' && !module.parent) {
  serve();
}
