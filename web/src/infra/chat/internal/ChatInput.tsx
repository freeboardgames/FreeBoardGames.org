import React from 'react';
import css from './ChatInput.module.css';

interface ChatInputProps {
  sendMessage: (msg: string) => void;
  className?: string;
}

interface ChatInputState {
  inputText: string;
}

export default class ChatInput extends React.Component<ChatInputProps, ChatInputState> {
  state = {
    inputText: '',
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <div className={`${css.InputWrapper} ${this.props.className}`}>
          <input style={{ flex: '1 auto' }} type="text" onChange={this._onChange} value={this.state.inputText} />
          <button className={css.button}>Send</button>
        </div>
      </form>
    );
  }

  _handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.sendMessage(this.state.inputText);
    this.setState({ inputText: '' });
  };

  _onChange = (e: any) => {
    this.setState({ inputText: e.target.value });
  };
}
