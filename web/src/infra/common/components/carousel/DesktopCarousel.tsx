import React from 'react';

export class DesktopCarousel extends React.Component<{}, {}> {
  render() {
    return (
      // TODO: https://discourse.wicg.io/t/drag-to-scroll-a-simple-way-to-scroll-sideways-on-desktop/3627
      <div style={{ overflow: 'hidden', height: '250px', width: '100%', display: 'flex', flexWrap: 'nowrap' }}>
        {this.props.children}
      </div>
    );
  }
}
