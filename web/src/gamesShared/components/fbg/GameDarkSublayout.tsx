import React from 'react';
import Typography from '@material-ui/core/Typography';
import FbgLogo from 'infra/common/components/base/media/fbg_logo_white_48.png';
import Button from '@material-ui/core/Button';
import MoreVert from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IGameArgs } from 'gamesShared/definitions/game';
import { GAMES_MAP } from 'games';
import { GameMode } from 'gamesShared/definitions/mode';
import { Chat } from 'infra/chat/Chat';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { useRouter, NextRouter } from 'next/router';
import { Link } from 'infra/i18n';

interface IGameDarkSublayoutProps {
  children: React.ReactNode;
  optionsMenuItems?: () => IOptionsItems[];
  allowWiderScreen?: boolean;
  gameArgs: IGameArgs;
  avoidOverscrollReload?: boolean;
  dispatch: Dispatch;
  router: NextRouter;
}

interface IGameDarkSublayoutState {
  menuAnchorEl: any;
  prevBgColor: string;
}

export interface IOptionsItems {
  text: string;
  onClick: () => void;
}

const isJest = process.env.JEST_WORKER_ID !== undefined;

class GameDarkSublayoutInternal extends React.Component<IGameDarkSublayoutProps, IGameDarkSublayoutState> {
  constructor(props: IGameDarkSublayoutProps) {
    super(props);
    this.state = { menuAnchorEl: null, prevBgColor: document.body.style.backgroundColor };
    document.body.style.backgroundColor = 'black';
    if (props.avoidOverscrollReload) {
      document.body.style.overscrollBehavior = 'none';
    }
  }

  componentWillUnmount() {
    if (this.props.avoidOverscrollReload) {
      document.body.style.overscrollBehavior = 'auto';
    }
    document.body.style.backgroundColor = this.state.prevBgColor;
  }

  render() {
    const isProdChannel = process.env.NODE_ENV === 'production';
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

    return (
      <>
        <div
          style={{
            display: 'flex',
            maxWidth: this.props.allowWiderScreen ? '1000px' : '500px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Link href="/">
            <a style={{ textDecoration: 'none', display: 'flex' }}>
              <img src={FbgLogo} alt="FreeBoardGames.org" style={{ paddingRight: '16px' }} />
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
            maxWidth: this.props.allowWiderScreen ? '1000px' : '500px',
            color: 'white',
            top: 'calc(50vh - 49px)',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {this.props.children}
        </div>
      </>
    );
  }

  private renderChatButton() {
    if (typeof window === 'undefined' || isJest) {
      return null;
    }
    const gameArgs = this.props.gameArgs;
    if (gameArgs.mode !== GameMode.OnlineFriend) {
      return null;
    }
    const matchId = this.props.router.query.matchId as string;
    return (
      <div style={{ float: 'right' }}>
        <Chat channelType="match" channelId={matchId} dispatch={this.props.dispatch} />
      </div>
    );
  }

  private getOptionsMenuButton() {
    if (this.props.optionsMenuItems) {
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
  }
}

const sublayoutWithRouter = (props) => {
  const router = useRouter();
  return <GameDarkSublayoutInternal {...props} router={router} />;
};

/* istanbul ignore next */
const mapStateToProps = function (state) {
  return {
    user: { ...state.user },
  };
};

// Do not connect to redux or router if using jest... Chat button wont work in jest.
export const GameDarkSublayout = isJest
  ? (GameDarkSublayoutInternal as any)
  : connect(mapStateToProps)(sublayoutWithRouter);
