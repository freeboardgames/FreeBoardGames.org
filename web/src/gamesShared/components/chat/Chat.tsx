import React from 'react';
import ChatMessageHistory from './ChatMessageHistory';
import Message from './Message';
import css from './Chat.css';

interface State {
  messages: Message[];
  inputText: string;
}

const MESSAGES: Message[] = [
  { text: 'msg1', timestamp: '9:14 pm' },
  { text: 'msg2', timestamp: '9:14 pm' },
];

class Chat extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      messages: MESSAGES,
      inputText: '',
    };
  }

  render() {
    return (
      <div className={css.window}>
        <ChatMessageHistory messages={this.state.messages} />
        <form style={{ display: 'flex' }} onSubmit={this._handleSubmit}>
          <input style={{ flex: '1 auto' }} type="text" onChange={this._onChange} value={this.state.inputText} />
          <button className={css.button}>Send</button>
        </form>
      </div>
    );
  }

  _handleSubmit = (e: any) => {
    e.preventDefault();
    const newMessage: Message = { text: this.state.inputText, timestamp: '9:37 pm' };
    const nextMessages = this.state.messages.concat([newMessage]);
    this.setState({ messages: nextMessages, inputText: '' });
  };

  _onChange = (e: any) => {
    this.setState({ inputText: e.target.value });
  };
}

export default Chat;
