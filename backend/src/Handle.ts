import express from 'express';

export class Handle {
  csrfProtection: express.RequestHandler;

  constructor(csrfProtection: express.RequestHandler) {
    this.csrfProtection = csrfProtection;
  }

  install(app: express.Application) {
    return;
  }
}
