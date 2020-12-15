import ChatMessage from './ChatMessage';
import Message from './Message';

interface Props {
  messages: Message[];
}

export default function (props: Props) {
  return props.messages.map(_createMessage);
}

const _createMessage = (message: Message) => {
  return <ChatMessage message={message} />;
};
