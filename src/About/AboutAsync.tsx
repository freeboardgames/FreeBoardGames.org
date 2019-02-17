import { asyncComponent } from 'react-async-component';

const AboutAsync = asyncComponent({
  resolve: () => import('./About'),
});

export default AboutAsync;
