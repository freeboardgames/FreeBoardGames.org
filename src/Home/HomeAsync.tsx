import getAsync from '../App/Async';

const HomeAsync = getAsync('Home', () => import('./Home'));

export default HomeAsync;
