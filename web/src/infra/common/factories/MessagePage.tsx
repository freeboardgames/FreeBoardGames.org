import { useTranslation } from 'infra/i18n';
import React from 'react';
import MessagePage from '../components/alert/MessagePage';

const getMessagePage = (type: 'error' | 'loading', message: string, skipFbgBar: boolean = false) => {
  return () => {
    return <MessagePage type={type} message={message} skipFbgBar={skipFbgBar} />;
  };
};

export default getMessagePage;

export const Connecting = () => {
  const [t] = useTranslation('MessagePage');
  return <MessagePage type="loading" message={t('connecting')} />;
};

export const GameNotFound = () => {
  const [t] = useTranslation('MessagePage');
  return <MessagePage type="error" message={t('game_not_found')} />;
};

export const InvalidGameMode = () => {
  const [t] = useTranslation('MessagePage');
  return <MessagePage type="error" message={t('invalid_game_mode')} />;
};

export const Downloading = ({ name }) => {
  const [t] = useTranslation('MessagePage');
  return <MessagePage type="loading" message={t('downloading', { name })} />;
};

export const FailedDownload = ({ name }) => {
  const [t] = useTranslation('MessagePage');
  return <MessagePage type="error" message={t('failed_to_download', { name })} />;
};
