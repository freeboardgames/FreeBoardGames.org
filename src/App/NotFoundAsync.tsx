import { asyncComponent } from 'react-async-component';

const NotFoundAsync = asyncComponent({
  resolve: () => import('./NotFound'),
});

export default NotFoundAsync;
