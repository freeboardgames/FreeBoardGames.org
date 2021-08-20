import shell from 'shelljs';
import { cd, checkGameExists, decodeCsv } from '../../../cli/util';
import fs from 'fs';
import path from 'path';

function genGames(games = []) {
  cd('web/src/games');
  games.forEach((g) => checkGameExists(g));
  const finalGames = orderGames(games.length > 0 ? games : getAllGames());
  const fileContent = genFileContent(finalGames);
  writeFile(fileContent);
}

function orderGames(games) {
  const config = JSON.parse(shell.cat('config.json'));
  const order = config.order;
  const result = [...games].sort((a, b) => {
    let aIndex = order.indexOf(a);
    let bIndex = order.indexOf(b);
    if (aIndex === -1) {
      aIndex = 9999;
    }
    if (bIndex === -1) {
      bIndex = 9999;
    }
    return aIndex - bIndex;
  });
  return result;
}

function getAllGames() {
  return shell
    .ls('-Al')
    .filter((f) => f.isDirectory())
    .map((f) => f.name);
}

function genFileContent(games) {
  let importGen = [];
  let mapGen = [];
  let listGen = [];

  for (const game of games) {
    importGen.push(`import ${game} from './${game}';`);
    mapGen.push(`  ${game},`);
    listGen.push(`  GAMES_MAP.${game},`);
  }

  const result = `/** AUTO-GENERATED FILE, DO NOT EDIT MANUALLY. */
import { IGameDef, IGameDefMap } from 'gamesShared/definitions/game';
${importGen.join('\n')}

export const GAMES_MAP: IGameDefMap = {
${mapGen.join('\n')}
};

export const GAMES_LIST: IGameDef[] = [
${listGen.join('\n')}
];
`;
  return result;
}

function writeFile(fileContent) {
  const filePath = path.resolve(`${shell.pwd()}`, 'index.ts');
  fs.writeFileSync(filePath, fileContent);
}

const argv = process.argv;
if (argv.length <= 2) {
  genGames();
} else {
  genGames(decodeCsv(argv[2]));
}
