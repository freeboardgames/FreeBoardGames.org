import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { MemoryRouter } from 'react-router';
import { MessagePage } from './MessagePageClass';
import { Link } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });

test('MessagePage starts with link hidden', () => {
  const msg = Enzyme.mount(
    <MemoryRouter>
      <MessagePage type={'loading'} message={'loading'} />
    </MemoryRouter>,
  ).find(MessagePage);
  expect(msg.html()).not.to.contain('messagePage.goHome');
});

test('MessagePage starts with link visible for errors', () => {
  const msg = Enzyme.mount(
    <MemoryRouter>
      <MessagePage type={'error'} message={'Not Found'} />
    </MemoryRouter>,
  ).find(MessagePage);
  expect(msg.html()).to.contain('messagePage.goHome');
});

test('MessagePage has status for error types', () => {
  const msg = Enzyme.mount(
    <MemoryRouter>
      <MessagePage type={'error'} message={'Not Found'} />
    </MemoryRouter>,
  ).find(MessagePage);
  const status = msg.find('Status');
  expect(status.length).to.equal(1);
});

test('MessagePage does not have status for non-error types', () => {
  const msg = Enzyme.mount(
    <MemoryRouter>
      <MessagePage type={'loading'} message={'loading'} />
    </MemoryRouter>,
  ).find(MessagePage);
  const status = msg.find('Status');
  expect(status.length).to.equal(0);
});

test('MessagePage link is hidden', () => {
  const msg = Enzyme.mount(
    <MemoryRouter>
      <MessagePage type={'loading'} message={'loading'} />
    </MemoryRouter>,
  ).find(MessagePage);
  msg.setState({ linkHidden: true, startTime: 0 });
  (msg.instance() as MessagePage)._animate(125)();
  expect(msg.html()).not.to.contain('messagePage.goHome');
});

test('MessagePage unhides link after 5 seconds', () => {
  const msg = Enzyme.mount(
    <MemoryRouter>
      <MessagePage type={'loading'} message={'loading'} />
    </MemoryRouter>,
  ).find(MessagePage);
  msg.setState({ linkHidden: true, startTime: 0 });
  (msg.find(MessagePage).instance() as MessagePage)._animate(6000)();
  expect(msg.html()).to.contain('messagePage.goHome');
});
