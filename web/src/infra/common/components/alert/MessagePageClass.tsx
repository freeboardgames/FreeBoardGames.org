import React from 'react';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import CircularProgress from '@material-ui/core/CircularProgress';
import FreeBoardGamesBar from '../base/FreeBoardGamesBar';
import SvgError from './media/SvgError';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';

interface IMessageState {
  linkHidden: boolean;
  startTime: number;
}

interface IMessageProps {
  type: string;
  message: string;
  skipFbgBar?: boolean;
  actionComponent?: JSX.Element;
}

export class MessagePage extends React.Component<IMessageProps, IMessageState> {
  requestID: number = null;
  state = {
    linkHidden: this.props.type !== 'error',
    startTime: Date.now(),
  };
  constructor(props: IMessageProps) {
    super(props);
    if (typeof window !== 'undefined' && props.type !== 'error') {
      this.requestID = window.requestAnimationFrame(this._animate(Date.now()));
    }
  }

  _animate = (now: number) => () => {
    if (this.requestID) {
      const elapsed = now - this.state.startTime;
      const linkHidden = elapsed < 5000;
      this.setState({
        ...this.state,
        linkHidden,
      });
      if (linkHidden) {
        this.requestID = window.requestAnimationFrame(this._animate(Date.now()));
      }
    }
  };

  componentWillUnmount() {
    if (this.requestID) {
      window.cancelAnimationFrame(this.requestID);
      this.requestID = null;
    }
  }

  render() {
    let icon;
    let linkHome;
    if (this.props.type === 'error') {
      icon = <SvgError style={{ height: '128px' }} />;
    } else {
      icon = <CircularProgress />;
    }
    if (!this.state.linkHidden) {
      const goHomeText = 'Go Home';
      linkHome = (
        <Link href="/">
          <a style={{ textDecoration: 'none' }}>
            <Button variant="outlined" style={{ margin: '8px' }}>
              <HomeIcon style={{ marginRight: '8px' }} />
              {goHomeText}
            </Button>
          </a>
        </Link>
      );
    }
    const content = (
      <div style={{ paddingTop: '16px', textAlign: 'center' }}>
        {icon}
        <Typography variant="h6" gutterBottom={true} style={{ paddingTop: '16px' }}>
          {this.props.message}
          <br />
          <br />
          {linkHome}
          {this.props.actionComponent}
        </Typography>
      </div>
    );
    if (this.props.skipFbgBar) {
      return content;
    } else {
      return <FreeBoardGamesBar>{content}</FreeBoardGamesBar>;
    }
  }
}

export default MessagePage;
