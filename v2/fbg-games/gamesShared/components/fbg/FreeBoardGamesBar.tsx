import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FbgLogo from './fbg_logo_white_48.png';
import Link from 'next/link'
import LanguageIcon from '@mui/icons-material/Language';

interface FBGBarProps {
  lang: string;
  toolbarContent?: React.ReactNode;
  children: React.ReactNode;
};

function LanguageButton() {
  return (
    <div style={{ marginLeft: 'auto' }}>
      <Link href={`/`}>
        <a style={{ textDecoration: 'none', display: 'flex', color: 'white' }}>
          <LanguageIcon />
        </a>
      </Link>
    </div>
  );
}

export const FreeBoardGamesBar: React.FC<FBGBarProps> = (props) => {
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
            <Link href={`/${props.lang}`}>
              <a style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <img style={{ marginRight: '8px' }} width="48" height="48" src={FbgLogo.src} alt="FbG" />
                <Typography component="h1" variant="h6" style={{ color: 'white' }}>
                  FreeBoardGames.org
                </Typography>
              </a>
            </Link>
            {props.toolbarContent ?? <LanguageButton />}
          </Toolbar>
        </AppBar>
      </div>
      <div
        style={{
          maxWidth: '1200px',
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