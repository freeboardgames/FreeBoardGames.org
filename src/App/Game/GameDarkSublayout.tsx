import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import FbgLogo from '../media/fbg_logo_white_48.png';
import Button from '@material-ui/core/Button';
import MoreVert from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

interface IGameDarkSublayoutProps {
  children: React.ReactNode;
  optionsMenuItems?: () => IOptionsItems[];
}

interface IGameDarkSublayoutState {
  menuAnchorEl: any;
}

export interface IOptionsItems {
  text: string;
  onClick: () => void;
}

export class GameDarkSublayout extends React.Component<IGameDarkSublayoutProps, IGameDarkSublayoutState> {
  constructor(props: IGameDarkSublayoutProps) {
    super(props);
    document.body.style.backgroundColor = 'black';
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
              <img src={FbgLogo} alt="FreeBoardGame.org" style={{ float: 'left', paddingRight: '16px' }} />
              <Typography
                variant="h6"
                gutterBottom={true}
                style={{ float: 'left', paddingTop: '14px', color: 'white' }}
              >
                FreeBoardGame.org
              </Typography>
            </Link>
            {this._getOptionsMenuButton()}
            {this._getOptionsMenuItems()}
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
  _getOptionsMenuButton() {
    if (this.props.optionsMenuItems) {
      return (
        <Button
          onClick={this._openOptionsMenu}
          target="_blank"
          aria-label="Open options"
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
  };

  _closeOptionsMenu = () => {
    this.setState({ menuAnchorEl: null });
  };

  _wrapOnClick = (onClickFunc: () => void) => () => {
    // close menu, call onClickFunc
    this._closeOptionsMenu();
    onClickFunc();
  };

  _getOptionsMenuItems = () => {
    if (!this.props.optionsMenuItems) {
      return;
    }
    const { menuAnchorEl } = this.state;
    const menuItems = this.props.optionsMenuItems().map((option: IOptionsItems, index) => {
      return (
        <MenuItem key={`option-${index}`} onClick={this._wrapOnClick(option.onClick)}>
          {option.text}
        </MenuItem>
      );
    });
    return (
      <Menu id="simple-menu" anchorEl={menuAnchorEl} open={Boolean(menuAnchorEl)} onClose={this._closeOptionsMenu}>
        {menuItems}
      </Menu>
    );
  };
}
