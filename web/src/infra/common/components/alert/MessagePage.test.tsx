import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MessagePage, { MessagePageInternal } from './MessagePage';

Enzyme.configure({ adapter: new Adapter() });

test('MessagePage starts with link hidden', () => {
  const msg = Enzyme.mount(<MessagePage type={'loading'} message={'loading'} />).find(MessagePageInternal);
  expect(msg.html()).not.toContain('Go Home');
});

test('MessagePage starts with link visible for errors', () => {
  const msg = Enzyme.mount(<MessagePage type={'error'} message={'Not Found'} />).find(MessagePageInternal);
  expect(msg.html()).toContain('Go Home');
});

test('MessagePage does not have status for non-error types', () => {
  const msg = Enzyme.mount(<MessagePage type={'loading'} message={'loading'} />).find(MessagePageInternal);
  const status = msg.find('Status');
  expect(status.length).toEqual(0);
});

test('MessagePage link is hidden', () => {
  const msg = Enzyme.mount(<MessagePage type={'loading'} message={'loading'} />).find(MessagePageInternal);
  msg.setState({ linkHidden: true, startTime: 0 });
  (msg.find(MessagePageInternal).instance() as MessagePageInternal).requestID = 1;
  (msg.instance() as MessagePageInternal)._animate(125)();
  expect(msg.html()).not.toContain('Go Home');
});

test('MessagePage unhides link after 5 seconds', () => {
  const context = { requestID: 1 };
  const msg = Enzyme.mount(<MessagePage type={'loading'} message={'loading'} />, { context }).find(MessagePageInternal);
  msg.setState({ linkHidden: true, startTime: 0 });
  // satisfy the if () in _animate
  (msg.find(MessagePageInternal).instance() as MessagePageInternal).requestID = 1;
  (msg.find(MessagePageInternal).instance() as MessagePageInternal)._animate(6000)();
  expect(msg.html()).toContain('Go Home');
});

test('MessagePage calls cancelAnimationFrame if requestID is not null', () => {
  const windowMock = jest.fn();
  (global as any).cancelAnimationFrame = windowMock;
  const context = { requestID: 1 };
  const msg = Enzyme.mount(<MessagePage type={'loading'} message={'loading'} />, { context }).find(MessagePageInternal);
  msg.setState({ linkHidden: true, startTime: 0 });
  // satisfy the if () in _animate
  (msg.find(MessagePageInternal).instance() as MessagePageInternal).requestID = 1;
  (msg.find(MessagePageInternal).instance() as MessagePageInternal)._animate(6000)();
  (msg.find(MessagePageInternal).instance() as MessagePageInternal).componentWillUnmount();
  expect(windowMock.mock.calls.length).toEqual(1);
});
