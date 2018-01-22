import * as React from 'react';
import GameBar from '../../App/GameBar/GameBar';

class Chess extends React.Component<{}, {}> {
  render() {
    const alert = (<h1>GAME OVER</h1>);
    return (
      <GameBar
        text="Hello world"
        backgroundColor="red"
        textColor="white"
        alert={alert}
      >
          <h1>Hello, Chess world!</h1>
      </GameBar>
    );
  }
}

export default Chess;
