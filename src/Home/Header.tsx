import React from 'react';
import Button from '@material-ui/core/Button';
import CodeIcon from '@material-ui/icons/Code';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';

class Header extends React.Component<{}, {}> {
  render() {
    const { t, i18n } = useTranslation();
    return (
      <div>
        <Typography variant="title" gutterBottom={true} align="center" style={{ marginTop: '16px' }}>
          {t('headerTitle')}
        </Typography>
        <Typography variant="body1" gutterBottom={true} style={{ marginTop: '16px' }}>
          We at FreeBoardGame.org want to bring free games for everybody.
          Free as in "free beer" <i>and</i> as in "freedom".
          Not only do you get to enjoy free high quality games everywhere,
          but you also can study how they are made, change them, and contribute back to the community!
        </Typography>
        {this._links()}
      </div>
    );
  }
  _links() {
    return (
      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Button
          href="https://github.com/freeboardgame/FreeBoardGame.org"
          target="_blank"
          variant="outlined"
          style={{ margin: '8px' }}
        >
          <CodeIcon style={{ marginRight: '8px' }} />
          GitHub
        </Button>
        <Button href="https://discord.gg/AaE6n3n" target="_blank" variant="outlined" style={{ margin: '8px' }}>
          <QuestionAnswerIcon style={{ marginRight: '8px' }} />
          Discord
        </Button>
      </div>
    );
  }
}

export default Header;
