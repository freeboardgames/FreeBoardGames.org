import React from 'react';

interface MobileCarouselProps {
  height?: string;
}

export class MobileCarousel extends React.Component<MobileCarouselProps, {}> {
  static defaultProps = {
    height: '250px',
  };
  render() {
    return (
      <div
        style={{
          overflowX: 'auto',
          overflowY: 'hidden',
          height: this.props.height,
          width: '100%',
          display: 'flex',
          flexWrap: 'nowrap',
          paddingBottom: '15px',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
