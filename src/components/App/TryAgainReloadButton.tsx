import Button from '@material-ui/core/Button';
import ReplayIcon from '@material-ui/icons/Replay';

export default function () {
  return (
    <Button variant="outlined" style={{ margin: '8px' }} onClick={() => window.location.reload()}>
      <ReplayIcon style={{ marginRight: '8px' }} />
      Try Again
    </Button>
  );
}
