import * as React from 'react';
import TurnatoBar from '../App/TurnatoBar';
import Header from './Header';
import GamesSection from './GamesSection';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <TurnatoBar>
        <Header />
        <GamesSection />
        <p style={{fontSize: '12px', textAlign: 'center'}}>
          Made with ♥&nbsp;-&nbsp;
          <a
            href="https://github.com/Felizardo/turnato"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </p>
      </TurnatoBar>
    );
  }
}

export default Home;
