import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { MessagePage } from './MessagePage';

Enzyme.configure({ adapter: new Adapter() });

test('MessagePage starts with link hidden', () => {
  const msg = Enzyme.mount(<MessagePage type={'loading'} message={'loading'} />).find(MessagePage);
  expect(msg.html()).not.toContain('Go Home');
});

test('MessagePage starts with link visible for errors', () => {
  const msg = Enzyme.mount(<MessagePage type={'error'} message={'Not Found'} />).find(MessagePage);
  expect(msg.html()).toContain('Go Home');
});

test('MessagePage does not have status for non-error types', () => {
  const msg = Enzyme.mount(<MessagePage type={'loading'} message={'loading'} />).find(MessagePage);
  const status = msg.find('Status');
  expect(status.length).toEqual(0);
});

test('MessagePage link is hidden', () => {
  const msg = Enzyme.mount(<MessagePage type={'loading'} message={'loading'} />).find(MessagePage);
  msg.setState({ linkHidden: true, startTime: 0 });
  (msg.find(MessagePage).instance() as MessagePage).requestID = 1;
  (msg.instance() as MessagePage)._animate(125)();
  expect(msg.html()).not.toContain('Go Home');
});

test('MessagePage unhides link after 5 seconds', () => {
  const context = { requestID: 1 };
  const msg = Enzyme.mount(<MessagePage type={'loading'} message={'loading'} />, { context }).find(MessagePage);
  msg.setState({ linkHidden: true, startTime: 0 });
  // satisfy the if () in _animate
  (msg.find(MessagePage).instance() as MessagePage).requestID = 1;
  (msg.find(MessagePage).instance() as MessagePage)._animate(6000)();
  expect(msg.html()).toContain('Go Home');
});

test('MessagePage calls cancelAnimationFrame if requestID is not null', () => {
  const windowMock = jest.fn();
  (global as any).cancelAnimationFrame = windowMock;
  const context = { requestID: 1 };
  const msg = Enzyme.mount(<MessagePage type={'loading'} message={'loading'} />, { context }).find(MessagePage);
  msg.setState({ linkHidden: true, startTime: 0 });
  // satisfy the if () in _animate
  (msg.find(MessagePage).instance() as MessagePage).requestID = 1;
  (msg.find(MessagePage).instance() as MessagePage)._animate(6000)();
  (msg.find(MessagePage).instance() as MessagePage).componentWillUnmount();
  expect(windowMock.mock.calls.length).toEqual(1);
});
