import React from 'react';
import css from './ChatInput.module.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

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
    const isDisabled = this.state.inputText.length == 0;
    return (
      <form onSubmit={this._handleSubmit} autoComplete="off" noValidate>
        <div className={`${css.InputWrapper} ${this.props.className}`}>
          <TextField
            label="Message"
            variant="outlined"
            color="secondary"
            onChange={this._onChange}
            value={this.state.inputText}
            className={css.TextField}
            autoFocus
          />
          <IconButton
            color="secondary"
            onClick={this._handleSubmit}
            disabled={isDisabled}
            style={{ marginLeft: '8px' }}
          >
            <SendIcon />
          </IconButton>
        </div>
      </form>
    );
  }

  _handleSubmit = (e: any) => {
    e.preventDefault();
    const text = this.state.inputText;
    if (text.length === 0) {
      return;
    }
    this.props.sendMessage(text);
    this.setState({ inputText: '' });
  };

  _onChange = (e: any) => {
    this.setState({ inputText: e.target.value });
  };
}
