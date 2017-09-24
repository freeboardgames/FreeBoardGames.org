import React from 'react';

class Footer extends React.Component {
  render () {
    return (
      <p style={{fontSize: '12px', textAlign: 'center'}}>
        Made with ♥&nbsp;-&nbsp;
        <a href="https://github.com/Felizardo/turnato" target="_blank"
          rel="noopener">GitHub</a>
      </p>
    );
  }
}

Footer.propTypes = {
};

export default Footer;
