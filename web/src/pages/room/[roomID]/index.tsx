import { LoadingMessage } from 'infra/common/components/alert/LoadingMessage';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

const DynamicRoom = dynamic(() => import('infra/room/Room'), {
  ssr: false,
  loading: LoadingMessage,
});

const Room: NextPage = () => {
  return <DynamicRoom />;
};

Room.getInitialProps = () => {
  return {
    namespacesRequired: [
      'Chat',
      'ChatInput',
      'CustomizationBar',
      'GameCard',
      'GameCardWithOverlay',
      'GameSharing',
      'ListPlayers',
      'LoadingMessage',
      'MessagePage',
      'NicknamePrompt',
      'NicknameRequired',
      'QrCodePopup',
      'Room',
      'SearchBox',
      'StartMatchButton',
    ],
  };
};

export default Room;
