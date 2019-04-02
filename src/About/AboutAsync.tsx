import getAsync from '../App/Async';

const AboutAsync = getAsync('About', () => import('./About'));

export default AboutAsync;
