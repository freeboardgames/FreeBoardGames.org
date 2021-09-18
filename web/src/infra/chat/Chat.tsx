import React from 'react';
import { gql } from 'apollo-boost';
import { Subscription } from '@apollo/react-components';
import Message from './internal/Message';
import ChatInput from './internal/ChatInput';
import ChatMessageHistory from './internal/ChatMessageHistory';
import { Dispatch } from 'redux';
import { LobbyService } from 'infra/common/services/LobbyService';
import { detectIsMobile } from 'infra/common/device/detectIsMobile';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import css from './Chat.module.css';
import AlertLayer from 'infra/common/components/alert/AlertLayer';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import Badge from '@material-ui/core/Badge';
import { withTranslation, WithTranslation } from 'infra/i18n';
import { compose } from 'recompose';

interface ChatInnerProps extends WithTranslation {}

export interface ChatOutterProps {
  channelType: 'room' | 'match';
  channelId: string;
  dispatch: Dispatch;
}

export interface ChatState {
  messageHistory: Message[];
  isOpen: boolean;
  unseenMessages: number;
}

interface InitialMessageResolver {
  (t: WithTranslation['t']): Message;
}

const INITIAL_MESSAGE: InitialMessageResolver = (t) => ({
  userId: 0,
  userNickname: t('notice.title'),
  message: t('notice.message'),
  isoTimestamp: '',
});

const isMobile = detectIsMobile();
export const CHAT_SUBSCRIPTION = gql`
  subscription ChatMutated($channelType: String!, $channelId: String!) {
    chatMutated(channelType: $channelType, channelId: $channelId) {
      userId
      userNickname
      isoTimestamp
      message
    }
  }
`;

class ChatInternal extends React.Component<ChatInnerProps & ChatOutterProps, ChatState> {
  private messagesRef = React.createRef<HTMLDivElement>();

  state = {
    messageHistory: [INITIAL_MESSAGE(this.props.t)],
    isOpen: !isMobile,
    unseenMessages: 0,
  };

  render() {
    const { channelType, channelId } = this.props;
    return (
      <Subscription subscription={CHAT_SUBSCRIPTION} variables={{ channelType, channelId }}>
        {(resp) => {
          const newMessage = resp.data?.chatMutated;
          let messageHistory = this.state.messageHistory;
          const lastMessage = messageHistory.slice(-1)[0];
          if (newMessage && !this.isSameMessage(newMessage, lastMessage)) {
            messageHistory = [...messageHistory, newMessage];
            let unseenMessages = 0;
            if (!this.state.isOpen) {
              unseenMessages = this.state.unseenMessages + 1;
            }
            this.setState({ messageHistory, unseenMessages });
          }
          const button = this.renderButton();
          const panel = this.renderPanel(messageHistory);
          return (
            <>
              {button}
              {panel}
            </>
          );
        }}
      </Subscription>
    );
  }

  componentWillUnmount() {
    this.updateBodyRightMargin(true);
    this.setState({ isOpen: false });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  private renderPanel(messages: Message[]) {
    this.updateBodyRightMargin();
    if (!this.state.isOpen) {
      return null;
    }
    if (isMobile) {
      return (
        <AlertLayer onClickaway={this._togglePanel}>
          <Card className={css.MobileCard}>{this.renderInnerPanel(messages, false)}</Card>
        </AlertLayer>
      );
    } else {
      return (
        <Paper elevation={4} className={css.DesktopPanelWrapper}>
          {this.renderInnerPanel(messages, true)}
        </Paper>
      );
    }
  }

  private renderInnerPanel(messages: Message[], isDesktop: boolean) {
    let className = '';
    let closeButton = this.renderMobileHeader();
    if (isDesktop) {
      className = css.DesktopInput;
    }
    return (
      <div className={css.InnerPanel}>
        {closeButton}
        <div style={{ flex: '1', overflowY: 'auto' }} ref={this.messagesRef}>
          <ChatMessageHistory messages={messages} />
        </div>
        <ChatInput sendMessage={this._sendMessage} className={className} />
      </div>
    );
  }

  private renderMobileHeader() {
    return (
      <div>
        <IconButton aria-label="close" onClick={this._togglePanel} className={css.ChatClose}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="span" className={css.ChatTitle}>
          {this.props.t('chat')}
        </Typography>
      </div>
    );
  }

  private renderButton() {
    return (
      <IconButton aria-label="Toggle chat panel" onClick={this._togglePanel}>
        <Badge badgeContent={this.state.unseenMessages} color="secondary">
          <ChatIcon style={{ color: 'white' }} />
        </Badge>
      </IconButton>
    );
  }

  private isSameMessage(m1?: Message, m2?: Message) {
    return m1?.message === m2?.message && m1?.userId === m2?.userId && m1?.isoTimestamp === m2?.isoTimestamp;
  }

  private updateBodyRightMargin(forceClose?: boolean) {
    let newPadding;
    if (forceClose || typeof window === 'undefined' || !this.state.isOpen || detectIsMobile()) {
      newPadding = '0px';
    } else {
      newPadding = '250px';
    }
    document.getElementsByTagName('body')[0].style.marginRight = newPadding;
  }

  private scrollToBottom() {
    const el = this.messagesRef.current;
    if (!el) {
      return;
    }
    el.scrollTop = el.scrollHeight;
  }

  _sendMessage = (msg: string) => {
    // TODO: Refactor this out of lobby service.
    LobbyService.sendMessage(this.props.dispatch, this.props.channelType, this.props.channelId, msg);
  };

  _togglePanel = () => {
    const isOpen = !this.state.isOpen;
    let unseenMessages = this.state.unseenMessages;
    if (isOpen) {
      unseenMessages = 0;
    }
    this.setState({ isOpen, unseenMessages });
  };
}

const enhance = compose<ChatInnerProps, ChatOutterProps>(withTranslation('Chat'));

export const Chat = enhance(ChatInternal);
