import React from 'react';
import NicknamePrompt from './NicknamePrompt';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '@material-ui/core/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Nickname Prompt', () => {
  let setNicknamePromptMock: jest.Mock;
  let closePromptMock: jest.Mock;
  let wrapper: Enzyme.ReactWrapper;

  beforeEach(() => {
    setNicknamePromptMock = jest.fn();
    closePromptMock = jest.fn();
    wrapper = Enzyme.mount(<NicknamePrompt setNickname={setNicknamePromptMock} closePrompt={closePromptMock} />);
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

  it('should not set nickname on anything except enter button', () => {
    const input = wrapper.find('input');
    input.simulate('change', {
      target: { value: 'foobar' },
    });
    input.simulate('keypress', { key: 'Escape' });
    expect(setNicknamePromptMock).not.toHaveBeenCalled();
  });

  it('should not set nickname when invalid', () => {
    wrapper.setState({ nameTextField: '' });
    const setButton = wrapper.find(Button);
    setButton.simulate('click');
    expect(setNicknamePromptMock).not.toHaveBeenCalled();

    const errorText: string = wrapper.state('errorText');
    expect(errorText).toEqual('Invalid name.');
  });

  it('requires user to choose a nickname', () => {
    const instance = wrapper.instance() as any;
    instance._handleClickaway();
    expect(closePromptMock).not.toHaveBeenCalled();
  });

  it('allows clickaway if a nickname has already been chosen', () => {
    wrapper.setProps({ nickname: 'foo' });
    const instance = wrapper.instance() as any;
    instance._handleClickaway();
    expect(closePromptMock).toHaveBeenCalled();
  });
});
