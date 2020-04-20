import express from 'express';
import { Handle } from './Handle';

export class HealthzHandle extends Handle {
  install(app: express.Application) {
    app.get('/healthz', function (_req, res) {
      res.send('OK');
    });
  }
}
