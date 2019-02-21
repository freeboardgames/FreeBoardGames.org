import React from 'react';
import ErrorPng from './media/error.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import FreeBoardGameBar from './FreeBoardGameBar';
import SvgError from './media/SvgError';
import Typography from '@material-ui/core/Typography';

const getMessagePage = (type: 'error' | 'loading', message: string) => {
  return () => {
    let icon;
    if (type === 'error') {
      icon = <SvgError style={{ height: '128px' }} />;
    } else {
      icon = <CircularProgress />;
    }
    return (
      <FreeBoardGameBar>
        <div style={{ paddingTop: '16px', textAlign: 'center' }}>
          {icon}
          <Typography variant="title" gutterBottom={true} style={{ paddingTop: '16px'}}>
            {message}
          </Typography>
        </div>
      </FreeBoardGameBar>
    );
  };
};

export default getMessagePage;
