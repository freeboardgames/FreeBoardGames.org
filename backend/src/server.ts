import { createConnection } from 'typeorm';
import { UserDBEntity } from './entities/UserDBEntity';
import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import morgan from 'morgan';
import { AuthResponse, RegResponse } from './dto';
import User from './User';
import bodyParser from 'body-parser';

const PORT = 8002;

const dbConnectionOptions: any = {
  type: 'sqlite',
  database: ':memory:',
  entities: [UserDBEntity],
  synchronize: true,
  logging: true,
};

async function serve() {
  const app: express.Application = express();
  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(cors());

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

  app.post('/api/users/register', async (req, res) => {
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

  app.post('/api/users/auth', async (req, res) => {
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

  app.listen(PORT, function () {
    // eslint-disable-next-line no-console
    console.log('listening on port ' + PORT);
  });
}

if (typeof module !== 'undefined' && !module.parent) {
  serve();
}
