import glob from 'glob';
import { destination, pattern } from './constants';
import { copy } from './copy';

glob(pattern, { nonull: false }, function (err, files) {
  files.forEach((source) => {
    copy(source, destination);
  });
});
