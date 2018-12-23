import * as React from 'react';
import * as PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { IShip, generateRandomShips, validateShips } from './game';
import { Radar } from './Radar';

interface IShipsPlacementProps {
  playerID: string;
  setShips: (ships: IShip[]) => void;
}

interface IShipsPlacementState {
  ships: IShip[]
}

export class ShipsPlacement extends React.Component<IShipsPlacementProps, IShipsPlacementState> {
  static propTypes = {
    playerID: PropTypes.string.isRequired,
    setShips: PropTypes.any,
  };
  constructor(props: IShipsPlacementProps) {
    super(props);
    this.state = {ships: generateRandomShips(Number(props.playerID))};
  }

  render() {
    let message = 'Drag & drop ships, click to rotate';
    const validShips = validateShips(this.state.ships).valid;
    if (!validShips) {
      message = 'INVALID POSITIONING';
    }
    return (
      <div
          style={{position: 'fixed', top: '50%', transform: 'translate(0, -50%)',
                  width: '100%', maxWidth: '500px'}}
      >
        <h2 style={{color: 'white', textAlign: 'center'}}>{message}</h2>
        <Radar
          ships={this.state.ships}
          editable={true}
          onEdit={this.onEdit}
        />
        <RaisedButton
          style={{float: 'right', marginTop: '8px'}}
          label="Done"
          primary={true}
          onClick={this.done}
          disabled={!validShips}
        />
      </div>
    );
  }

  onEdit = (ships: IShip[]) => {
    this.setState({
      ships,
    });
  }

  done = () => {
    this.props.setShips(this.state.ships);
  }
}
