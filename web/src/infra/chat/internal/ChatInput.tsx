import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';
import { WithTranslation, withTranslation } from 'infra/i18n';
import React from 'react';
import { compose } from 'recompose';
import css from './ChatInput.module.css';

interface ChatInputInnerProps extends WithTranslation {}

interface ChatInputOutterProps {
  sendMessage: (msg: string) => void;
  className?: string;
}

interface ChatInputState {
  inputText: string;
}

class ChatInput extends React.Component<ChatInputInnerProps & ChatInputOutterProps, ChatInputState> {
  state = {
    inputText: '',
  };

  render() {
    const isDisabled = this.state.inputText.length == 0;
    return (
      <form onSubmit={this._handleSubmit} autoComplete="off" noValidate>
        <div className={`${css.InputWrapper} ${this.props.className}`}>
          <TextField
            label={this.props.t('message')}
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

const enhance = compose<ChatInputInnerProps, ChatInputOutterProps>(withTranslation('ChatInput'));

export default enhance(ChatInput);
