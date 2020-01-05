import React from 'react';

class ScrollToTop extends React.Component<{}, {}> {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return this.props.children;
  }
}

export default ScrollToTop;
