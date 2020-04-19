import { createConnection } from 'typeorm';
import express from 'express';
import 'reflect-metadata';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import { UserDbEntity } from './entities/User';
import { RoomDbEntity } from './entities/Room';
import { RoomService } from './services/RoomService';
import { UserService } from './services/UserService';
import { User } from 'dto/User';
import { UserDeviceService } from './services/UserDeviceService';
import { UserDeviceDbEntity } from './entities/UserDevice';
import { Room } from 'dto/Room';

const PORT = 8002;

const csrfProtection = csrf({ cookie: true });

const dbConnectionOptions: any = {
  type: 'sqlite',
  // database: ":memory:",
  database: 'test.db',
  entities: [UserDbEntity, UserDeviceDbEntity, RoomDbEntity],
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

  /** user checkin */
  app.post('/api/users', async (req, res) => {
    const { nickname } = req.body;
    if (!nickname) {
      res.status(400).send();
      return;
    }
    const userDto: User = { nickname };
    // create new userdevice
    const userDevice = await UserDeviceService.newDevice();

    // create new user
    const newUserResponse = await UserService.newUser(userDto, userDevice);
    res.send(newUserResponse);
  });

  /** list rooms */
  app.get('/api/rooms', csrfProtection, async (_req, res) => {
    const rooms = await RoomService.listRooms();
    res.send(rooms);
  });

  // TODO csrfProtection
  app.post('/api/rooms', async (req, res) => {
    const { gameCode, capacity, unlisted, token } = req.body;
    if (!gameCode || !capacity || !token || typeof unlisted === 'undefined') {
      res.status(400).send();
      return;
    }
    const userDbEntity = await UserService.getUserDbEntityFromToken(token);
    if (!userDbEntity) {
      res.status(401).send();
      return;
    }
    const roomDto: Room = { gameCode, capacity, unlisted };
    const room = await RoomService.newRoom(userDbEntity, roomDto);
    res.send(room);
  });

  app.get('/api/room/:id', async (req, res) => {
    const id = Number(req.params.id);
    const room = await RoomService.getRoom(id);
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
