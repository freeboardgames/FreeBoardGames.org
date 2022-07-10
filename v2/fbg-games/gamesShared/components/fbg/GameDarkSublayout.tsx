import React from 'react';
import Typography from '@mui/material/Typography';
import FbgLogo from './fbg_logo_white_48.png';
import Button from '@mui/material/Button';
import MoreVert from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IGameArgs } from 'fbg-games/gamesShared/definitions/game';
import Link from 'next/link'

export interface IOptionsItems {
  text: string;
  onClick: () => void;
}

interface IGameDarkSublayoutProps {
  children: React.ReactNode;
  optionsMenuItems?: () => IOptionsItems[];
  maxWidth?: string;
  gameArgs: IGameArgs;
  avoidOverscrollReload?: boolean;
}

interface IGameDarkSublayoutState {
  menuAnchorEl: any;
}

const isJest = process.env.JEST_WORKER_ID !== undefined;

export class GameDarkSublayout extends React.Component<IGameDarkSublayoutProps, IGameDarkSublayoutState> {
  state = { menuAnchorEl: null };

  componentDidMount() {
    if (this.props.avoidOverscrollReload) {
      document.body.style.overscrollBehavior = 'none';
    }
  }

  componentWillUnmount() {
    if (this.props.avoidOverscrollReload) {
      document.body.style.overscrollBehavior = 'auto';
    }
  }

  render() {
    const isProdChannel = process.env.NODE_ENV === 'production';
    const gameName = this.props.gameArgs.name;
    let fbgTopLeftText;
    if (isProdChannel) {
      if (gameName) {
        fbgTopLeftText = (
          <Typography variant="h6" gutterBottom={true} style={{ float: 'left', paddingTop: '9px', color: 'white' }}>
            {gameName}
          </Typography>
        );
      }
    } else {
      fbgTopLeftText = (
        <Typography
          variant="h6"
          gutterBottom={true}
          style={{
            float: 'left',
            marginTop: '10px',
            backgroundColor: 'red',
            color: 'white',
            whiteSpace: 'nowrap',
          }}
        >
          &nbsp;{gameName}&nbsp;
        </Typography>
      );
    }

    return (
      <div style={{width: "100%", height: "100%", backgroundColor: 'black'}}>
        <div
          style={{
            display: 'flex',
            maxWidth: this.props.maxWidth || '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Link href={`/${this.props.gameArgs.lang}`}>
            <a style={{ textDecoration: 'none', display: 'flex' }}>
              <img src={FbgLogo.src} alt="FreeBoardGames.org" style={{ paddingRight: '16px' }} />
              {fbgTopLeftText}
            </a>
          </Link>
          <div style={{ flexGrow: 1 }}></div>
          {this.renderChatButton()}
          {this.getOptionsMenuButton()}
          {this.getOptionsMenuItems()}
        </div>
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'calc(100vh - 49px)',
            textAlign: 'center',
            lineHeight: 'calc(100vh - 49px)',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: this.props.maxWidth || '500px',
              color: 'white',
              display: 'inline-block',
              verticalAlign: 'middle',
              lineHeight: 'normal',
            }}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

  private renderChatButton() {
      // TODO(vdf): Add chat back #launch-blocker
      return null;
  }

  private hasOptionsMenu() {
    return this.props.optionsMenuItems && this.props.optionsMenuItems.length > 0;
  }

  private getOptionsMenuButton() {
    if (this.hasOptionsMenu()) {
      return (
        <Button onClick={this._openOptionsMenu} aria-label="Open options" variant="outlined">
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

  private getOptionsMenuItems() {
    if (this.hasOptionsMenu()) {
      return;
    }
    const { menuAnchorEl } = this.state;
    const menuItems = this.props.optionsMenuItems!().map((option: IOptionsItems, index) => {
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
  }
} 