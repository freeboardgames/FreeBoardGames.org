import React from 'react';
import { gql } from 'apollo-boost';
import { Subscription } from '@apollo/react-components';
import Message from './internal/Message';
import ChatPanel from './internal/ChatPanel';
import { Dispatch } from 'redux';
import { LobbyService } from 'infra/common/services/LobbyService';
import { isMobileFromReq } from 'infra/common/device/UaHelper';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import css from './Chat.css';

export interface ChatProps {
  channelType: 'room' | 'match';
  channelId: string;
  dispatch: Dispatch;
}

export interface ChatState {
  messageHistory: Message[];
  isOpen: boolean;
}

const isMobile = isMobileFromReq();
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

export class Chat extends React.Component<ChatProps, ChatState> {
  state = {
    messageHistory: [],
    isOpen: !isMobile,
  };

  render() {
    const { channelType, channelId } = this.props;
    return (
      <Subscription subscription={CHAT_SUBSCRIPTION} variables={{ channelType, channelId }}>
        {(resp) => {
          const newMessage = resp.data?.chatMutated;
          let messageHistory = this.state.messageHistory;
          const lastMessage = messageHistory.slice(-1)[0];
          if (!this.isSameMessage(newMessage, lastMessage)) {
            messageHistory = [...messageHistory, newMessage];
            this.setState({ messageHistory });
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
    this.updateBodyRightMargin();
  }

  private renderPanel(messages: Message[]) {
    this.updateBodyRightMargin();
    if (!this.state.isOpen) {
      return null;
    }
    const className = isMobile ? css.MobilePanelWrapper : css.DesktopPanelWrapper;
    return (
      <div className={className}>
        <ChatPanel messages={messages} sendMessage={this._sendMessage} />
      </div>
    );
  }

  private renderButton() {
    return (
      <IconButton aria-label="Toggle chat panel" onClick={this._togglePanel}>
        <ChatIcon />
      </IconButton>
    );
  }

  private isSameMessage(m1?: Message, m2?: Message) {
    return m1?.message === m2?.message && m1?.userId === m2?.userId && m1?.isoTimestamp === m2?.isoTimestamp;
  }

  private updateBodyRightMargin() {
    let newPadding;
    if (typeof window === 'undefined' || !this.state.isOpen || isMobileFromReq()) {
      newPadding = '0px';
    } else {
      newPadding = '250px';
    }
    document.getElementsByTagName('body')[0].style.marginRight = newPadding;
  }

  _sendMessage = (msg: string) => {
    // TODO: Refactor this out of lobby service.
    LobbyService.sendMessage(this.props.dispatch, this.props.channelType, this.props.channelId, msg);
  };

  _togglePanel = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
}
