import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import { StaticRouter } from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import waitForExpect from 'wait-for-expect';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  const context = {};
  it('should go to home', async () => {
    const wrapper = Enzyme.mount(
      <StaticRouter location={'/'} context={context}>
        <App />
      </StaticRouter>,
    );
    await waitForExpect(() => {
      expect(wrapper.html()).to.contain('We at FreeBoardGame.org');
    });
  });

  it('should show not found page', () => {
    const wrapper = Enzyme.mount(
      <StaticRouter location={'/doesnotexist'} context={context}>
        <App />
      </StaticRouter>,
    );
    expect(wrapper.html()).to.contain('Not Found');
  });

  it('should show invalid locale', async () => {
    const wrapper = Enzyme.mount(
      <StaticRouter location={'/pt/about'} context={context}>
        <App />
      </StaticRouter>,
    );
    await waitForExpect(() => {
      expect(wrapper.html()).to.contain('Invalid Locale');
    });
  });
});
