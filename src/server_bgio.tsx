import React from 'react';
import Router from 'koa-router';
import KoaStatic from 'koa-static';
import fs from 'fs';
import ReactDOMServer from 'react-dom/server';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import { StaticRouter } from 'react-router-dom';
import { GAMES_LIST } from './games';
import { getPageMetadata, IPageMetadata } from './metadata';
import noCache from 'koa-no-cache';

const { Server } = require('@freeboardgame.org/boardgame.io/server'); // tslint:disable-line
import App from './App/App';

const HOST = '0.0.0.0';
const PORT = process.env.BGIO_PORT || 8001;
const NODE_ENV = process.env.NODE_ENV;
const PROD = NODE_ENV === 'production';

const startServer = async () => {
  const configs = Promise.all(GAMES_LIST.map((gameDef) => gameDef.config()));
  const games = (await configs).map((config) => config.default.bgioGame);
  const server = Server({ games });
  server.app.use(noCache({ global: true }));
  server.app.listen(PORT, HOST, () => {
    console.log(`Serving boardgame.io at: http://${HOST}:${PORT}/`); // tslint:disable-line
  });
};

startServer();
