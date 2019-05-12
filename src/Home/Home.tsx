import React from 'react';
import FreeBoardGameBar from '../App/FreeBoardGameBar';
import Header from './Header';
import { GamesList } from '../App/GamesList';
import { Link } from 'react-router-dom';

interface IHomeProps {
  t: any;
}

class Home extends React.Component<IHomeProps, {}> {
  render() {
    return (
      <FreeBoardGameBar>
        <Header />
        <GamesList />
        <p style={{ fontSize: '12px', textAlign: 'center' }}>
          Made with ♥&nbsp;-&nbsp;
          <Link to="/about">
            {this.props.t('About')}
          </Link>
        </p>
      </FreeBoardGameBar>
    );
  }
}

export default Home;
