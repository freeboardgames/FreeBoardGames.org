import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SubjectIcon from '@material-ui/icons/Subject';
import { Trans, useTranslation } from 'infra/i18n';
import React from 'react';

const Header = () => {
  return (
    <div style={{ padding: '0 8px' }}>
      <TextContent />
      <Links />
    </div>
  );
};

const TextContent = () => {
  const { t } = useTranslation('Header');

  return (
    <>
      <Typography component="h1" variant="h6" gutterBottom={true} align="center" style={{ marginTop: '16px' }}>
        {t('title')}
      </Typography>
      <Typography
        component="h2"
        variant="body2"
        gutterBottom={true}
        style={{ marginTop: '16px', marginBottom: '16px' }}
      >
        <Trans t={t} i18nKey="description" components={{ b: <b /> }} />
      </Typography>
    </>
  );
};

const Links = () => {
  const { t } = useTranslation('Header');

  return (
    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', padding: '7px' }}>
      <Button
        href="https://github.com/freeboardgames/FreeBoardGames.org"
        target="_blank"
        variant="outlined"
        rel="noopener"
      >
        <CodeIcon style={{ marginRight: '4px' }} />
        {t('code')}
      </Button>

      <Button href="/docs/" target="_blank" variant="outlined">
        <SubjectIcon style={{ marginRight: '4px' }} />
        {t('docs')}
      </Button>

      <Button href="https://discord.gg/AaE6n3n" target="_blank" variant="outlined" rel="noopener">
        <QuestionAnswerIcon style={{ marginRight: '4px' }} />
        {t('chat')}
      </Button>
    </div>
  );
};

export default Header;
