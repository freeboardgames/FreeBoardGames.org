import React from 'react';
import ChatMessage from './ChatMessage';
import Message from './Message';

interface Props {
  messages: Message[];
}

export default function ChatMessageHistory(props: Props) {
  return <>{props.messages.map(_createMessage)}</>;
}

const _createMessage = (message: Message, idx: number) => {
  return <ChatMessage message={message} key={idx} />;
};
