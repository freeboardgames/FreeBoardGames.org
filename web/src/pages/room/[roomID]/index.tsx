import React from 'react';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { LoadingMessage } from 'infra/common/components/alert/LoadingMessage';

const DynamicRoom = dynamic(() => import('infra/room/Room'), {
  ssr: false,
  loading: LoadingMessage,
});

const Room: NextPage = () => {
  return <DynamicRoom />;
};

Room.getInitialProps = () => {
  return {
    namespacesRequired: [],
  };
};

export default Room;
