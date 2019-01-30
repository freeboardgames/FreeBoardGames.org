import * as React from 'react';
import FreeBoardGameBar from '../App/FreeBoardGameBar';
import Header from './Header';
import GamesSection from './GamesSection';
import { Link } from 'react-router-dom';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <FreeBoardGameBar>
        <Header />
        <GamesSection />
        <p style={{ fontSize: '12px', textAlign: 'center' }}>
          Made with ♥&nbsp;-&nbsp;
          <a
            href="https://github.com/Felizardo/turnato"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          &nbsp;-&nbsp;
          <Link
            to="/about"
          >
            About
          </Link>
        </p>
      </FreeBoardGameBar>
    );
  }
}

export default Home;
