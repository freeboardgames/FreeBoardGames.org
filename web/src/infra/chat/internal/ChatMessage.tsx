import Message from './Message';
import css from './ChatMessage.module.css';
import Typography from '@material-ui/core/Typography';

interface Props {
  message: Message;
}
const zeroPad = (num, places) => String(num).padStart(places, '0');

function formatTimestamp(isoTimestamp: string) {
  if (!isoTimestamp) {
    return '';
  }
  const d = new Date(isoTimestamp);
  return `${zeroPad(d.getHours(), 2)}:${zeroPad(d.getMinutes(), 2)}:${zeroPad(d.getSeconds(), 2)}`;
}

export default function (props: Props) {
  const { message } = props;
  return (
    <div className={css.ChatMessageWrapper}>
      <div>
        <Typography variant="subtitle2" component="span">
          {message.userNickname}
        </Typography>
        <Typography variant="caption" component="span" className={css.ChatMessageTime}>
          {formatTimestamp(message.isoTimestamp)}
        </Typography>
      </div>
      <div>
        <Typography variant="body2" component="span">
          {message.message}
        </Typography>
      </div>
    </div>
  );
}
