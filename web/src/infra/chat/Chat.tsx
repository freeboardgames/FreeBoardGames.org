import React from 'react';
import { gql } from 'apollo-boost';
import { Subscription } from '@apollo/react-components';
import Message from './internal/Message';
import ChatPanel from './internal/ChatPanel';
import { Dispatch } from 'redux';
import { LobbyService } from 'infra/common/services/LobbyService';

export interface ChatProps {
  channelType: 'room' | 'match';
  channelId: string;
  dispatch: Dispatch;
}

export interface ChatState {
  messageHistory: Message[];
}

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
          // TODO: This should be a button instead, and chat panel shows
          // only if user opens the chat view (or is already open in desktop).
          return <ChatPanel messages={messageHistory} sendMessage={this._sendMessage} />;
        }}
      </Subscription>
    );
  }

  private isSameMessage(m1?: Message, m2?: Message) {
    return m1?.message === m2?.message && m1?.userId === m2?.userId && m1?.isoTimestamp === m2?.isoTimestamp;
  }

  _sendMessage = (msg: string) => {
    // TODO: Refactor this out of lobby service.
    LobbyService.sendMessage(this.props.dispatch, this.props.channelType, this.props.channelId, msg);
  };
}
