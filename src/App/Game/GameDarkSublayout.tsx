import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import FbgLogo from '../media/fbg_logo_white_48.png';
import Button from '@material-ui/core/Button';
import MoreVert from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';

interface IGameDarkSublayoutProps {
  children: React.ReactNode;
  optionsMenuItems?: React.ReactNode;
}

interface IGameDarkSublayoutState {
  menuAnchorEl: any;
}

export class GameDarkSublayout extends React.Component<IGameDarkSublayoutProps, IGameDarkSublayoutState> {
  constructor(props: IGameDarkSublayoutProps) {
    super(props);
    if (typeof window !== 'undefined') {
      document.body.style.backgroundColor = 'black';
    }
    this.state = { menuAnchorEl: null };
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = undefined;
  }

  render() {
    return (
      <div>
        <div
          style={{
            position: 'fixed',
            top: '0',
            width: '100%',
          }}
        >
          <div
            style={{
              maxWidth: '500px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Link to="/" style={{ float: 'left', textDecoration: 'none' }}>
              <img
                src={FbgLogo}
                alt="FreeBoardGame.org"
                style={{ float: 'left', paddingRight: '16px' }}
              />
              <Typography
                variant="title"
                gutterBottom={true}
                style={{ float: 'left', paddingTop: '14px', color: 'white' }}
              >
                FreeBoardGame.org
              </Typography>
            </Link>
            {this._getOptionsMenuLink()}
            {this._getOptionsMenu()}
          </div>
        </div>
        <div
          style={{
            position: 'fixed',
            width: '100%',
            maxWidth: '500px',
            color: 'white',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
  _getOptionsMenuLink() {
    if (this.props.optionsMenuItems) {
      return (
        <Button
          onClick={this._openOptionsMenu}
          target="_blank"
          variant="outlined"
          style={{ margin: '8px', float: 'right' }}
        >
          <MoreVert style={{ color: 'white' }} />
        </Button>
      );
    }
  }

  _openOptionsMenu = (event: any) => {
    this.setState({ menuAnchorEl: event.currentTarget });
  }

  _closeOptionsMenu = (event: any) => {
    this.setState({ menuAnchorEl: null });
  }

  _getOptionsMenu = () => {
    const { menuAnchorEl } = this.state;
    return (
      <Menu
        id="simple-menu"
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={this._closeOptionsMenu}
      >
        {this.props.optionsMenuItems}
      </Menu>
    );
  }
}
