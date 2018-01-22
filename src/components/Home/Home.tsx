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
      </TurnatoBar>
    );
  }
}

export default Home;
