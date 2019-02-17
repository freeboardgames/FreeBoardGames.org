import React from 'react';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { expect } from 'chai';

describe('Header', () => {

  it('should contain Chess option', () => {
    const wrapper = mount(<MuiThemeProvider><Header /></MuiThemeProvider>);
    expect(wrapper.text()).to.include('Free as in freedom');
  });

});
