import Message from './Message';

interface Props {
  message: Message;
}

export default function (props: Props) {
  const { message } = props;
  return (
    <p style={{ marginBottom: 0 }}>
      <strong>{message.userNickname}&gt;</strong>
      &nbsp;
      {message.message}
      <br />
      <small>{message.isoTimestamp}</small>
    </p>
  );
}
