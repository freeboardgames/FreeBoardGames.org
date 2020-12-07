import React from 'react';
import ChatMessageHistory from './ChatMessageHistory';
import Message from './Message';
import css from './ChatPanel.css';

interface ChatPanelProps {
  messages: Message[];
  sendMessage: (msg: string) => void;
}

interface ChatPanelState {
  inputText: string;
}

class ChatPanel extends React.Component<ChatPanelProps, ChatPanelState> {
  state = {
    inputText: '',
  };

  render() {
    return (
      <div className={css.window}>
        <ChatMessageHistory messages={this.props.messages} />
        <form style={{ display: 'flex' }} onSubmit={this._handleSubmit}>
          <input style={{ flex: '1 auto' }} type="text" onChange={this._onChange} value={this.state.inputText} />
          <button className={css.button}>Send</button>
        </form>
      </div>
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

export default ChatPanel;
