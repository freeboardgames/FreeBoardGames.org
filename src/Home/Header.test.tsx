import React from 'react';
import { MemoryRouter } from 'react-router';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import { I18nextProvider } from 'react-i18next';
import i18n from '../App/i18nForTests';

describe('Header', () => {

  it('should contain header', () => {
    const wrapper = mount(
      <MemoryRouter>
        <I18nextProvider i18n={i18n}>
          <Header />
        </I18nextProvider>
      </MemoryRouter>);
    expect(wrapper.text()).to.include('Free as in freedom');
  });

});
