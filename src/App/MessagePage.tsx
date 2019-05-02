import React from 'react';
import MessagePageClass from './MessagePageClass';

const getMessagePage = (type: 'error' | 'loading', message: string) => {
  return () => {
    return (
      <MessagePageClass type={type} message={message} />
    );
  };
};

export default getMessagePage;
