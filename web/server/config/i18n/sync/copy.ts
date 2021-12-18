import { regexp } from './constants';
import { copyFileSync, existsSync, mkdirSync } from 'fs';

/* eslint-disable no-console */
export function copy(source: string, target: string) {
  const [, game, locale] = source.match(regexp) || [];
  const parent = `${target}/${locale}/games`;
  if (!existsSync(parent)) {
    mkdirSync(parent);
  }
  const file = `${parent}/${game}.json`;
  copyFileSync(source, file);
  console.log(`${file} > OK`);
}
