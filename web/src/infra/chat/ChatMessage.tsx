import Message from './Message';

interface Props {
  message: Message;
}

export default function (props: Props) {
  const { message } = props;
  return (
    <p style={{ marginBottom: 0 }}>
      {message.text}
      <br />
      <small>{message.timestamp}</small>
    </p>
  );
}
