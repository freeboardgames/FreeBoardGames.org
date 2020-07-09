import ChatMessage from './ChatMessage';
import Message from './Message';

interface Props {
  messages: Message[];
}

export default function (props: Props) {
  var ulStyles = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  };

  return <ul style={ulStyles}>{props.messages.map(_createMessage)}</ul>;
}

const _createMessage = (message: Message, index: number) => {
  const liStyles = {
    backgroundColor: index % 2 == 1 ? '#ddd' : '#efefef',
    borderBottom: '1px solid #ddd',
    padding: '1rem',
  };

  return (
    <li key={`msg-${index}`} style={liStyles}>
      <ChatMessage message={message} />
    </li>
  );
};
