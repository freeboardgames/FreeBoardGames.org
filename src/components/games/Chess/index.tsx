import * as React from 'react';
import * as shortid from 'shortid';
import { Redirect } from 'react-router';
import GameBar from '../../App/Game/GameBar';
import OpponentPicker from '../../App/Game/OpponentPicker';
import * as PropTypes from 'prop-types';

interface IChessMenuProps {
    match?: any;
    history?: { push: (url: string) => void };
}

// TODO(felizardo): move this to a generic menu in Game folder
class ChessMenu extends React.Component<IChessMenuProps, {}> {
  _onClickHandler: any;
  constructor(props: IChessMenuProps) {
    super(props);
    this._onClickHandler = this._onClick.bind(this);
  }
  render() {
    let alert: React.ReactNode = null;
    const opponentType = this.props.match.params.opponentType;
    const code = this.props.match.params.code;
    if (!opponentType && !code) {
      alert = (<OpponentPicker onClick={this._onClickHandler} />);
    }
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

  _onClick(opponentType: string, code: string) {
    if (opponentType === 'match') {
      const uid = shortid.generate();
      const url = `/g/Chess/${opponentType}/${uid}`;
      this.props.history.push(url);
    }
  }
}

export default ChessMenu;
