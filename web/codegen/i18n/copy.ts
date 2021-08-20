import { execSync } from 'child_process';
import { regexp } from './constants';

export function copy(source: string, target: string) {
  const [, game, locale] = source.match(regexp) || [];
  const parent = `${target}/${locale}/games`;
  const file = `${parent}/${game}.json`;
  execSync(`mkdir -p ${parent} && cp "${source}" "${file}"`, { stdio: 'inherit' });
  // eslint-disable-next-line no-console
  console.log(`${file} > OK`);
}
