/* eslint-disable no-console */

import React from 'react';

export class SelfXSSWarning extends React.Component<{}, {}> {
  componentDidMount() {
    if (process.browser && process.env.NODE_ENV !== 'development') {
      setTimeout(
        console.log.bind(
          console,
          '%c%s',
          'font-size:40px; font-weight:bold; background: yellow; color:red; -webkit-text-stroke:1px black;',
          ' WARNING! ',
        ),
      );
      setTimeout(
        console.log.bind(
          console,
          '%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS.\n%cDo not enter or paste code that you do not understand.',
          'font-family:helvetica; font-size:16px;',
          'font-family:helvetica; font-size:16px; font-weight:bold',
        ),
      );
    }
  }
  render() {
    return null;
  }
}
