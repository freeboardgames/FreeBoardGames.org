import { createConnection } from 'typeorm';
import { UserDbEntity } from './entities/UserDbEntity';
import express from 'express';
import 'reflect-metadata';
import morgan from 'morgan';
import { AuthResponse, RegResponse } from './dto/User';
import { Room, RoomResponse } from './dto/Room';
import User from './User';
import bodyParser from 'body-parser';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';

const PORT = 8002;

const csrfProtection = csrf({ cookie: true });

const dbConnectionOptions: any = {
  type: 'sqlite',
  database: ':memory:',
  entities: [UserDbEntity],
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

  app.post('/api/users/register', csrfProtection, async (req, res) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      res.status(400).send();
      return;
    }
    const user = new User(username);
    const addResult = await user.addUser(email, password);
    const result: RegResponse = { status: addResult };
    res.send(result);
  });

  app.post('/api/users/auth', csrfProtection, async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).send();
      return;
    }
    const user = new User(email);
    const authResult = await user.checkPassword(password);
    const result: AuthResponse = { status: authResult };
    res.send(result);
  });

  /** list rooms */
  app.get('/api/rooms', csrfProtection, async (_req, res) => {
    const room: Room = { gameCode: 'chess', capacity: 2, players: ['Jason'] };
    const room2: Room = { gameCode: 'tictactoe', capacity: 2, players: ['Jason'] };
    const room3: Room = { gameCode: 'chess', capacity: 2, players: ['Jason'] };
    const result: Room[] = [room, room2, room3];
    console.log(result);
    res.send(result);
  });

  app.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log('listening on port ' + PORT);
  });
}

if (typeof module !== 'undefined' && !module.parent) {
  serve();
}
