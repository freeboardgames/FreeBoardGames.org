import React from 'react';
import MessagePageClass from './MessagePageClass';

const getMessagePage = (type: 'error' | 'loading', message: string, skipFbgBar: boolean = false) => {
  return () => {
    return <MessagePageClass type={type} message={message} skipFbgBar={skipFbgBar} />;
  };
};

export default getMessagePage;
