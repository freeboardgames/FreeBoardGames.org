import chokidar from 'chokidar';
import { destination, pattern } from './constants';
import { copy } from './copy';

chokidar.watch(pattern, { ignoreInitial: true }).on('all', (event, source) => {
  copy(source, destination);
});
