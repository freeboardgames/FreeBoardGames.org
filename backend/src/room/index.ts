import express from 'express';
import { ListRoomsHandle } from './ListRoomsHandle';

export const RoomHandles = (csrfProtection: express.RequestHandler) => [new ListRoomsHandle(csrfProtection)];
