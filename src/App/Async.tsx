import { asyncComponent } from 'react-async-component';
import getMessagePage from './MessagePage';

const getAsync = (name: string, resolve: () => Promise<any>) =>
  asyncComponent({
    resolve,
    LoadingComponent: getMessagePage('loading', `Loading ${name} Page...`),
    ErrorComponent: getMessagePage('error', `Error Loading ${name} Page.`),
  });

export default getAsync;
