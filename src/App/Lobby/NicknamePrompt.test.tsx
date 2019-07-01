import React from 'react';
import { NicknamePrompt } from './NicknamePrompt';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '@material-ui/core/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Nickname Prompt', () => {
  let setNicknamePromptMock: jest.Mock;
  let togglePromptMock: jest.Mock;
  let wrapper: Enzyme.ReactWrapper;
  beforeEach(() => {
    setNicknamePromptMock = jest.fn();
    togglePromptMock = jest.fn();
    wrapper = Enzyme.mount(<NicknamePrompt setNickname={setNicknamePromptMock} togglePrompt={togglePromptMock} />);
  });
  it('should prompt for nickname', () => {
    expect(wrapper.html()).toContain('Set Nickname');
  });
  it('should set nickname on click', () => {
    const input = wrapper.find('input');
    input.simulate('change', {
      target: { value: 'foobar' },
    });
    const setButton = wrapper.find(Button);
    setButton.simulate('click');
    expect(setNicknamePromptMock).toHaveBeenCalledWith('foobar');
  });
  it('should set nickname on enter button', () => {
    const input = wrapper.find('input');
    input.simulate('change', {
      target: { value: 'foobar' },
    });
    input.simulate('keypress', { key: 'Enter' });
    expect(setNicknamePromptMock).toHaveBeenCalledWith('foobar');
  });
  it('should call this.props.togglePrompt on click away', () => {
    const instance = wrapper.instance() as any;
    instance._togglePrompt();
    expect(togglePromptMock).toHaveBeenCalled();
  });
});
