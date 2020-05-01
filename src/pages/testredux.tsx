import React from 'react';
import { connect } from 'react-redux';
import NicknameRequired from '../components/Lobby/NicknameRequired';

export default class TestRedux extends React.Component<any, any> {
  render() {
    return (
      <NicknameRequired onSuccess={console.log} requiredIf={true}>
        <p>foo</p>
      </NicknameRequired>
    );
  }

}

