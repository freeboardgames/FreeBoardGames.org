import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import FbgLogo from '../media/fbg_logo_white_48.png';
import Button from '@material-ui/core/Button';
import MoreVert from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IGameArgs } from './GameBoardWrapper';
import { GAMES_MAP } from './../../../games/index';

interface IGameDarkSublayoutProps {
  children: React.ReactNode;
  optionsMenuItems?: () => IOptionsItems[];
  gameArgs?: IGameArgs;
}

interface IGameDarkSublayoutState {
  menuAnchorEl: any;
  prevBgColor: string;
}

export interface IOptionsItems {
  text: string;
  onClick: () => void;
}

export class GameDarkSublayout extends React.Component<IGameDarkSublayoutProps, IGameDarkSublayoutState> {
  constructor(props: IGameDarkSublayoutProps) {
    super(props);
    this.state = { menuAnchorEl: null, prevBgColor: document.body.style.backgroundColor };
    document.body.style.backgroundColor = 'black';
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = this.state.prevBgColor;
  }

  render() {
    const isProdChannel = process.env.CHANNEL === 'production';
    let fbgTopLeftText;
    if (isProdChannel) {
      fbgTopLeftText = (
        <Typography
          variant="h6"
          gutterBottom={true}
          style={{ float: 'left', lineHeight: '48px', color: 'white', margin: 0 }}
        >
          FreeBoardGames.org
        </Typography>
      );
    } else {
      fbgTopLeftText = (
        <Typography
          variant="h6"
          gutterBottom={true}
          style={{ float: 'left', marginTop: '10px', backgroundColor: 'red', color: 'white' }}
        >
          &nbsp;{process.env.VERSION}&nbsp;
        </Typography>
      );
    }
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
            <Link href="/">
              <a style={{ float: 'left', textDecoration: 'none' }}>
                <img
                  src={FbgLogo}
                  alt="FreeBoardGames.org"
                  style={{ float: 'left', paddingRight: '16px', paddingLeft: '6px' }}
                />
                {fbgTopLeftText}
              </a>
            </Link>
            {this._getOptionsMenuButton()}
            {this._getOptionsMenuItems()}
            <Typography variant="h6" style={{ textAlign: 'center', clear: 'both', color: 'white', fontSize: '1em' }}>
              {typeof this.props.gameArgs !== 'undefined' ? GAMES_MAP[this.props.gameArgs.gameCode].name : undefined}
            </Typography>
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
