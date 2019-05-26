import React from 'react';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import CircularProgress from '@material-ui/core/CircularProgress';
import FreeBoardGameBar from './FreeBoardGameBar';
import SvgError from './media/SvgError';
import Typography from '@material-ui/core/Typography';
import { Status } from 'rrc';
import { trans } from 'ts-easy-i18n';

interface IMessageState {
  linkHidden: boolean;
  startTime: number;
}

interface IMessageProps {
  type: string;
  message: string;
}

export class MessagePage extends React.Component<IMessageProps, IMessageState> {
  constructor(props: IMessageProps) {
    super(props);
    this.state = {
      linkHidden: props.type !== 'error',
      startTime: Date.now(),
    };
    if (typeof window !== 'undefined' && props.type !== 'error') {
      requestAnimationFrame(this._animate(Date.now()));
    }
  }

  _animate = (now: number) => () => {
    const elapsed = now - this.state.startTime;
    const linkHidden = elapsed < 5000;
    this.setState({
      ... this.state,
      linkHidden,
    });
    if (linkHidden) {
      requestAnimationFrame(this._animate(Date.now()));
    }
  }

  render() {
    let icon;
    let linkHome;
    let status;
    if (this.props.type === 'error') {
      status = <Status code="404" />;
      icon = <SvgError style={{ height: '128px' }} />;
    } else {
      icon = <CircularProgress />;
    }
    if (!this.state.linkHidden) {
      linkHome = (
        <Button href="/" variant="outlined" style={{ margin: '8px' }}>
          <HomeIcon style={{ marginRight: '8px' }} />
          {trans('messagePage.goHome')}
        </Button>);
    }
    return (
      <FreeBoardGameBar>
        <div style={{ paddingTop: '16px', textAlign: 'center' }}>
          {status}
          {icon}
          <Typography variant="title" gutterBottom={true} style={{ paddingTop: '16px' }}>
            {this.props.message}
            <br /><br />
            {linkHome}
          </Typography>
        </div>
      </FreeBoardGameBar>
    );
  }
}

export default MessagePage;
