import React from 'react';
import { Router } from 'infra/i18n';

export default class extends React.Component {
  static async getInitialProps({ res }) {
    const redirectTo = '/';
    if (res) {
      res.writeHead(302, {
        Location: redirectTo,
      });
      res.end();
    } else {
      Router.push(redirectTo);
    }
    return {};
  }
}
