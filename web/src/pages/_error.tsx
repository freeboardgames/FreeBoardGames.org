/* eslint-disable react/react-in-jsx-scope */

import MessagePage from 'infra/common/components/alert/MessagePage';

export default function ErrorPage() {
  return <MessagePage type={'error'} message={'Page Not Found'} />;
}
