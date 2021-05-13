import React from 'react';
import MessagePage from '../components/alert/MessagePage';

const getMessagePage = (type: 'error' | 'loading', message: string, skipFbgBar: boolean = false) => {
  return () => {
    return <MessagePage type={type} message={message} skipFbgBar={skipFbgBar} />;
  };
};

export default getMessagePage;
