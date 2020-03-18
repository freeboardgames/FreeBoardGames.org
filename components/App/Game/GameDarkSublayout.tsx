import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import FbgLogo from '../media/fbg_logo_black_256.png';
import Button from '@material-ui/core/Button';
import MoreVert from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { IGameArgs } from './GameBoardWrapper';
import { GAMES_MAP } from 'games';
import { DesktopView } from 'components/DesktopMobileView';

interface IGameDarkSublayoutProps {
  children: React.ReactNode;
  optionsMenuItems?: () => IOptionsItems[];
  gameArgs: IGameArgs;
}

interface IGameDarkSublayoutState {
  feedback: boolean;
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
    this.state = { feedback: null, menuAnchorEl: null, prevBgColor: document.body.style.backgroundColor };
    document.body.style.backgroundColor = 'black';
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = this.state.prevBgColor;
  }

  render() {
    const isProdChannel = process.env.CHANNEL === 'production';
    const gameName = GAMES_MAP[this.props.gameArgs.gameCode].name;
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
          style={{ float: 'left', marginTop: '10px', backgroundColor: 'red', color: 'white' }}
        >
          &nbsp;{gameName}&nbsp;
        </Typography>
      );
    }

    let feedbackButtonOrText;
    if (this.state.feedback) {
      feedbackButtonOrText = (
        <Typography variant="h6" gutterBottom={true} style={{ float: 'right', paddingTop: '10px', color: 'white' }}>
          Desktop View is Experimental.
        </Typography>
      );
    } else {
      feedbackButtonOrText = (
        <DesktopView thresholdWidth={680}>
          <Button
            onClick={this._toggleFeedback}
            aria-label="Desktop View is Experimental."
            variant="outlined"
            style={{ float: 'right', paddingTop: '14px' }}
          >
            <FeedbackIcon style={{ color: 'white' }} />
          </Button>
        </DesktopView>
      );
    }

    return (
      <div>
        <div
          style={{
            position: 'fixed',
            top: '0',
            width: '100%',
            zIndex: 1,
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
                <img src={FbgLogo} alt="FreeBoardGames.org" style={{ float: 'left', paddingRight: '16px', height: "48px", width: "48px" }} />
                {fbgTopLeftText}
              </a>
            </Link>
            {this._getOptionsMenuButton()}
            {this._getOptionsMenuItems()}
            {feedbackButtonOrText}
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

  _toggleFeedback = () => {
    setTimeout(() => {
      this.setState({ feedback: false });
    }, 5000);
    this.setState({ feedback: !this.state.feedback });
  };

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
