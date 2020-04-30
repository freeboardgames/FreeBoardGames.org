import React from 'react';
import { connect } from 'react-redux';

class TestRedux extends React.Component<any, any> {
  render() {
    return (
      <div>
        <button onClick={this._doStuff}>click me</button>
        <br />
        <p>{this.props.foo}</p>
      </div>
    );
  }

  _doStuff = () => {
    this.props.dispatch({ type: 'FOO', payload: 'bar' });
  };
}

const mapStateToProps = function (state) {
  return {
    foo: state.foo,
  };
};

export default connect(mapStateToProps)(TestRedux);
