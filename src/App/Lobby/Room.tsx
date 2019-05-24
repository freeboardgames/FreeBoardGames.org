import React from 'react';
import getMessagePage from '../MessagePage';

/** TODO ROOM PAGE */
export class Room extends React.Component<{}, {}> {
  render() {
    // waiting for friend to join
    const ErrorPage = getMessagePage(
      'error',
      `Work in progress...`,
    );
    return <ErrorPage />;
  }
}
