import React from 'react';
import getMessagePage from '../MessagePage';

/** TODO ROOM PAGE */
export class Room extends React.Component<{}, {}> {
  render() {
    const ErrorPage = getMessagePage(
      'error',
      `Work in progress...`,
    );
    return <ErrorPage />;
  }
}
