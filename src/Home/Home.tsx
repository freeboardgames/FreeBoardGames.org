import React from 'react';
import FreeBoardGameBar from '../App/FreeBoardGameBar';
import Header from './Header';
import { GamesList } from '../App/GamesList';
import { Link } from 'react-router-dom';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <FreeBoardGameBar>
        <Header />
        <GamesList />
        <p style={{ fontSize: '12px', textAlign: 'center' }}>
          Made with ♥
        </p>
      </FreeBoardGameBar>
    );
  }
}

export default Home;
