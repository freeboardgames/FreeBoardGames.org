import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FbgLogo from './media/fbg_logo_white_48.png';
import { Link } from 'infra/i18n';
import { home } from 'infra/navigation';
import { makeStyles } from '@material-ui/core';
import { nextI18Next } from 'infra/i18n/config';
import LanguageIcon from '@material-ui/icons/Language';

type FBGBarProps = {
  FEATURE_FLAG_readyForDesktopView?: boolean;
  toolbarContent?: React.ReactNode;
};

const handleLanguageChange = (event) => {
  window.location.href = `/${event.target.value}`;
};

function renderLanguageSelect() {
  const { i18n } = nextI18Next.useTranslation();
  const color = 'white!important' as 'white';
  const useWhite = makeStyles({
    select: {
      color,
      '&:before, &:after': {
        display: 'none!important' as 'none',
      },
    },
    icon: {
      fill: color,
    },
  });
  const classes = useWhite();
  return (
    <div style={{ marginLeft: 'auto' }}>
      <Select
        value={i18n.language}
        className={classes.select}
        inputProps={{
          classes: {
            icon: classes.icon,
          },
        }}
        onChange={handleLanguageChange}
        renderValue={() => <LanguageIcon />}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="pt">Português</MenuItem>
        <MenuItem value="de">Deutsch</MenuItem>
      </Select>
    </div>
  );
}

const FreeBoardGamesBar: React.FC<FBGBarProps> = (props) => {
  const maxWidth = props.FEATURE_FLAG_readyForDesktopView ? '1200px' : '500px';

  return (
    <>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <AppBar position="sticky">
          <Toolbar>
            <Link href={() => home()}>
              <a style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <img style={{ marginRight: '8px', height: '48px' }} src={FbgLogo} alt="FbG" />
                <Typography component="h1" variant="h6" style={{ color: 'white' }}>
                  FreeBoardGames.org
                </Typography>
              </a>
            </Link>
            {props.toolbarContent ?? renderLanguageSelect()}
          </Toolbar>
        </AppBar>
      </div>
      <div
        style={{
          maxWidth,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        data-testid={'childrenDiv'}
      >
        {props.children}
      </div>
    </>
  );
};

export default FreeBoardGamesBar;
