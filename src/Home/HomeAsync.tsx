import { asyncComponent } from 'react-async-component';

const HomeAsync = asyncComponent({
  resolve: () => import('./Home'),
});

export default HomeAsync;
