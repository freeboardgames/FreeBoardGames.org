/* eslint-disable react/react-in-jsx-scope */

import MessagePageClass from 'infra/common/components/alert/MessagePageClass';

export default function ErrorPage() {
  return <MessagePageClass type={'error'} message={'Page Not Found'} />;
}
