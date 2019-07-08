import Loadable from 'react-loadable';
import getMessagePage from './MessagePage';
import React from 'react';

const getAsync = (name: string, resolve: () => Promise<any>) =>
  Loadable({
    loader: resolve,
    loading: (props: any) => {
      let Message;
      if (props.error) {
        Message = getMessagePage('error', `Error Loading ${name} Page.`);
      } else {
        Message = getMessagePage('loading', `Loading ${name} Page...`);
      }
      return <Message />;
    },
  });

export default getAsync;
