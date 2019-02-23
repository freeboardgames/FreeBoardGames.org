import React from 'react';
import ErrorPng from './media/error.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import FreeBoardGameBar from './FreeBoardGameBar';
import SvgError from './media/SvgError';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

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
    if (props.type !== 'error') {
      requestAnimationFrame(this._animate(Date.now()));
    }
  }

  _animate = (now: number) => () => {
    const elapsed = now - this.state.startTime;
    const timedout = elapsed > 5000;
    const linkHidden = timedout ? false : this.props.type !== 'error';
    this.setState({
      ... this.state,
      linkHidden,
    });
    if (linkHidden && !timedout) {
      requestAnimationFrame(this._animate(Date.now()));
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
      linkHome = <Link to="/">Go home</Link>;
    }
    return (
      <FreeBoardGameBar>
        <div style={{ paddingTop: '16px', textAlign: 'center' }}>
          {icon}
          <Typography variant="title" gutterBottom={true} style={{ paddingTop: '16px' }}>
            {this.props.message}
            <br />
            {linkHome}
          </Typography>
        </div>
      </FreeBoardGameBar>
    );
  }
}

export default MessagePage;
