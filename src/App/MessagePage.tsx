import React from 'react';
import ErrorPng from './media/error.png';
import CircularProgress from '@material-ui/core/CircularProgress';
import FreeBoardGameBar from './FreeBoardGameBar';
import SvgError from './media/SvgError';
import MessagePageClass from './MessagePageClass';
import Typography from '@material-ui/core/Typography';

const getMessagePage = (type: 'error' | 'loading', message: string) => {
  return () => {
    return (
      <MessagePageClass type={type} message={message} />
    );
  };
};

export default getMessagePage;
