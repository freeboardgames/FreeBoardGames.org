import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
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
    playerID: PropTypes.string,
    setShips: PropTypes.any,
  };
  constructor(props: IShipsPlacementProps) {
    super(props);
    this.state = { ships: generateRandomShips(Number(props.playerID)) };
  }

  render() {
    let message = 'Drag & drop, click to rotate';
    const validShips = validateShips(this.state.ships).valid;
    if (!validShips) {
      message = 'INVALID POSITIONING';
    }
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>{message}</h2>
        <Radar
          ships={this.state.ships}
          editable={true}
          onEdit={this.onEdit}
        />
        <Button
          style={{ float: 'right', marginTop: '8px' }}
          variant="contained"
          color="primary"
          onClick={this.done}
          disabled={!validShips}
        >
          Done
        </Button>
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
