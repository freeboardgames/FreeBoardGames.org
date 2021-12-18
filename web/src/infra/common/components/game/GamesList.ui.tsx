/* eslint-disable react/prop-types */
import Typography from '@material-ui/core/Typography';
import { DesktopView, MobileView } from 'infra/common/device/DesktopMobileView';
import { Link, useTranslation } from 'infra/i18n';
import { LanguagePathResolver } from 'infra/navigation';
import React, { Fragment, ReactNode } from 'react';
import { defaultProps } from 'recompose';
import css from './GamesList.module.css';

export function Container({ children }: { children: ReactNode }) {
  return <div style={{ marginBottom: '16px' }}>{children}</div>;
}

export function Header({ children, showDevOnly }: { children: ReactNode; showDevOnly: boolean }) {
  return (
    <>
      <DesktopView>
        <div style={{ display: 'inline' }}>
          <div style={{ float: 'right', width: '235px' }}>{children}</div>
          <Title showDevOnly={showDevOnly} />
        </div>
      </DesktopView>

      <MobileView>
        <Title showDevOnly={showDevOnly} />
        {children}
      </MobileView>
    </>
  );
}

export function Games({ children }: { children: ReactNode }) {
  return <div style={{ display: 'flex', flexWrap: 'wrap' }}>{children}</div>;
}

export function Navigable({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: LanguagePathResolver;
  onClick?: () => void;
}) {
  const Wrapper = onClick ? Fragment : defaultProps({ href })(Link);
  return (
    <Wrapper>
      <a {...(onClick && { onClick })} className={css.Card}>
        {children}
      </a>
    </Wrapper>
  );
}

export function Title({ showDevOnly }: { showDevOnly: boolean }) {
  const { t } = useTranslation('GamesList');
  return (
    <Typography component="h2" variant="h6" style={{ marginBottom: '16px' }}>
      {showDevOnly ? t('games_in_development') : t('games')}
    </Typography>
  );
}
