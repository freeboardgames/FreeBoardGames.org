import * as React from 'react';
import Header from './Header';
import GamesSection from './GamesSection';

class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Header />
        <GamesSection />
      </div>
    );
  }
}

export default Home;
